<?php
/*
 * error
 * 0: usuario e senha corretos(OK)
 * 1: usuario não cadastrado
 * 2: usuario ou senha incorretos
 * 3: sem informações
 * 4: Aparelho diferente
 * 5: Erro no servidor
 */
session_start();
header('Access-Control-Allow-Origin: *');

require_once('conexao.php');
if(isset($_SESSION['login']) && isset($_SESSION['senha'])){
    if($_SESSION['login'] != '' && $_SESSION['senha'] != ''){
        session_unset();
    }
}
if(!isset($_GET['email']) || !isset($_GET['senha'])){
    die('{"error":3}');
}else{
    $email = $_GET['email'];
    $senha = $_GET['senha'];
    $query = array(
        'index'=>'mixkids',
        'type'=> 'pais',
        'body'=>array('query'=>array('match'=>array(
            'email'=>array(
                'query'=> $email,
                'type' => 'phrase'
            )
        )))
    );
    $result = $client->search($query);

    if(@$result['hits']['total'] == 0 || $email == ""){
        die('{"error":1}');
    }
    if($senha != $result['hits']['hits'][0]['_source']['senha']){
        die('{"error":2}');
    }


    $query = array(
        'index' => 'mixkids',
        'type' => 'oem',
        'body' => array('query' => array('match' => array('idPai' => array(
            'query'=>$result['hits']['hits'][0]['_id'],
            'type'=>'phrase'
        ))))
    );
    $cod = $client->search($query);





    $liberar = true;
    if(isset($_GET['marca'])){

        if($cod['hits']['total'] > 0){
            if(@$cod['_source']['modelo'] != ''){
                if($_GET['marca'] != $cod['_source']['modelo']){
                    //TODO: Envia e-mail de notificação para a troca de modelo do tablet associado a este código oem
                    die('{"error": 4}');
                }
            }else{
                if($cod['hits']['hits'][0]['_source']['oem'] == "PH7HC"){
                    if(strripos($_GET['marca'], "PH7HC") === false){
                        $update = array(
                            'index'=>'mixkids',
                            'type'=>'oem',
                            'id'=>$cod['hits']['hits'][0]['_id'],
                            'body'=>array(
                                'doc'=>array(
                                    'modelo'=>$_GET['marca']
                                ),
                                'doc_as_upsert' => true
                            )
                        );
                        $ress = $client->update($update);

                        if($ress['_version'] != 1){
                            die('{"error": 5}');
                        }
                    }else{
                        die('{"error":4}');
                    }
                }else{
                    $update = array(
                        'index'=>'mixkids',
                        'type'=>'oem',
                        'body'=>array(
                            'doc'=>array(
                                'modelo'=>$_GET['marca']
                            ),
                            'doc_as_upsert' => true
                        )
                    );
                    $ress = $client->update($update);

                    if($ress['_version'] != 1){
                        die('{"error": 5}');
                    }
                }
            }
        }

    }else{
        if($cod['hits']['total'] > 0){
            if(@$cod['hits']['hits'][0]['_source']['modelo'] != ''){
                $liberar = true;
            }else{
                //TODO: notifica que código oem ainda não foi validado
            }
        }
    }
    print_r($cod);


    if($liberar){
        $_SESSION['acesso'] = 'premium';
    }else{
        if($cod['hits']['total'] > 0){
            $_SESSION['acesso'] = 'incompleto';
        }else{
            $_SESSION['acesso'] = 'limitado';
        }
    }
    $_SESSION['id'] = $result['hits']['hits'][0]['_id'];
    $_SESSION['login'] = $email;
    $_SESSION['senha'] = $senha;

    die('{"error":0, "id":"'.$_SESSION['id'].'", "contatos":'.json_encode(@$result['hits']['hits'][0]['_source']['contatos']).'}');
}
