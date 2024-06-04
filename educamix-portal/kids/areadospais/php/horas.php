<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');

$conn = new conecta();

$turma = $_POST['idTurma'];

$result = $conn->getHorarios($turma);

$array = [];

$array['error'] = 0;
$array['result'] = $result;

die(json_encode($array));
