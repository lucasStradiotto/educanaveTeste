<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
/*
     * ERROS:
     * 0 = TUDO OK
     * 1 = Nome invalido
     * 2 = Data invalida
     * 3 = Erro ao inserir no banco
     * 4 = Erro ao inserir nova lista de video no banco
     * 5 = Erro ao inserir nova lista de sites no banco
     * 102 = Sem id do pai
     */
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];

///==========================INSERINDO DADOS DO ALUNO

if ($act == 'cadastro') {
     $nome = $_POST['nome'];
     $nasc = $_POST['nasc'];
     $senha = $_POST['senha'];
     $resp_nome = $_POST['nome_resp'];
     $sexo = $_POST['sexo'];
     $mundo = 5;
     $avatar = 1;
     $turma = $_POST['turma'];
     $professor = $_POST['professor'];

     $result = $conn->cadastrarAlunos($nome, $sexo, $senha, $resp_nome, $mundo, $avatar, $nasc, $professor);

     $result2 = $conn->getID();

     $idAluno = $result2['id'];

     $resultado = $conn->cadastrarAlunoTurma($idAluno, $turma);

     die('{"error":0}');
} else if ($act == 'lote') {

     // $arquivo = $_FILES['file'];
     // $turma = $_POST['turma'];
     // $idProfessor = $_POST['professor'];
     // $file = $arquivo['tmp_name'];
     // $dataAtual = $_POST['dataAtual'];
     // $loop = 0;
     // if (($objeto = fopen($file, "r")) !== FALSE) {
     //      while (($dados = fgetcsv($objeto, 1000, ";")) !== FALSE) {
     //           if($dados[0] != '' && $dados[1] != '' && $dados[2] != '' && $dados[3] != ''){
     //                if($loop == 0){
     //                     $nomeTitulo = $dados[0];
     //                     $sexoTitulo = $dados[1];
     //                     $nomeRespTitulo = $dados[2];
     //                     $dataTitulo = $dados[3];
     //                     if($nomeTitulo != 'Nome do Aluno' || $sexoTitulo != 'Genero' || $nomeRespTitulo != 'Nome do Responsavel' || $dataTitulo != 'Data de Nascimento'){
     //                          // break;
     //                     }
     //                }

     //                if ($loop >= 1) {
     //                     $nomeAluno = $dados[0];
     //                     $sexoAluno = $dados[1];
     //                     $senha = '';
     //                     $nomeResponsavel = $dados[2];
     //                     $mundo = 5;
     //                     $avatar = 1;
                         
     //                     if($dados[3] > $dataAtual){
     //                          $data = explode("/", $dataAtual);
     //                          $data_nasc = $data[2]."/".$data[1]."/".$data[0];
     //                     } else {
     //                          $data = explode("/", $dados[3]);
     //                          $data_nasc = $data[2]."/".$data[1]."/".$data[0];
     //                     }

     //                     if($sexoAluno == 'Menino' || $sexoAluno == 'menino' || $sexoAluno == 'Masculino' || $sexoAluno == 'masculino' || $sexoAluno == 'M' || $sexoAluno == 'm' || $sexoAluno == ''){
     //                          $sexo = 'Masculino';
     //                     } 
                         
     //                     if ($sexoAluno == 'Menina' || $sexoAluno == 'menina' || $sexoAluno == 'Feminino' || $sexoAluno == 'feminino' || $sexoAluno == 'F' || $sexoAluno == 'f'){
     //                          $sexo = 'Feminino';
     //                     }

     //                     $result = $conn->cadastrarAlunos($nomeAluno, $sexo, $senha, $nomeResponsavel, $mundo, $avatar, $data_nasc, $idProfessor);

     //                     $result2 = $conn->getID();

     //                     $idAluno = $result2['id'];

     //                     $resultado = $conn->cadastrarAlunoTurma($idAluno, $turma);
     //                }

     //           }
     //           $loop++;
     //      }
     //      fclose($objeto);
     // }

     // if (isset($resultado)) {
     //      die("0");
     // } else {
     //      die("1");
     // }
}
