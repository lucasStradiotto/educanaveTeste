<?php
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');
$conn = new conecta();

$idUsuario = $_POST['idUsuario'];
$senha = md5($_POST['senha']);
$senha2 = md5($_POST['senha2']);
$chave = $_POST['chave'];

$result = $conn->salvarNovaSenha($idUsuario, $senha, $senha2);

$conn->excluirToken($chave);
die('{"error":0}');
