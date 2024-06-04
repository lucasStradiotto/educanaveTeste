<?php
/*
     * ERROS:
     * 0 = TUDO OK
     * 1 = Nome invalido
     * 2 = Data invalida
     * 3 = Erro ao inserir no banco
     */
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];


if ($act == 'att') {

    $nome = $_POST['nome'];
    $idAluno = $_POST['id'];
    $nasc = $_POST['nasc'];
    $senha = $_POST['senha'];
    $resp_nome = $_POST['resp_nome'];
    $sexo = $_POST['sexo'];
    $avatar = $_POST['avatar'];

    $results = $conn->atualizarAluno($idAluno, $nome, $nasc, $senha, $resp_nome, $sexo, $avatar);

    if ($results > 0) {
        die('{"error":0}');
    } else {
        die('{"error":3}');
    }
} else if ($act == 'remove') {

    $id = $_POST['id'];

    $resultado = $conn->removeAlunoTurma($id);
    
    $result = $conn->deletarAluno($id);

    die('{"error":0}');
} else {
    die('{"error":3}');
}
