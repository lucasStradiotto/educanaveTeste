<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];

if ($act == 'selectAluno') {

    $idSemTurma = 1;
    $idTurma = $_POST['idTurma'];
    $idProfessor = $_POST['idProfessor'];

    $dadosAlunos = $conn->selecionaAlunoTurma($idSemTurma, $idProfessor);

    die(json_encode($dadosAlunos));
} else if ($act == 'listar') {

    $idTurma = $_POST['idTurma'];

    $dadosTurma = $conn->searchAlunoTurma($idTurma);

    die(json_encode($dadosTurma));
} else if ($act == 'addAluno') {

    $idAluno = $_POST['idAlunoTurma'];
    $idTurma = $_POST['idTurma'];
    $idSemTurma = 1;

    $removeAluno = $conn->removerAlunoTurma($idAluno, $idSemTurma);

    $dadosTurma = $conn->cadastrarAlunoTurma($idAluno, $idTurma);

    die('{"error":0}');
} else if ($act == 'deleteAluno') {

    $idAluno = $_POST['idAluno'];
    $idTurma = $_POST['idTurma'];
    $idSemTurma = 1;

    $removeAluno = $conn->deletarAlunoTurma($idAluno, $idTurma);

    $dadosTurma = $conn->cadastrarAlunoTurma($idAluno, $idSemTurma);

    die('{"error":0}');
} else if ($act == 'listarturmaprofessor') {

    $idProfSessao = $_POST['idProfSessao'];

    $dadosTurma = $conn->searchTurmaProfessor($idProfSessao);

    echo json_encode($dadosTurma);
} else if ($act == 'remover') {
    $idTurma = $_POST['id'];

    $searchTurma = $conn->searchTurmasID($idTurma);

    foreach ($searchTurma as $key => $value) {
        $idAluno = $value['idAluno'];

        $deleteAlunoTurma = $conn->deletarAlunoTurma($idAluno, $idTurma);
        $deleteAluno = $conn->deletarAluno($idAluno);
    }

    $idturmaPost = $idTurma;

    $removeVideoTurma = $conn->removeVideoTurma($idturmaPost);
    $removeJogo1Turma = $conn->removeJogo1Turma($idturmaPost);
    $removeJogo2Turma = $conn->removeJogo2Turma($idturmaPost);
    $removeJogo3Turma = $conn->removeJogo3Turma($idturmaPost);
    $removeJogo4Turma = $conn->removeJogo4Turma($idturmaPost);
    $removeJogo5Turma = $conn->removeJogo5Turma($idturmaPost);
    $removeJogo6Turma = $conn->removeJogo6Turma($idturmaPost);
    $removeJogo7Turma = $conn->removeJogo7Turma($idturmaPost);
    $removeJogo8Turma = $conn->removeJogo8Turma($idturmaPost);
    $removeJogo9Turma = $conn->removeJogo9Turma($idturmaPost);
    $removeEbook1Turma = $conn->removeEbook1Turma($idturmaPost);
    $removeEbook2Turma = $conn->removeEbook2Turma($idturmaPost);
    $removeEbook3Turma = $conn->removeEbook3Turma($idturmaPost);
    $removeEbook4Turma = $conn->removeEbook4Turma($idturmaPost);
    $removeEbook5Turma = $conn->removeEbook5Turma($idturmaPost);
    $removeEbook6Turma = $conn->removeEbook6Turma($idturmaPost);
    $removeEbook7Turma = $conn->removeEbook7Turma($idturmaPost);
    $removeEbook8Turma = $conn->removeEbook8Turma($idturmaPost);
    $removeEbook9Turma = $conn->removeEbook9Turma($idturmaPost);
    $removeJogoRfid1Turma = $conn->removeJogoRfid1Turma($idturmaPost);
    $removeJogoRfid2Turma = $conn->removeJogoRfid2Turma($idturmaPost);
    $removeJogoRfid3Turma = $conn->removeJogoRfid3Turma($idturmaPost);
    $removeJogoRfid4Turma = $conn->removeJogoRfid4Turma($idturmaPost);
    $removeJogoRfid5Turma = $conn->removeJogoRfid5Turma($idturmaPost);
    $removeJogoRfid6Turma = $conn->removeJogoRfid6Turma($idturmaPost);
    $removeJogoRfid7Turma = $conn->removeJogoRfid7Turma($idturmaPost);
    $removeJogoRfid8Turma = $conn->removeJogoRfid8Turma($idturmaPost);
    $removeJogoRfid9Turma = $conn->removeJogoRfid9Turma($idturmaPost);
    $removeAvatar = $conn->removeAvatar($idturmaPost);
    $removeHistorico = $conn->removeHistorico($idturmaPost);
    $removeHorasdeUso = $conn->removeHorasdeUso($idturmaPost);
    $removeSite = $conn->removeSite($idturmaPost);
    $removeMusica = $conn->removeMusica($idturmaPost);
    $deleteTurma = $conn->removerTurma($idTurma);

    die('{"error":0}');
}
