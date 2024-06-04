<?php
header('Access-Control-Allow-Origin: *');

require_once('conexao.php');

$conn = new conecta();

$result = $conn->verificaEmail($_SESSION['login']);

$turma = $result[0]['idUsuario'];

$rs = $conn->verificaTurma($turma, $result[0]['idUsuario']);

if($rs == 'false'){
    session_destroy();
    header('Location:config.php');
    print_r("Entrou no if");
}