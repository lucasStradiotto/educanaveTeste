<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$idTurmaAdd = $_POST['idTurmaAdd'];
$selectAddAluno = $_POST['selectAddAluno'];
$selectAddProfessor = $_POST['selectAddProfessor'];
$selectAddMundo = $_POST['selectAddMundo'];



$dadosTurma = $conn->atualizarTurma($idTurmaAdd, $selectAddAluno, $selectAddProfessor, $selectAddMundo);

echo json_encode($dadosTurma);
