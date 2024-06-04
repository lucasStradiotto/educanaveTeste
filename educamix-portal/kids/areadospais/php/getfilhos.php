<?
/*
 * ERROS:
 * 0 = TUDO OK
 * 1 = Não possui o id do pai
 */
header('Access-Control-Allow-Origin: *');
session_start();
require_once('phphelper/regex.php');
require_once('conexao.php');

if(isset($_SESSION['id'])){
    $idPai = $_SESSION['id'];
}else if(isset($_POST['idpai'])){
    $idPai = $_POST['idpai'];
}else{
    die('{"error":2}');
}

$search = array(
    'index'=>'mixkids',
    'type'=>'filho',
    'body'=>array('query'=>array('match'=>array(
        'id'=>array(
            'query'=> $idPai,
            'type' => 'phrase'
        )
    )))
);
$result = $client->search($search);

if(@$result['hits']['total'] > 0){
    $filho = '[';
    $c = 0;
    foreach($result['hits']['hits'] as $child){
        if($c > 0){
            $filho = $filho.',';
        }
        $info = $child['_source'];
        $filho = $filho.'{"id":"'.$child['_id'].'", "senha":"'.$info['senha'].'",  "sexo":"'.$info['sexo'].'", "avatar":"'.$info['avatar'].'","mundo":"'.$info['mundo'].'", "idPai":"'.$info['id'].'", "nome":"'.$info['nome'].'", "dias":'.json_encode($info['dias']).' }';

        $c++;
    }
    $filho = $filho.']';
    die('{"error":0, "result":'.$filho.'}');
}else{
    die('[]');
}