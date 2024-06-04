<?php
header('Access-Control-Allow-Origin: *');
session_start();

require_once('conexao.php');

$conn = new conecta();

if(!$_SESSION['login']){
    header('Location: index.php');
    exit();
}

$email = $_SESSION['login'];
$senha = $_SESSION['senha'];

$result = $conn->login($email, $senha);

$_SESSION['idProfessor'] = $result[0]['idUsuario'];

if(!$result){
    session_destroy();
    header('Location:index.php');
}

