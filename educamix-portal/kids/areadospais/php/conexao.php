<?php
require_once('vendor/autoload.php');
require_once('config-conexao.php');

ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
date_default_timezone_set('America/Sao_Paulo');
class conecta extends config
{
    var $pdo;
    function __construct()
    {
        $this->pdo = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db, $this->user, $this->pass);
    }

    function login($email, $senha){
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE email = :email AND senha = :senha");
        $stmt->bindValue(":email", $email);
        $stmt->bindValue(":senha", $senha);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrar($nome, $email, $senha, $senha2, $perfil, $codProfessor){
        $stmt = $this->pdo->prepare("INSERT INTO usuario (nome, email, senha, senha2, perfil, codProfessor) 
        VALUES ('$nome', '$email', '$senha', '$senha2', '$perfil', '$codProfessor')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrarAlunos($nome, $resp_nome, $nasc, $sexo, $avatar, $turma, $professor, $observacoes){
        $stmt = $this->pdo->prepare("INSERT INTO alunos (nomeAluno, sexo, nomeResponsavel, avatar, data_nasc, idProfessor, observacoes, nomeTurma) 
        VALUES ('$nome', '$sexo', '$resp_nome', '$avatar', '$nasc', '$professor', '$observacoes', '$turma')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrarTurma($nome_turma, $select_professor, $codTurma, $mundo_turma, $icone_turma){
        $stmt = $this->pdo->prepare("INSERT INTO turmas (nomeTurma, codTurma, professor, mundo, iconeTurma) 
        VALUES ('$nome_turma', '$codTurma', '$select_professor' ,'$mundo_turma', '$icone_turma')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrarSites($nome, $url, $ativo, $idTurma, $new){
        $stmt = $this->pdo->prepare("INSERT INTO sites (nome, dominio, ativo, idTurma, new) 
        VALUES ('$nome','$url', '$ativo','$idTurma', '$new')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrarPlaylist($idTurma, $ativo, $nomeArquivo, $nome, $playlist, $new, $size){
        $stmt = $this->pdo->prepare("INSERT INTO musicas (nome, ativo, nomeArquivo, playlist, idTurma, new, size) 
        VALUES ('$nome','$ativo', '$nomeArquivo', '$playlist', '$idTurma', '$new', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function cadastrarAlunoTurma($idAluno, $turma){
        $stmt = $this->pdo->prepare("INSERT INTO alunoturma (idAluno, idTurma) 
        VALUES ('$idAluno', '$turma')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarManual($nome, $url){
        $stmt = $this->pdo->prepare("INSERT INTO manuais (nome, link) 
        VALUES ('$nome', '$url')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarDocumento($nome, $url){
        $stmt = $this->pdo->prepare("INSERT INTO documentos (nome, link) 
        VALUES ('$nome', '$url')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchChild(){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchChildProf($idProfessor){
        $stmt = $this->pdo->prepare("SELECT alunos.*, usuario.nome FROM alunos
        JOIN usuario ON idProfessor = idUsuario WHERE idProfessor = $idProfessor");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAlunoProf($idProf){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos WHERE idProfessor = $idProf");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAluno($idChild){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos WHERE id = :idChild");
        $stmt->bindValue(":idChild", $idChild);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchVideo(){
        $stmt = $this->pdo->prepare("SELECT * FROM videos");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchVideos($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente1 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente2 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente3 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente4 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente5 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente6 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente7 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente8 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogos9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente9 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente1 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente2 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente3 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente4 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente5 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente6 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente7 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente8 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchEbooks9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente9 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente1 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente2 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente3 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente4 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente5 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente6 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente7 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente8 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogoRfid9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente9 WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchMundos($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM mundo WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAvatar($id){
        $stmt = $this->pdo->prepare("SELECT * FROM avatar WHERE id = $id");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getAvatar($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM avatar WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchJogosChecked(){
        $stmt = $this->pdo->prepare("SELECT * FROM jogos WHERE ativo = 'true'");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchSites($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM sites WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchMusicas($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM musicas WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchHoras($idChild){
        $stmt = $this->pdo->prepare("SELECT * FROM horasdeuso WHERE idAluno = $idChild");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchProfessor(){
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE perfil = 'professor'");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchProfessorTurma($idProf){
        $stmt = $this->pdo->prepare("SELECT nome FROM usuario WHERE perfil = 'professor' AND idUsuario = $idProf");
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAlunosTurma(){
        $stmt = $this->pdo->prepare("SELECT * FROM alunoturma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmasID($turma){
        $stmt = $this->pdo->prepare("SELECT * FROM alunoturma WHERE idTurma = $turma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAlunoTurmaID($idAluno, $idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM alunoturma WHERE idTurma = $idTurma AND idAluno = $idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurma(){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmaByName($nomeTurma){
        $stmt = $this->pdo->prepare("SELECT id FROM turmas WHERE nomeTurma = :nomeTurma");
        $stmt->bindValue(":nomeTurma", $nomeTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmas($turma){
        $stmt = $this->pdo->prepare("SELECT turmas.*, usuario.* FROM turmas 
        JOIN usuario ON turmas.professor = usuario.idUsuario WHERE id = $turma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmass($professor, $turma){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE professor = :professor AND nomeTurma = :turma");
        $stmt->bindValue(":professor", $professor);
        $stmt->bindValue(":turma", $turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmaProfessor($idProfessor){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE professor = $idProfessor");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getTurmaApp($idProfessor){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE professor = $idProfessor AND nomeTurma <> 'Sem Turma'");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAlunoTurma($idTurma){
        $stmt = $this->pdo->prepare("SELECT alunos.*, alunoturma.* FROM alunos JOIN alunoturma ON alunos.id = alunoturma.idAluno WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchAlunoFromTurma($idAluno){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos JOIN alunoturma ON alunoturma.idAluno = alunos.id WHERE alunoturma.id = $idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getAlunoSearch($idAluno){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos WHERE id = $idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmaAluno($idAluno){
        $stmt = $this->pdo->prepare("SELECT alunoturma.*, turmas.nomeTurma FROM alunoturma JOIN turmas ON turmas.id = idTurma WHERE idAluno = $idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function searchTurmaCod($codTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE codTurma = $codTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function selecionarAlunosTurma(){
        $stmt = $this->pdo->prepare("SELECT alunos.*, alunoturma.* FROM alunos JOIN alunoturma ON alunos.id = alunoturma.idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function selecionaAlunoTurma($idSemTurma, $idProfessor){
        $stmt = $this->pdo->prepare("SELECT alunos.* FROM alunos
        JOIN alunoturma ON alunos.id = alunoturma.idAluno
        WHERE alunos.idProfessor = $idProfessor AND alunoturma.idTurma = $idSemTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarLista($nome, $ativo, $idTurma){
        $stmt = $this->pdo->prepare("INSERT INTO listavideos (nome_lista, ativo, idTurma) 
        VALUES ('$nome', '$ativo', '$idTurma')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarVideo($idTurma, $ativo, $nomeArquivo, $nomeVideo, $link, $new, $size){
        $stmt = $this->pdo->prepare("INSERT INTO videos (idTurma, ativo, nomeArquivo, nome_video, link, new, size) 
        VALUES ('$idTurma','$ativo', '$nomeArquivo', '$nomeVideo','$link', '$new', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente1 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente2 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente3 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente4 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente5 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente6 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente7 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente8 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogos9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogosambiente9 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks1($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente1 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks2($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente2 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks3($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente3 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks4($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente4 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks5($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente5 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks6($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente6 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks7($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente7 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks8($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente8 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarEbooks9($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO ebookambiente9 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid1($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente1 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid2($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente2 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid3($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente3 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid4($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente4 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid5($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente5 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid6($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente6 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid7($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente7 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid8($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente8 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarJogoRfid9($tipo, $nome, $ativo, $nomeArquivo, $img, $link, $idTurma, $new, $version, $size){
        $stmt = $this->pdo->prepare("INSERT INTO jogorfidambiente9 (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new, versao, size) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$link', '$idTurma', '$new', '$version', '$size')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarMundo($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new){
        $stmt = $this->pdo->prepare("INSERT INTO mundo (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarAvatar($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new){
        $stmt = $this->pdo->prepare("INSERT INTO avatar (tipo, nome, ativo, nomeArquivo, img, link, idTurma, new) 
        VALUES ('$tipo','$nome','$ativo', '$nomeArquivo', '$img', '$url', '$idTurma', '$new')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function adicionarTurmaFantasma($idAluno, $idTurma){
        $stmt = $this->pdo->prepare("INSERT INTO alunoturma (idAluno, idTurma) 
        VALUES ('$idAluno','$idTurma')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function deleteJogo1($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente1 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo2($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente2 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo3($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente3 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo4($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente4 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo5($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente5 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo6($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente6 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo7($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente7 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo8($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente8 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogo9($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente9 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook1($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente1 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook2($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente2 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook3($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente3 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook4($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente4 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook5($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente5 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook6($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente6 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook7($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente7 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook8($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente8 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteEbook9($nome){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente9 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid1($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente1 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid2($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente2 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid3($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente3 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid4($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente4 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid5($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente5 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid6($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente6 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid7($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente7 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid8($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente8 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deleteJogoRfid9($nome){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente9 WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deletarLista($lista){
        $stmt = $this->pdo->prepare("DELETE FROM listavideos WHERE id = :id");
        $stmt->bindValue(":id", $lista);
        $stmt->execute();
    }
    function deletarVideo($nome){
        $stmt = $this->pdo->prepare("DELETE FROM videos WHERE nome_video = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deletarSite($nome){
        $stmt = $this->pdo->prepare("DELETE FROM sites WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deletarMusicas($nome){
        $stmt = $this->pdo->prepare("DELETE FROM musicas WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deletarMundo($nome){
        $stmt = $this->pdo->prepare("DELETE FROM mundo WHERE nome = :nome");
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
    }
    function deletarAvatar($id){
        $stmt = $this->pdo->prepare("DELETE FROM avatar WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
    }
    function deletarAluno($id){
        $stmt = $this->pdo->prepare("DELETE FROM alunos WHERE id = $id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
    }
    function deletarAlunoTurma($idAluno, $idTurma){
        $stmt = $this->pdo->prepare("DELETE FROM alunoturma WHERE idAluno = $idAluno AND idTurma = $idTurma");
        $stmt->execute();
    }
    function getID(){
        $stmt = $this->pdo->prepare("SELECT id FROM alunos WHERE id=(SELECT max(id) FROM alunos)");
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getLista(){
        $stmt = $this->pdo->prepare("SELECT id FROM listavideos WHERE id=(SELECT max(id) FROM listavideos)");
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getProfessores(){
        $stmt = $this->pdo->prepare("SELECT idUsuario FROM usuario WHERE idUsuario=(SELECT max(idUsuario) FROM usuario)");
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getTurmas(){
        $stmt = $this->pdo->prepare("SELECT id FROM turmas WHERE id=(SELECT max(id) FROM turmas)");
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getHorarios($turma){
        $stmt = $this->pdo->prepare("SELECT * FROM horasdeuso WHERE idTurma = $turma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getcodProfessor($codProfessor){
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE codProfessor = $codProfessor");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getcodTurma($select_professor){
        $stmt = $this->pdo->prepare("SELECT codProfessor FROM usuario WHERE idUsuario = $select_professor");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getcountTurma($select_professor){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE professor = $select_professor");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getListaVideos($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM listavideos WHERE idTurma = $idTurma");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEmailUsuarioToken($chave){
        $stmt = $this->pdo->prepare("SELECT idUsuario FROM token WHERE chave = :chave");
        $stmt->bindValue(":chave", $chave);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewVideo($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewVideos($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente1 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente1 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente2 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente2 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente3 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente3 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente4 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente4 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente5 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente5 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente6 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente6 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente7 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente7 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente8 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente8 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogo9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente9 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogos9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogosambiente9 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente1 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente1 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente2 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente2 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente3 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente3 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente4 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente4 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente5 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente5 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente6 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente6 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente7 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente7 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente8 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente8 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbook9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente9 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewEbooks9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM ebookambiente9 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente1 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente1 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente1 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente2 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente2 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente2 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente3 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente3 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente3 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente4 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente4 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente4 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente5 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente5 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente5 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente6 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente6 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente6 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente7 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente7 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente7 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente8 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente8 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente8 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogoRfid9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente9 WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewHibridoRfid9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente9 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewJogosRfid9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM jogorfidambiente9 WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewSite($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM sites WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewSites($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM sites WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewMusica($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM musicas WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewMusicas($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM musicas WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewMundo($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM mundo WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewMundos($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM mundo WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewAvatar($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM avatar WHERE idTurma = :idTurma AND new = 0");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getNewAvatars($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM avatar WHERE idTurma = :idTurma AND new = 1");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getVideoNome($id){
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo1Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente1 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo2Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente2 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo3Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente3 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo4Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente4 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo5Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente5 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo6Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente6 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo7Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente7 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo8Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente8 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogo9Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogosambiente9 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook1Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente1 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook2Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente2 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook3Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente3 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook4Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente4 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook5Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente5 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook6Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente6 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook7Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente7 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook8Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente8 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEbook9Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM ebookambiente9 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid1Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente1 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid2Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente2 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid3Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente3 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid4Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente4 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid5Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente5 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid6Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente6 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid7Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente7 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid8Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente8 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getJogoRfid9Nome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM jogorfidambiente9 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getSiteNome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM sites WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getMusicaNome($id){
        $stmt = $this->pdo->prepare("SELECT * FROM musicas WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getMundoNome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM mundo WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getAvatarNome($id){
        $stmt = $this->pdo->prepare("SELECT nome FROM avatar WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarCadastro($id, $email, $nome){
        $stmt = $this->pdo->prepare("UPDATE usuario SET email = :email, nome = :nome WHERE idUsuario = :id");
        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":email", $email);
        $stmt->bindValue(":nome", $nome);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarAluno($idAluno, $nome, $sexo, $resp_nome, $avatar, $nasc, $observacoes, $nomeTurma){
        $stmt = $this->pdo->prepare("UPDATE alunos SET nomeAluno = :nome, sexo = :sexo, nomeResponsavel = :resp_nome, avatar = :avatar, data_nasc = :nasc, observacoes = :observacoes, nomeTurma = :nomeTurma WHERE id = :id");
        $stmt->bindValue(":id", $idAluno);
        $stmt->bindValue(":nome", $nome);
        $stmt->bindValue(":sexo", $sexo);
        $stmt->bindValue(":resp_nome", $resp_nome);
        $stmt->bindValue(":avatar", $avatar);
        $stmt->bindValue(":nasc", $nasc);
        $stmt->bindValue(":observacoes", $observacoes);
        $stmt->bindValue(":nomeTurma", $nomeTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarAlunoProf($idAluno, $idProf, $nomeTurma){
        $stmt = $this->pdo->prepare("UPDATE alunos SET idProfessor = :idProfessor, nomeTurma = :nomeTurma WHERE id = :id");
        $stmt->bindValue(":id", $idAluno);
        $stmt->bindValue(":idProfessor", $idProf);
        $stmt->bindValue(":nomeTurma", $nomeTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarAlunoMundo($idChild, $mundo){
        $stmt = $this->pdo->prepare("UPDATE alunos SET mundo = :mundo WHERE id = :idChild");
        $stmt->bindValue(":idChild", $idChild);
        $stmt->bindValue(":mundo", $mundo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarAlunoAvatar($idChild, $avatar){
        $stmt = $this->pdo->prepare("UPDATE alunos SET avatar = :avatar WHERE id = :idChild");
        $stmt->bindValue(":idChild", $idChild);
        $stmt->bindValue(":avatar", $avatar);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarTurma($idTurma, $nomeTurma, $mundo_turma, $icon_turma){
        $stmt = $this->pdo->prepare("UPDATE turmas SET nomeTurma = :nome, mundo = :mundo_turma, iconeTurma = :icon_turma WHERE id = :id");
        $stmt->bindValue(":id", $idTurma);
        $stmt->bindValue(":nome", $nomeTurma);
        $stmt->bindValue(":mundo_turma", $mundo_turma);
        $stmt->bindValue(":icon_turma", $icon_turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarNomeTurmaAlunoParaTurmaZero($idAluno, $semTurmaNome){
        $stmt = $this->pdo->prepare("UPDATE alunos SET nomeTurma = :semTurmaNome WHERE id = :idAluno");
        $stmt->bindValue(":idAluno", $idAluno);
        $stmt->bindValue(":semTurmaNome", $semTurmaNome);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizaSemTurma($idAluno, $nomeTurma){
        $stmt = $this->pdo->prepare("UPDATE alunos SET nomeTurma = :nomeTurma WHERE id = :id");
        $stmt->bindValue(":id", $idAluno);
        $stmt->bindValue(":nomeTurma", $nomeTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarAlunoParaTurmaZero($idTurmaZero, $idAluno){
        $stmt = $this->pdo->prepare("UPDATE alunoturma SET idTurma = $idTurmaZero WHERE idAluno = $idAluno");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function moveAlunoTurmaZero($idAluno, $semTurmaId){
        $stmt = $this->pdo->prepare("UPDATE alunoturma SET idTurma = :semTurmaId WHERE idAluno = :idAluno");
        $stmt->bindValue(":idAluno", $idAluno);
        $stmt->bindValue(":semTurmaId", $semTurmaId);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizaAlunoTurma($idTurma, $idAlunoTurma){
        $stmt = $this->pdo->prepare("UPDATE alunoturma SET idTurma = :idTurma WHERE idAluno = :idAlunoTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->bindValue(":idAlunoTurma", $idAlunoTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos1($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente1 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos2($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente2 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos3($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente3 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos4($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente4 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos5($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente5 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos6($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente6 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos7($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente7 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos8($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente8 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionJogos9($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente9 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos1($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente1 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos2($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente2 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos3($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente3 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos4($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente4 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos5($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente5 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos6($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente6 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos7($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente7 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos8($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente8 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionJogos9($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente9 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks1($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente1 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks2($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente2 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks3($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente3 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks4($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente4 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks5($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente5 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks6($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente6 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks7($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente7 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks8($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente8 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionEbooks9($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente9 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks1($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente1 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks2($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente2 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks3($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente3 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks4($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente4 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks5($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente5 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks6($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente6 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks7($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente7 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks8($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente8 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionEbooks9($idEbooks, $ativo){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente9 SET ativo = :ativo WHERE id = :idEbooks");
        $stmt->bindValue(":idEbooks", $idEbooks);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido1($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente1 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido2($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente2 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido3($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente3 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido4($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente4 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido5($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente5 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido6($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente6 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido7($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente7 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido8($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente8 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function enablePermissionHibrido9($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente9 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido1($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente1 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido2($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente2 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido3($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente3 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido4($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente4 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido5($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente5 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido6($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente6 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido7($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente7 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido8($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente8 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function desablePermissionHibrido9($idHibrido, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente9 SET ativo = :ativo WHERE id = :idHibrido");
        $stmt->bindValue(":idHibrido", $idHibrido);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos1($idJogos, $ativo){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente1 SET ativo = :ativo WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos2($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente2 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos3($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente3 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos4($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente4 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos5($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente5 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos6($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente6 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos7($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente7 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos8($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente8 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogos9($idJogos, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente9 SET ativo = :ativo, new = :new WHERE id = :idJogos");
        $stmt->bindValue(":idJogos", $idJogos);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks1($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente1 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks2($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente2 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks3($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente3 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks4($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente4 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks5($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente5 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks6($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente6 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks7($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente7 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks8($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente8 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarEbooks9($idEbook, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente9 SET ativo = :ativo, new = :new WHERE id = :idEbook");
        $stmt->bindValue(":idEbook", $idEbook);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid1($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente1 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid2($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente2 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid3($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente3 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid4($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente4 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid5($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente5 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid6($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente6 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid7($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente7 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid8($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente8 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarJogoRfid9($idJogoRfid, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente9 SET ativo = :ativo, new = :new WHERE id = :idJogoRfid");
        $stmt->bindValue(":idJogoRfid", $idJogoRfid);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarVideos($idVideo, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE videos SET ativo = :ativo, new = :new WHERE id = :idVideo");
        $stmt->bindValue(":idVideo", $idVideo);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarSites($idSite, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE sites SET ativo = :ativo, new = :new WHERE id = :idSite");
        $stmt->bindValue(":idSite", $idSite);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarPlaylist($idPlaylist, $ativo, $new){
        $stmt = $this->pdo->prepare("UPDATE musicas SET ativo = :ativo, new = :new WHERE id = :idPlaylist");
        $stmt->bindValue(":idPlaylist", $idPlaylist);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function PermissionMusica($idMusic, $ativo){
        $stmt = $this->pdo->prepare("UPDATE musicas SET ativo = :ativo WHERE id = :idMusic");
        $stmt->bindValue(":idMusic", $idMusic);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function PermissionVideo($idVideo, $ativo){
        $stmt = $this->pdo->prepare("UPDATE videos SET ativo = :ativo WHERE id = :idVideo");
        $stmt->bindValue(":idVideo", $idVideo);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function PermissionSite($idSite, $ativo){
        $stmt = $this->pdo->prepare("UPDATE sites SET ativo = :ativo WHERE id = :idSite");
        $stmt->bindValue(":idSite", $idSite);
        $stmt->bindValue(":ativo", $ativo);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function AtualizarHoras($idTurma, $dia, $de, $ate){
        $stmt = $this->pdo->prepare("UPDATE horasdeuso SET de = :de, ate = :ate WHERE idTurma = :idTurma AND dia = :dia");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->bindValue(":dia", $dia);
        $stmt->bindValue(":de", $de);
        $stmt->bindValue(":ate", $ate);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function atualizarSenha($id, $senha1){
        $stmt = $this->pdo->prepare("UPDATE alunos SET senha = :senha1 WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":senha1", $senha1);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function ativoVideo($ativo, $idVideo){
        $stmt = $this->pdo->prepare("UPDATE videos SET ativo = :ativo WHERE idVideo = :idVideo");
        $stmt->bindValue(":ativo", $ativo);
        $stmt->bindValue(":idVideo", $idVideo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo1($idTurma, $nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente1 SET new = :new WHERE idTurma = :idTurma AND nome = :nomejogo");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->bindValue(":new", $new);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo2($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente2 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo3($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente3 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo4($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente4 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo5($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente5 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo6($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente6 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo7($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente7 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo8($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente8 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewJogo9($nomejogo, $new){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente9 SET new = :new WHERE nome = :nomejogo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomejogo", $nomejogo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook1($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente1 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook2($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente2 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook3($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente3 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook4($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente4 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook5($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente5 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook6($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente6 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook7($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente7 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook8($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente8 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewEbook9($nomeEbook, $new){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente9 SET new = :new WHERE nome = :nomeEbook");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeEbook", $nomeEbook);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido1($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente1 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido2($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente2 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido3($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente3 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido4($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente4 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido5($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente5 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido6($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente6 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido7($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente7 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido8($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente8 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewHibrido9($nomeHibrido, $new){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente9 SET new = :new WHERE nome = :nomeHibrido");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeHibrido", $nomeHibrido);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewMusic($nomeMusic, $new){
        $stmt = $this->pdo->prepare("UPDATE musicas SET new = :new WHERE nome = :nomeMusic");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeMusic", $nomeMusic);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewVideo($nomeVideo, $new){
        $stmt = $this->pdo->prepare("UPDATE videos SET new = :new WHERE nome_video = :nomeVideo");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeVideo", $nomeVideo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function updateNewSite($nomeSite, $new){
        $stmt = $this->pdo->prepare("UPDATE sites SET new = :new WHERE nome = :nomeSite");
        $stmt->bindValue(":new", $new);
        $stmt->bindValue(":nomeSite", $nomeSite);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setHoras($idTurma, $dia, $de, $ate){
        $stmt = $this->pdo->prepare("INSERT INTO horasdeuso (idTurma, dia, de, ate) 
        VALUES ('$idTurma', '$dia','$de', '$ate')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function sessaoPerfil($sessionLogin){
        $stmt = $this->pdo->prepare("SELECT usuario.perfil FROM usuario WHERE email = :email");
        $stmt->bindValue(":email", $sessionLogin);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function gerarChaveAcesso($email){
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE email = :email");
        $stmt->bindValue(":email", $email);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);

        $usuario_id = $rs["idUsuario"];

        if ($rs) {
            $chave = md5($rs["idUsuario"] . $rs["senha"]);
            $data_expirar = date('Y-m-d H:i:s', strtotime('+1 day'));
            $stmt = $this->pdo->prepare("INSERT INTO token (idUsuario, chave, data_expirar) VALUES ('$usuario_id','$chave', '$data_expirar')");
            $stmt->execute();
            $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $chave;
        }
    }
    function liberarAcesso($chave){
        $stmt = $this->pdo->prepare("SELECT * FROM token WHERE chave = :chave");
        $stmt->bindValue(":chave", $chave);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function salvarNovaSenha($idUsuario, $senha, $senha2){
        $stmt = $this->pdo->prepare("UPDATE usuario SET senha = :senha, senha2 = :senha2 WHERE idUsuario = :idUsuario");
        $stmt->bindValue(":senha", $senha);
        $stmt->bindValue(":senha2", $senha2);
        $stmt->bindValue(":idUsuario", $idUsuario);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function removerUsuario($idUsuario){
        $stmt = $this->pdo->prepare("DELETE FROM usuario WHERE idUsuario = :idUsuario");
        $stmt->bindValue(":idUsuario", $idUsuario);
        $stmt->execute();
    }
    function removerTurma($idturma){
        $stmt = $this->pdo->prepare("DELETE FROM turmas WHERE id = :idturma");
        $stmt->bindValue(":idturma", $idturma);
        $stmt->execute();
    }
    function removerTurmaProfessor($id){
        $stmt = $this->pdo->prepare("DELETE FROM turmas WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();
    }
    function removerAluno($idAluno){
        $stmt = $this->pdo->prepare("DELETE FROM alunos WHERE id = :idAluno");
        $stmt->bindValue(":idAluno", $idAluno);
        $stmt->execute();
    }
    function removerAlunoTurma($idAluno, $idTurma){
        $stmt = $this->pdo->prepare("DELETE FROM alunoturma WHERE idTurma = :idTurma AND idAluno = :idAluno");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->bindValue(":idAluno", $idAluno);
        $stmt->execute();
    }
    function removeAlunoTurma($idAluno){
        $stmt = $this->pdo->prepare("DELETE FROM alunoturma WHERE idAluno = :idAluno");
        $stmt->bindValue(":idAluno", $idAluno);
        $stmt->execute();
    }
    function removeVideoTurma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM videos WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo1Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente1 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo2Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente2 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo3Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente3 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo4Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente4 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo5Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente5 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo6Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente6 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo7Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente7 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo8Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente8 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogo9Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogosambiente9 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook1Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente1 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook2Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente2 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook3Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente3 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook4Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente4 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook5Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente5 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook6Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente6 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook7Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente7 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook8Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente8 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeEbook9Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM ebookambiente9 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid1Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente1 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid2Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente2 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid3Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente3 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid4Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente4 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid5Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente5 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid6Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente6 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid7Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente7 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid8Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente8 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeJogoRfid9Turma($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM jogorfidambiente9 WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeAvatar($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM avatar WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeHistorico($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM historico WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeHorasdeUso($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM horasdeuso WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeSite($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM sites WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function removeMusica($idturmaPost){
        $stmt = $this->pdo->prepare("DELETE FROM musicas WHERE idTurma = :idturmaPost");
        $stmt->bindValue(":idturmaPost", $idturmaPost);
        $stmt->execute();
    }
    function excluirToken($chave){
        $stmt = $this->pdo->prepare("DELETE FROM token WHERE chave = :chave");
        $stmt->bindValue(":chave", $chave);
        $stmt->execute();
    }
    function verificaEmail($email){
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE email = :email");
        $stmt->bindValue(":email", $email);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function verificaTurma($turma, $idUsuario){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE id = :turma AND professor = :idUsuario");
        $stmt->bindValue(":turma", $turma);
        $stmt->bindValue(":idUsuario", $idUsuario);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function salvaHistorico($idTurma, $categoria, $id, $horario){
        $stmt = $this->pdo->prepare("UPDATE historico SET cat = :categoria, id = :id, horario = :horario  WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->bindValue(":categoria", $categoria);
        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":horario", $horario);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid1($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid2($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid3($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid4($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid5($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid6($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid7($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid8($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogo9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogos'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoEbook9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'ebook'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function historicoJogoRfid9($idTurma){
        $stmt = $this->pdo->prepare("SELECT * FROM historico WHERE idTurma = :idTurma AND cat = 'jogorfid'");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function AddArquivo($nomeArquivo, $link, $valor) {
        $stmt = $this->pdo->prepare("INSERT INTO documentos (nome, link, valor) 
        VALUES ('$nomeArquivo', '$link', '$valor')");
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function compareNamesDocs($nomeArquivo){
        $stmt = $this->pdo->prepare("SELECT nome FROM documentos WHERE nome = :nomeArquivo");
        $stmt->bindValue(":nomeArquivo", $nomeArquivo);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getAllDocs($valor){
        $stmt = $this->pdo->prepare("SELECT * FROM documentos WHERE valor = :valor");
        $stmt->bindValue(":valor", $valor);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function removeDocs($idDoc){
        $stmt = $this->pdo->prepare("DELETE FROM documentos WHERE id = :idDoc");
        $stmt->bindValue(":idDoc", $idDoc);
        $stmt->execute();
    }
    function getpesquisaAluno($search, $turma){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos WHERE nomeAluno LIKE '$search%' AND nomeTurma = :turma");
        $stmt->bindValue(":turma", $turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getpesquisaMusica($search, $turma){
        $stmt = $this->pdo->prepare("SELECT * FROM musicas WHERE nome LIKE '$search%' AND idTurma = :turma");
        $stmt->bindValue(":turma", $turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getpesquisaVideo($search, $turma){
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE nome_video LIKE '$search%' AND idTurma = :turma");
        $stmt->bindValue(":turma", $turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getpesquisaSite($search, $turma){
        $stmt = $this->pdo->prepare("SELECT * FROM sites WHERE nome LIKE '$search%' AND idTurma = :turma");
        $stmt->bindValue(":turma", $turma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getIdTurmaZeroProf($idProf){
        $stmt = $this->pdo->prepare("SELECT * FROM turmas WHERE professor = :idProf AND nomeTurma = 'Sem Turma'");
        $stmt->bindValue(":idProf", $idProf);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getAlunosTurmaZero($idProf){
        $stmt = $this->pdo->prepare("SELECT * FROM alunos WHERE idProfessor = :idProf AND nomeTurma = 'Sem Turma'");
        $stmt->bindValue(":idProf", $idProf);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getEmailProf($emailProf){
        $stmt = $this->pdo->prepare("SELECT email FROM usuario WHERE email = :emailProf");
        $stmt->bindValue(":emailProf", $emailProf);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function getIdTurmaZero($idProf){
        $stmt = $this->pdo->prepare("SELECT id FROM turmas WHERE professor = :idProf AND nomeTurma = 'Sem Turma'");
        $stmt->bindValue(":idProf", $idProf);
        $stmt->execute();
        $rs = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo1($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente1 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo2($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente2 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo3($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente3 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo4($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente4 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo5($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente5 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo6($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente6 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo7($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente7 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo8($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente8 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyJogo9($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogosambiente9 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook1($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente1 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook2($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente2 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook3($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente3 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook4($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente4 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }function setNotifyEbook5($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente5 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook6($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente6 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook7($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente7 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook8($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente8 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyEbook9($idTurma){
        $stmt = $this->pdo->prepare("UPDATE ebookambiente9 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido1($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente1 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido2($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente2 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido3($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente3 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido4($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente4 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido5($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente5 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido6($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente6 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido7($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente7 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido8($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente8 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyHibrido9($idTurma){
        $stmt = $this->pdo->prepare("UPDATE jogorfidambiente9 SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyMusic($idTurma){
        $stmt = $this->pdo->prepare("UPDATE musicas SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifyVideo($idTurma){
        $stmt = $this->pdo->prepare("UPDATE videos SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
    function setNotifySite($idTurma){
        $stmt = $this->pdo->prepare("UPDATE sites SET new = 0 WHERE idTurma = :idTurma");
        $stmt->bindValue(":idTurma", $idTurma);
        $stmt->execute();
        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rs;
    }
}
