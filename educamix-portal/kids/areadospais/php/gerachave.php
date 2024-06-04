<?php
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$chave = $conn->liberarAcesso($chave);

if(isset($chave)){
    die('{"error":0}');
} else {
    die('{"error":3}');
}