<?php
session_start();


require_once('../php/conexao.php');

ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL); 

$query = array(
        'index'=>'mixkids',
        'type'=>'pais',
        'body'=>array(
                'email' => @$_GET['email'],
                'senha' => @$_GET['senha'],
                'nome'  => @$_GET['nome'] ,
                'oem'   => @$_GET['oem']  ,
                'modelo'=> @$_GET['modelo']
        )
    );
$result = $client->index($query);

if($result['created'] == 1)
{
        print_r('Usuário criado com sucesso!');
}else
{
        print_r('Erro ao criar usuário.');
}
