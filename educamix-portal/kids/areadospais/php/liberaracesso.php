<?php
session_start();
header('Access-Control-Allow-Origin: *');
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

require_once('phphelper/regex.php');
include_once('conexao.php');
$conn = new conecta();

$chave = $_POST['chave'];
$token_valido = date('Y-m-d H:i:s');

$result = $conn->liberarAcesso($chave);

if($token_valido < $result['data_expirar']){
    die('{"error":0}');
} else {
    die('{"error":3}');
}