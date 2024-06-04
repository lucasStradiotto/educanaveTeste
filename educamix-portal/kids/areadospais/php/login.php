<?php
session_start();
header('Access-Control-Allow-Origin: *');
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
include_once('conexao.php');
$conn = new conecta();

$act = $_GET['act'];

if ($act == 'portal') {

    $email = preg_replace('/[^[:alnum:]_.-@]/', '', $_POST['email']);
    $senha = md5($_POST['senha']);

    $result = $conn->login($email, $senha);

    if ($result) {
        $perfil = $result[0]['perfil'];
        $codProfessor = $result[0]['codProfessor'];
        $idProfessor = $result[0]['idUsuario'];
        $nomeProfessor = $result[0]['nome'];

        $_SESSION['login'] = $email;
        $_SESSION['senha'] = $senha;
        $_SESSION['perfil'] = $perfil;
        $_SESSION['codProfessor'] = $codProfessor;
        $_SESSION['idUsuario'] = $idProfessor;
        $_SESSION['nomeProfessor'] = $nomeProfessor;
        die('{"error": 0}');
    } else {
        die('{"error": 2}');
        exit();
    }
} else if ($act == 'app') {

    $email = preg_replace('/[^[:alnum:]_.-@]/', '', $_POST['email']);
    $senha = md5($_POST['senha']);
    
    $result = $conn->login($email, $senha);

    if($result){
        $result[0]['id'] = $result[0]['idUsuario'];
        $result[0]['error'] = 0;

        $result[0] = \array_diff_key($result[0], ["idUsuario" => "xy", "senha" => "xy", "senha2" => "xy"]);

        die(json_encode($result[0]));
    } else {
        $result[0]['error'] = 2;
        die(json_encode($result[0]));
    }
}
