<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$email = $_POST['email'];
$senha = md5($_POST['senha']);
$senha2 = md5($_POST['senha2']);
$nome = $_POST['nome'];
$perfil = 'professor';

if(!preg_match($regex['email'], $email)){
    //ERRO 1 Email invalido
    die('{"error":1}');
}
if( strlen($senha) < 6 && strlen($senha) > 12 ){
    //ERRO 2 Senha invalida pelo n de caracteres
    die('{"error":2}');
}
if( $senha != $senha2 ){
    //ERRO 3 Senhas não batem
    die('{"error":3}');
}
if( strlen($nome) < 2 ){
    //ERRO 4 Nome invalido
    die('{"error":4}');
}

$result = $conn->cadastrar($email, $senha, $senha2, $nome, $perfil);

die('{"error": 0}');