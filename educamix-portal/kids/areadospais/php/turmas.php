<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];

if ($act == 'professor') {

    $dadosProfessor = $conn->searchProfessor();

    echo json_encode($dadosProfessor);
    
} else if ($act == 'alunos') {

    $codTurma = $_POST['idTurma'];

    $dadosAluno = $conn->searchAlunoTurma($codTurma);

    $array = [];
    $array['error'] = 0;
    $array['result'] = $dadosAluno;

    die(json_encode($array));

} else if ($act == 'turmas') {

    $codProfessor = $_POST['codProfessor'];

    $dadosTurma = $conn->searchTurmaProfessor($codProfessor);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $dadosTurma;

    die(json_encode($array));

} else if ($act == 'addTurma') {
    
    $nome_turma = $_POST['nome_turma'];
    $select_professor = $_POST['select_professor'];
    $mundo_turma = $_POST['mundo_turma'];
    $icone_turma = $_POST['icone_turma'];

    if($_POST['mundo_turma'] == ''){
        $mundo_turma = 5;
    }

    $codigoturma = $conn->getcodTurma($select_professor);
    $countTurma = $conn->getcountTurma($select_professor);
    $contador = 0;

    foreach ($countTurma as $key => $value) {
        $contador = $key + 1;
    }

    $codTurma = $codigoturma[0]['codProfessor'] . '_' . $contador;
    $result = $conn->cadastrarTurma($nome_turma, $select_professor, $codTurma, $mundo_turma, $icone_turma);

    $resultGetTurmaID = $conn->getTurmas();

    $turmaZero = 1;

    $resultGetJogo1 = $conn->searchJogos1($turmaZero);

    if($resultGetJogo1 != '' || $resultGetJogo1 != null){
        foreach ($resultGetJogo1 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo1 = $conn->adicionarJogos1($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo,$versaoJogo, $sizeJogo);
        }
    }
    
    $resultGetJogo2 = $conn->searchJogos2($turmaZero);

    if($resultGetJogo2 !=  '' || $resultGetJogo2 != null){
        foreach ($resultGetJogo2 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo2 = $conn->adicionarJogos2($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo3 = $conn->searchJogos3($turmaZero);

    if($resultGetJogo3 != '' || $resultGetJogo3 != null){
        foreach ($resultGetJogo3 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo3 = $conn->adicionarJogos3($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo4 = $conn->searchJogos4($turmaZero);

    if($resultGetJogo4 != '' || $resultGetJogo4 != null) {
        foreach ($resultGetJogo4 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo4 = $conn->adicionarJogos4($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo5 = $conn->searchJogos5($turmaZero);

    if($resultGetJogo5 != '' || $resultGetJogo5 != null) {
        foreach ($resultGetJogo5 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo5 = $conn->adicionarJogos5($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo6 = $conn->searchJogos6($turmaZero);

    if($resultGetJogo6 != '' || $resultGetJogo6 != null){
        foreach ($resultGetJogo6 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo6 = $conn->adicionarJogos6($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }
    
    $resultGetJogo7 = $conn->searchJogos7($turmaZero);

    if($resultGetJogo7 != '' || $resultGetJogo7v != null){
        foreach ($resultGetJogo7 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo7 = $conn->adicionarJogos7($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo8 = $conn->searchJogos8($turmaZero);

    if($resultGetJogo8 != '' || $resultGetJogo8 != null) {
        foreach ($resultGetJogo8 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo8 = $conn->adicionarJogos8($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetJogo9 = $conn->searchJogos9($turmaZero);

    if($resultGetJogo9 != '' || $resultGetJogo9 != null){
        foreach ($resultGetJogo9 as $key => $value) {
            $tipoJogo = $value['tipo'];
            $nomeJogo = $value['nome'];
            $ativoJogo  = $value['ativo'];
            $nomeArquivoJogo = $value['nomeArquivo'];
            $imgJogo  = $value['img'];
            $linkJogo = $value['link'];
            $idTurmaJogo = $resultGetTurmaID['id'];
            $newJogo = $value['new'];
            $versaoJogo = $value['versao'];
            $sizeJogo = $value['size'];
    
            $resultCadJogo9 = $conn->adicionarJogos9($tipoJogo, $nomeJogo, $ativoJogo, $nomeArquivoJogo, $imgJogo, $linkJogo, $idTurmaJogo, $newJogo, $versaoJogo, $sizeJogo);
        }
    }

    $resultGetEbook1 = $conn->searchEbooks1($turmaZero);

    if($resultGetEbook1 != '' || $resultGetEbook1 != null){
        foreach ($resultGetEbook1 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook1 = $conn->adicionarEbooks1($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook2 = $conn->searchEbooks2($turmaZero);

    if($resultGetEbook2 != '' || $resultGetEbook2 != null){
        foreach ($resultGetEbook2 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook2 = $conn->adicionarEbooks2($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook3 = $conn->searchEbooks3($turmaZero);

    if($resultGetEbook3 !=  '' || $resultGetEbook3 != null){
        foreach ($resultGetEbook3 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook3 = $conn->adicionarEbooks3($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook4 = $conn->searchEbooks4($turmaZero);

    if($resultGetEbook4 != '' || $resultGetEbook4 != null){
        foreach ($resultGetEbook4 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook4 = $conn->adicionarEbooks4($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook5 = $conn->searchEbooks5($turmaZero);

    if($resultGetEbook5 != '' || $resultGetEbook5 != null){
        foreach ($resultGetEbook5 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook5 = $conn->adicionarEbooks5($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook6 = $conn->searchEbooks6($turmaZero);

    if($resultGetEbook6 != '' || $resultGetEbook6 != null){
        foreach ($resultGetEbook6 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook6 = $conn->adicionarEbooks6($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook7 = $conn->searchEbooks7($turmaZero);

    if($resultGetEbook7 != '' || $resultGetEbook7 != null){
        foreach ($resultGetEbook7 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook7 = $conn->adicionarEbooks7($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook8 = $conn->searchEbooks8($turmaZero);

    if($resultGetEbook8 != '' || $resultGetEbook8 != null){
        foreach ($resultGetEbook8 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook8 = $conn->adicionarEbooks8($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetEbook9 = $conn->searchEbooks9($turmaZero);

    if($resultGetEbook9 != '' || $resultGetEbook9 != null){
        foreach ($resultGetEbook9 as $key => $value) {
            $tipoEbook = $value['tipo'];
            $nomeEbook = $value['nome'];
            $ativoEbook  = $value['ativo'];
            $nomeArquivoEbook = $value['nomeArquivo'];
            $imgEbook  = $value['img'];
            $linkEbook = $value['link'];
            $idTurmaEbook = $resultGetTurmaID['id'];
            $newEbook = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadEbook9 = $conn->adicionarEbooks9($tipoEbook, $nomeEbook, $ativoEbook, $nomeArquivoEbook, $imgEbook, $linkEbook, $idTurmaEbook, $newEbook, $versaoEbook, $sizeEbook);
        }
    }

    $resultGetHibrido1  = $conn->searchJogoRfid1($turmaZero);

    if($resultGetHibrido1 != '' || $resultGetHibrido1 != null){
        foreach ($resultGetHibrido1 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoHibrido = $value['versao'];
            $sizeHibrido = $value['size'];
    
            $resultCadHibrido1 = $conn->adicionarJogoRfid1($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido2  = $conn->searchJogoRfid2($turmaZero);

    if($resultGetHibrido2 != '' || $resultGetHibrido2 != null){
        foreach ($resultGetHibrido2 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido2 = $conn->adicionarJogoRfid2($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido3  = $conn->searchJogoRfid3($turmaZero);

    if($resultGetHibrido3 != '' || $resultGetHibrido3 != null){
        foreach ($resultGetHibrido3 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido3 = $conn->adicionarJogoRfid3($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }
    
    $resultGetHibrido4  = $conn->searchJogoRfid4($turmaZero);

    if($resultGetHibrido4 != '' || $resultGetHibrido4 != null){
        foreach ($resultGetHibrido4 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido4 = $conn->adicionarJogoRfid4($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }
    
    $resultGetHibrido5  = $conn->searchJogoRfid5($turmaZero);

    if($resultGetHibrido5 != '' || $resultGetHibrido5 != null){
        foreach ($resultGetHibrido5 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido5 = $conn->adicionarJogoRfid5($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido6  = $conn->searchJogoRfid6($turmaZero);

    if($resultGetHibrido6 != '' || $resultGetHibrido6 != null){
        foreach ($resultGetHibrido6 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido6 = $conn->adicionarJogoRfid6($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido7  = $conn->searchJogoRfid7($turmaZero);

    if($resultGetHibrido7 != '' || $resultGetHibrido7 != null){
        foreach ($resultGetHibrido7 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido7 = $conn->adicionarJogoRfid7($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido8  = $conn->searchJogoRfid8($turmaZero);

    if($resultGetHibrido8 != '' || $resultGetHibrido8 != null){
        foreach ($resultGetHibrido8 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido8 = $conn->adicionarJogoRfid8($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetHibrido9  = $conn->searchJogoRfid9($turmaZero);

    if($resultGetHibrido9 != '' || $resultGetHibrido9 != null){
        foreach ($resultGetHibrido9 as $key => $value) {
            $tipoHibrido = $value['tipo'];
            $nomeHibrido = $value['nome'];
            $ativoHibrido  = $value['ativo'];
            $nomeArquivoHibrido = $value['nomeArquivo'];
            $imgHibrido  = $value['img'];
            $linkHibrido = $value['link'];
            $idTurmaHibrido = $resultGetTurmaID['id'];
            $newHibrido = $value['new'];
            $versaoEbook = $value['versao'];
            $sizeEbook = $value['size'];
    
            $resultCadHibrido9 = $conn->adicionarJogoRfid9($tipoHibrido, $nomeHibrido, $ativoHibrido, $nomeArquivoHibrido, $imgHibrido, $linkHibrido, $idTurmaHibrido, $newHibrido, $versaoHibrido, $sizeHibrido);
        }
    }

    $resultGetMusic = $conn->searchMusicas($turmaZero);

    if($resultGetMusic != '' || $resultGetMusic != null){
        foreach ($resultGetMusic as $key => $value) {
            $nomeMusic = $value['nome'];
            $ativoMusic  = $value['ativo'];
            $nomeArquivoMusic = $value['nomeArquivo'];
            $linkMusic = $value['playlist'];
            $idTurmaMusic = $resultGetTurmaID['id'];
            $newMusic = $value['new'];
            $sizeMusic = $value['size'];
    
            $resultCadMusic = $conn->cadastrarPlaylist($idTurmaMusic, $ativoMusic, $nomeArquivoMusic, $nomeMusic, $linkMusic, $newMusic, $sizeMusic);
        }
    }

    $resultGetVideo = $conn->searchVideos($turmaZero);

    if($resultGetVideo != '' || $resultGetVideo != null){
        foreach ($resultGetVideo as $key => $value) {
            $nomeVideo = $value['nome_video'];
            $ativoVideo  = $value['ativo'];
            $nomeArquivoVideo = $value['nomeArquivo'];
            $linkVideo = $value['link'];
            $idTurmaVideo = $resultGetTurmaID['id'];
            $newVideo = $value['new'];
            $sizeVideo = $value['size'];
    
            $resultCadVideo = $conn->adicionarVideo($idTurmaVideo, $ativoVideo, $nomeArquivoVideo, $nomeVideo, $linkVideo, $newVideo, $sizeVideo);
        }
    }

    $resultGetSite = $conn->searchSites($turmaZero);

    if($resultGetSite != '' || $resultGetSite != null){
        foreach ($resultGetSite as $key => $value) {
            $nomeSite = $value['nome'];
            $ativoSite  = $value['ativo'];
            $linkSite = $value['dominio'];
            $idTurmaSite = $resultGetTurmaID['id'];
            $newSite = $value['new'];
    
            $resultCadSite = $conn->cadastrarSites($nomeSite, $linkSite, $ativoSite, $idTurmaSite, $newSite);
        }
    }

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));

} else if ($act == 'addAluno') {

    $nome = $_POST['nomeAluno'];
    $resp_nome = $_POST['respAluno'];
    $nasc = $_POST['nascimentoAluno'];
    $sexo = $_POST['generoAluno'];
    $avatar = $_POST['avatarAluno'];
    $turma = $_POST['turmaAluno'];
    $idTurma = $_POST['idTurmaAluno'];
    $professor = $_POST['codProfessor'];
    $observacoes = $_POST['obsAluno'];

    $result = $conn->cadastrarAlunos($nome, $resp_nome, $nasc, $sexo, $avatar, $turma, $professor, $observacoes);

    $result2 = $conn->getID();

    $idAluno = $result2['id'];

    $getTurmaId = $conn->searchTurmass($professor, $turma);

    $turmaId = $getTurmaId[0]["id"];

    $resultado = $conn->cadastrarAlunoTurma($idAluno, $turmaId);
    
    die('0');

} else if ($act == 'deletar') {

    $idturmaPost = $_POST['id'];
    $idProf = $_POST['idProf'];
    
    $getSemTurmaId = $conn->getIdTurmaZero($idProf);
    
    $verificaTurma = $conn->searchTurmasID($idturmaPost);

    foreach ($verificaTurma as $key => $value) {
        $idAluno = $value['idAluno'];
        $idTurma = $getSemTurmaId;
        $nomeTurma = "Sem Turma";
        
        $addTurmaFantasma = $conn->adicionarTurmaFantasma($idAluno, $idTurma['id']);
        $removerAlunoTurma = $conn->removerAlunoTurma($idAluno, $value['idTurma']);
        $attTurmaAluno = $conn->atualizaSemTurma($idAluno, $nomeTurma);
    }
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
    $removerTurma = $conn->removerTurma($idturmaPost);

    die('0');

} else if ($act == 'atualizar'){

    $idTurma = $_POST['id'];
    $nomeTurma = $_POST['nome'];
    $mundo_turma = $_POST['mundo_turma'];
    $icon_turma = $_POST['icon_turma'];

    $atualizarTurma = $conn->atualizarTurma($idTurma, $nomeTurma, $mundo_turma, $icon_turma);

    die('{"error":0}');
} else if ($act == 'getTurmas'){

    $codProfessor = $_POST['codProfessor'];

    $dadosTurma = $conn->searchTurmaProfessor($codProfessor);

    die(json_encode($dadosTurma));
} else if ($act == 'getTurmasbyID'){

    $idTurma = $_POST['idTurma'];

    $dadosTurma = $conn->searchTurmas($idTurma);

    die(json_encode($dadosTurma));
} else if ($act == 'getAluno') {

    $idAluno = $_POST['idAluno'];

    $resultAluno = $conn->searchAlunoFromTurma($idAluno);

    die(json_encode($resultAluno));
} else if ($act == 'atualizaAluno') {

    $idAluno = $_POST['idAluno'];
    $nome = $_POST['nome'];
    $sexo = $_POST['sexo'];
    $resp_nome = $_POST['resp_nome'];
    $avatar = $_POST['avatar'];
    $nasc = $_POST['nasc'];
    $observacoes = $_POST['observacoes'];
    $nomeTurma = $_POST['nomeTurma'];
    $idTurma = $_POST['idTurma'];

    if($idAluno == ''){
        die('1');
    }
    if($nome == ''){
        die('1');
    }
    if($sexo == ''){
        die('1');
    }
    if($resp_nome == ''){
        die('1');
    }
    if($avatar == ''){
        die('1');
    }
    if($nasc == ''){
        die('1');
    }
    if($nomeTurma == ''){
        die('1');
    }

    $results = $conn->atualizarAluno($idAluno, $nome, $sexo, $resp_nome, $avatar, $nasc, $observacoes, $nomeTurma);

    $resultado = $conn->atualizaAlunoTurma($idTurma, $idAluno);

    die('0');
} else if ($act == 'removeTurma'){

    $idTurma = $_POST['idTurma'];
    $idAluno = $_POST['idAluno'];
    $idProf = $_POST['idProf'];
    $semTurmaNome = "Sem Turma";

    $turmaZeroProf = $conn->getIdTurmaZeroProf($idProf);

    $idTurmaZero = $turmaZeroProf[0]['id'];

    $result = $conn->atualizarAlunoParaTurmaZero($idTurmaZero, $idAluno);

    $result2 = $conn->atualizarNomeTurmaAlunoParaTurmaZero($idAluno, $semTurmaNome);

    die('0');
} else if ($act == 'removeAluno') {

    $id = $_POST['id'];

    $resultado = $conn->removeAlunoTurma($id);
    
    $result = $conn->deletarAluno($id);

    die('0');
} else if ($act == 'atualizaTurma'){

    $idTurma = $_POST['idTurma'];
    $idAlunoTurma = $_POST['idAlunoTurma'];
    $nomeTurma = $_POST['nomeTurma'];

    $result = $conn->atualizaAlunoTurma($idTurma, $idAlunoTurma);

    $result2 = $conn->atualizaSemTurma($idAlunoTurma, $nomeTurma);

    die('0');
} else if ($act == 'cadastroAlunoLote'){

    $arquivo = $_FILES['file'];
    $idTurma = $_POST['turma'];
    $turmaExploded = explode("-", $idTurma);
    $turma = $turmaExploded[1];
    $nomeTurma = $_POST['nomeTurma'];
    $idProfessor = $_POST['professor'];
    $file = $arquivo['tmp_name'];
    $dataAtual = $_POST['dataAtual'];

    $loop = 0;
    if (($objeto = fopen($file, "r")) !== FALSE) {
        while (($dados = fgetcsv($objeto, 1000, ";")) !== FALSE) {
            if($dados[0] != ''  && $dados[2] != '' && $dados[4] != ''){
                if($loop == 0){
                        $nomeTitulo = $dados[0];
                        $sexoTitulo = $dados[1];
                        $nomeRespTitulo = $dados[2];
                        $avatarTitulo = $dados[3];
                        $dataTitulo = $dados[4];
                        $obsTitulo = $dados[5];
                        if($nomeTitulo != 'Nome do Aluno' || $sexoTitulo != 'Genero' || $nomeRespTitulo != 'Nome do Responsavel' || $avatarTitulo != 'Avatar' || $dataTitulo != 'Data de Nascimento' || $obsTitulo != 'Observacoes'){
                            die("1");
                        }
                }

                if ($loop > 0) {

                        $nomeAluno = $dados[0];
                        $sexoAluno = $dados[1];
                        $nomeResponsavel = $dados[2];
                        $obsAluno = $dados[5];

                        if($dados[3] == ''){
                            $avatarAluno = "aluno01";
                        } else {
                            for($i = 0; $i<$dados[3];$i++){
                                if($i<9){
                                    $avatarAluno = "aluno0".$dados[3];
                                } else if($i>9){
                                    $avatarAluno = "aluno".$dados[3];
                                }
                            }
                        }
                        
                        if($dados[4] > $dataAtual){
                            $data = explode("/", $dataAtual);
                            $dataNascAluno = $data[2]."/".$data[1]."/".$data[0];
                        } else {
                            $data = explode("/", $dados[4]);
                            $dataNascAluno = $data[2]."/".$data[1]."/".$data[0];
                        }

                        if($sexoAluno == 'Menino' || $sexoAluno == 'menino' || $sexoAluno == 'Masculino' || $sexoAluno == 'masculino' || $sexoAluno == 'M' || $sexoAluno == 'm' || $sexoAluno == ''){
                            $sexo = 'Masculino';
                        } 
                        
                        if ($sexoAluno == 'Menina' || $sexoAluno == 'menina' || $sexoAluno == 'Feminino' || $sexoAluno == 'feminino' || $sexoAluno == 'F' || $sexoAluno == 'f'){
                            $sexo = 'Feminino';
                        }

                        $result = $conn->cadastrarAlunos($nomeAluno, $nomeResponsavel, $dataNascAluno, $sexo, $avatarAluno, $nomeTurma, $idProfessor, $obsAluno);

                        $result2 = $conn->getID();

                        $idAluno = $result2['id'];

                        $resultado = $conn->cadastrarAlunoTurma($idAluno, $turma);
                }

            }
            $loop++;
        }
        fclose($objeto);
    } else {
        die("3");
    }

    if (isset($resultado)) {
        die("0");
    } else {
        die("3");
    }
} else if ($act == 'pesquisa'){

    $search = $_POST['pesquisa'];
    $turma = $_POST['nomeTurma'];

    $result = $conn->getpesquisaAluno($search, $turma);
    
    if($result == ''){
        $result = '';
        die(json_encode($result));
    } else {
        die(json_encode($result));
    }

} else if ($act == 'getAlunoSearch'){
    $idAluno = $_POST['idAluno'];
    
    $resultAluno = $conn->getAlunoSearch($idAluno);

    die(json_encode($resultAluno));
} else if ($act == 'getAlunosTurmaZero'){

    $idProf = $_POST['idProf'];

    $result = $conn->getAlunosTurmaZero($idProf);

    $array = [];
    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));

} else if ($act == 'getEmailProf'){

    $emailProf = $_POST['emailProf'];

    $result = $conn->getEmailProf($emailProf);

    $array = [];
    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getTurmaApp'){
    
    $codProfessor = $_POST['codProfessor'];

    $dadosTurma = $conn->getTurmaApp($codProfessor);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $dadosTurma;

    die(json_encode($array));
}