<?php
/*
 * ERROS:
 * 0 = TUDO OK
 * 1 = Nome invalido
 * 2 = Data invalida
 * 3 = Erro ao inserir no banco
 *
 * 5 = OEM inválido
 */
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');

$conn = new conecta();

if($_GET['act'] == 'att-dados'){

    $nome = $_POST['nome'];
    $oem = $_POST['oem'];

    if($oem != ''){

        if($oem == "PH7HC"){//TODO: ADICIONAR OUTRAS FABRICANTES E MODELOS AQUI CASO NECESSARIO
        }else{
            try{
                $search = $client->get(array(
                    'index'=>'mixkids',
                    'type'=>'oem',
                    'id'=>$oem
                ));

                if(@$search['found'] == 1){
                    //TODO dar update no oem
                    $updateOEM = array(
                        'index'=>'mixkids',
                        'type'=>'oem',
                        'id'=>$oem,
                        'body'=>array(
                            'doc'=>array(
                                'valido'=>true,
                                'email'=>$_SESSION['login']
                            ),
                            'doc_as_upsert' => true
                        )
                    );

                }else{
                    die('{"error":5}');
                }
            }catch(Exception $e){
                die('{"error":5}');
            }
        }
    }

    $atualizar = array(
        'index'=>'mixkids',
        'type'=>'pais',
        'id'=>$_SESSION['id'],
        'body'=>array(
            'doc'=>array(
                'nome' => $nome,
                'oem' => $oem
            ),
            'doc_as_upsert' => true
        )
    );
    $results = $client->update($atualizar);
    if($results['_version'] > 0 ){
        $client->update($updateOEM);
        sleep(2);
        die('{"error":0}');
    }else{
        die('{"error":3}');
    }



}else if($_GET['act'] == 'att-senha'){

    $senha = $_POST['senha'];
    $senha1 = $_POST['senha1'];
    $senha2 = $_POST['senha2'];

    if($senha != $_SESSION['senha']){
        die('{"error":1}');
    }

    if($senha1 == ''){
        die('{"error":2}');
    }

    if($senha1 != $senha2){
        die('{"error":2}');
    }

    $id = $_SESSION['id'];
    $results = $conn->atualizarSenha($id, $senha1);

    $_SESSION['senha'] = $senha1;
    die('{"error":0}');

}else{

    die('{"error":3}');

}
