<?php
ini_set('display_errors',1);
header('Access-Control-Allow-Origin: *');

require_once('conexao.php');

$user = '';

/* Pega o usuario pelo ID */
if( isset( $_GET['id'] ) )
{

	$query = array(
		'index'=>'mixkids',
		'type' =>'pais',
		'id'   =>$_GET['id']
	);
	$user = $client->get($query);
}
/* Pega o usuario pelo email */
else if( isset( $_GET['email'] ) )
{

	$query = array(
        'index'=>'mixkids',
        'type'=> 'pais',
        'body'=>array('query'=>array('match'=>array(
            'email'=>array(
                'query'=> $_GET['email'],
                'type' => 'phrase'
            )
        )))
    );
    $result = $client->search($query);

    if(@$result['hits']['total'] == 0){
        die('Email não encontrado');
    }
    $user = $result['hits']['hits'][0];

}
/* Se não tiver nenhum parametro para pegar o usuario, mostra o erro */
else
{
	die("é necessario passar um id ou email como parametro");
}
print_r($user['_id']);

/** dar update no usuario */
$atualizar = array(
    'index'=>'mixkids',
    'type'=>'pais',
    'id'=> $user['_id'],
    'body'=>array(
        'doc'=>array(
            'modelo' => ""
        ),
        'doc_as_upsert' => true
    )
);
print_r($atualizar);
$results = $client->update($atualizar);

if($results['_version'] > 0 ){
    die('OK');
}else{
    die('Falhou!');
}