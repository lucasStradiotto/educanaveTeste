<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('conexao.php');
require_once('phphelper/regex.php');

function convertToReadableSize($size){
    $base = log($size) / log(1024);
    $suffix = array("", "KB", "MB", "GB", "TB");
    $f_base = floor($base);
    return round(pow(1024, $base - floor($base)), 1) . $suffix[$f_base];
}

$conn = new conecta();

$act = $_GET['act'];
if ($act == 'get') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchVideos($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'add') {

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../videos/";
    $caminho = "videos/";

    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $conteudo = scandir($pasta.$nomeArquivo[0]);
        for ($i = 0; $i < $file->numFiles; $i++) {
            $video = $file->getNameIndex($i);
            $nomeVideo = explode(".", $video);
            if($nomeVideo[1] == "ogv"){
                $searchTurmas = $conn->searchTurma();
                foreach ($searchTurmas as $key => $value) {
                    $idTurma = $value['id'];
                    $ativo = "false";
                    $link = $path;
                    $new = 1;
                    $adicionarVideo = $conn->adicionarVideo($idTurma, $ativo, $arquivo['name'], $video, $link, $new, $sizeFile);
                }
            } else {
                die("2");
            }
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if ($act == 'remove') {
    if (isset($_POST['idRemoveVideo'])) {
        $id = $_POST['idRemoveVideo'];

        $resultado = $conn->getVideoNome($id);

        $nome = $resultado[0]['nome_video'];
        $path = $resultado[0]['link'];
        $arquivo = $resultado[0]['nomeArquivo'];

        $results = $conn->deletarVideo($nome);

        unlink("../$path/$nome");
        $dir = scandir("../$path");
        if(count($dir) == 0 || count($dir) == 2){
            rmdir("../$path");
            unlink("../videos/$arquivo");
        }

        die('0');
    } else {
        die('1');
    }
} else if ($act == 'addList') {

    $nome = $_POST['nome'];
    $idTurma = $_POST['idTurma'];
    $ativo = 'true';
    if ($nome == '') {
        die('{"error":21}');
    }

    $result = $conn->adicionarLista($nome, $ativo, $idTurma);

    die('{"error":0}');
} else if ($act == 'removeList') {
    $lista = $_POST['lista'];

    $result = $conn->deletarLista($lista);

    die('{"error":0}');
} else if ($act == 'atualizarList') {
    $idVideo = $_POST['lista'];
    $ativo = $_POST['check'];


    if ($ativo == 'false') {
        $ativo = 'false';
    } else if ($ativo == 'true') {
        $ativo = 'true';
    } else {
        die('{"error":41}');
    }

    $new = 1;

    $results = $conn->atualizarVideos($idVideo, $ativo, $new);

    if ($results > 0) {
        sleep(2);
        die('{"error":0}');
    } else {
        die('{"error":43}');
    }
} else if ($act == 'listavideo') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getListaVideos($idTurma);

    die(json_encode($result));
} else if ($act == 'video') {

    $idLista = $_POST['idLista'];

    $result = $conn->searchVideos($idLista);

    die(json_encode($result));
} else if ($act == 'getVideos'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchVideos($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewVideo'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewVideo($idTurma);

    die(json_encode($result));

} else if ($act == 'getNewVideos'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewVideos($idTurma);

    die(json_encode($result));
} else if ($act == 'permissionVideo'){

    $idVideo = $_POST['videoId'];
    $ativo = $_POST['checkVideo'];

    $result = $conn->PermissionVideo($idVideo, $ativo);

    die('0');

} else if ($act == 'pesquisa'){
    
    $search = $_POST['pesquisa'];
    $turma = $_POST['idTurma'];

    $result = $conn->getpesquisaVideo($search, $turma);

    if($result == ''){
        $result = '';
        die(json_encode($result));
    } else {
        die(json_encode($result));
    }

} else {
    die('{"error":1}');
}
