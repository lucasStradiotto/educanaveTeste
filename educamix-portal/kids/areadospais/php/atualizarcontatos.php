<?
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
/*
 * ERROR:
 * 0 = TUDO OK
 * 1 = ID não encontrado
 * 2 = Erro ao inserir no banco
 * 102 = ID invalido
 */
header('Access-Control-Allow-Origin: *');
session_start();

require_once('conexao.php');

$error = '';
if(isset($_SESSION['id'])){
    $idPai = $_SESSION['id'];
}else if(isset($_POST['idpai'])){
    $idPai = $_POST['idpai'];
}else{
    $error = '{"error":102}';
}
if(@$_GET['act'] == 'att'){


    if($error == ''){
        $contatos = $_POST['contato'];
        sort($contatos);
        $search = $client->get(array(
            'index'=>'mixkids',
            'type'=> 'pais',
            'id'=>$idPai
        ));
        if(@$search['found'] != 1){
            $error = '{"error":1}';
        }
        if($error == ''){
            $atualizar = array(
                'index'=>'mixkids',
                'type'=>'pais',
                'id'=>$idPai,
                'body'=>array(
                    'doc'=>array(
                        'contatos'=>$contatos
                    ),
                    'doc_as_upsert' => true
                )
            );

            $results = $client->update($atualizar);

            if($results['_version'] > 0 ){
                $error = '{"error":0}';
            }else{
                $error = '{"error":2}';
            }
        }
    }
    if(isset($_GET['ajax'])){
        die($error);
    }
    header('Location:../config.php?e='.$error);


}else if(@$_GET['act'] == 'get'){


    $res = $client->get(array(
        'index'=>'mixkids',
        'type'=>'pais',
        'id'=>$idPai
    ));
    if($error == ''){
        if(@$res['found'] == 1){
            if(isset($res['_source']['contatos'])){//TODO: ESSE IF SERÁ UTIL APENAS DURANTE O DESENVOLVIMENTO
                $c = 0;
                $lista = '';
                foreach($res['_source']['contatos'] as $ctt){
                    if($c > 0){
                        $lista = $lista.',';
                    }
                    $lista = $lista.'{"email":"'.$ctt['email'].'","nome":"'.$ctt['nome'].'"}';
                    $c++;
                }
                $error = '{"error":0,"result":['.$lista.']}';
            }else{
                $error = '{"error" : 3}';
            }
        }else{
            $error = '{"error" : 1}';
        }
    }
    if(isset($_GET['ajax'])){
        die($error);
    }
    header('Location:../config.php?e='.$error);

}else{

}