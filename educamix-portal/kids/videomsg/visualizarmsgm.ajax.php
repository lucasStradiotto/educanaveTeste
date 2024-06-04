<?
session_start();
header('Access-Control-Allow-Origin: *');
require_once('../areadospais/php/conexao.php');
require_once('../areadospais/php/phphelper/regex.php');

$client->update(array(
    'index'=>'mixkids',
    'type'=>'mensagem',
    'id'=>$_POST['id'],
    'body'=>array(
        'doc'=>array(
            'visualizado'=>'true'
        ),
        'doc_as_upsert' => true
    )
));