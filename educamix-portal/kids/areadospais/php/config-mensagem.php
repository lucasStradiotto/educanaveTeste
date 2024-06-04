<?
/*
 * ERROS:
 * 0 = TUDO OK
 * 2 = Não existe
 * 3 = Erro ao inserir no banco
 * 4 = ação invalida
 */
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');
if($_GET['act'] == 'excluir'){
    $id = $_POST['id'];

    $query = array(
        'index' => 'mixkids',
        'type' => 'mensagem',
        'id' => $id
    );
    $result = $client->get($query);
    if($result['found'] == 1){
        $ress = $client->delete($query);

        if($ress['found'] == 1){
            $file = str_replace(
                    'https://www.educamix.com.br/kids/',
                    '/var/www/educamix/html/kids/',
                    $result['_source']['videoId']);
            unlink($file);
            unlink(substr($file,0,-4).'jpeg');
            sleep(2);
            die('{"error":0}');
        }else{
            die('{"error" : 3}');
        }
    }else{
        die('{"error":2}');
    }
}
else {
    die('{"error" : 4}');
}