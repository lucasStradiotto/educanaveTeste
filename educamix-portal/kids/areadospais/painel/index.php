<?php
session_start();


require_once('../php/conexao.php');

ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL); 

if(@$_GET['op'] == 'logar')
	logar();
else if(@$_GET['op'] == 'logout')
	logout();
else if(@$_GET['op'] == 'editar')
	editar();
else if(@$_GET['op'] == 'excluir')
	excluir();
else if(@$_GET['op'] == 'criar')
	criar();
else if(!isset($_SESSION['admin']))
	login();
else
	usuarios();

function login($erro = '')
{
	$erros = $erro;
	include 'login.php';
}


function logar()
{
	if(@$_POST['email'] == 'alexandre@ktudu.com' && @$_POST['senha'] == 'KeeP298!@#')
	{
		$_SESSION['admin'] = 'ok';
		usuarios();
	}else
	{
		login('Usuario ou senha incorretos');
	}
}


function logout()
{
	session_destroy();
	login();
}


function usuarios($mensagem = '')
{
	global $client;

    $search = $client->search(array(
        'index' => 'mixkids',
        'type'  => 'pais',
        'size'  => 99999
    ));
	include 'usuarios.php';
}


function editar()
{
	global $client;


	$pai = @$_POST['id'];

    $search = $client->get(array(
        'index'=>'mixkids',
        'type'=> 'pais',
        'id'=>$pai
    ));

    if(@$search['found'] == 1)
    {
        $atualizar = array(
            'index'=>'mixkids',
            'type'=>'pais',
            'id'=>$pai,
            'body'=>array(
                'doc'=>array(
                	'email' => @$_POST['email'],
                	'senha' => @$_POST['senha'],
                	'nome'  => @$_POST['nome'],
                	'oem'   => @$_POST['oem'],
                	'modelo'=> @$_POST['modelo']
                ),
                'doc_as_upsert' => true
            )
        );

        $results = $client->update($atualizar);

        if($results['_version'] > 0)
        {
        	sleep(2);
	    	usuarios('Atualizado com sucesso!');
        }else
	    {
	    	usuarios('Erro ao atualizar.');
	    }
    }else
    {
    	usuarios('Erro ao atualizar.');
    }
}

function excluir()
{
	global $client;


	$pai = @$_GET['id'];

	if(@$_GET['ok'] == 1)
	{
	    $result = $client->delete(array(
	        'index' => 'mixkids',
	        'type'  => 'pais',
	        'id'    => $pai
	    ));
	    if($result['found'] == 1){
	        sleep(2);
	    	usuarios('Excluido com sucesso!');
	    }else{
    		usuarios('Erro ao atualizar.');
	    }
	}else
	{
	    $pai = $client->get(array(
	        'index' => 'mixkids',
	        'type'  => 'pais',
	        'id'    => $pai
	    ));
		include 'excluir.php';
	}
}

function criar()
{
	global $client;

    $query = array(
        'index'=>'mixkids',
        'type'=>'pais',
        'body'=>array(
        	'email' => @$_POST['email'],
        	'senha' => @$_POST['senha'],
        	'nome'  => @$_POST['nome'] ,
        	'oem'   => @$_POST['oem']  ,
        	'modelo'=> @$_POST['modelo']
        )
    );
    $result = $client->index($query);
    
    if($result['created'] == 1)
    {
	    usuarios('Usuário criado com sucesso!');
    }else
    {
    	usuarios('Erro ao criar usuário.');
    }
}
