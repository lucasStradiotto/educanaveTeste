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
if($act == 'get'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchMusicas($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'addMusica'){

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../musicas/";
    $caminho = "musicas/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $conteudo = scandir($pasta.$nomeArquivo[0]);
        for ($i = 0; $i < $file->numFiles; $i++) {
            $nomeMusica = $file->getNameIndex($i);
            $musica = explode(".", $nomeMusica);
            if($musica[1] == "mp3" || $musica[1] == "ogg" || $musica[1] == "png" || $musica[1] == "gif"){
                $searchTurmas = $conn->searchTurma();
                foreach ($searchTurmas as $key => $value) {
                    $idTurma = $value['id'];
                    $ativo = "false";
                    $playlist = $path;
                    $new = 1;
    
                    $adicionarMusica = $conn->cadastrarPlaylist($idTurma, $ativo, $arquivo['name'], $nomeMusica, $playlist, $new, $sizeFile);
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
} else if($act == 'remove'){
    if(isset($_POST['idRemoveMusica'])){
        $idMusica = $_POST['idRemoveMusica'];

        $resultado = $conn->getMusicaNome($idMusica);

        $nome = $resultado[0]['nome'];
        $path = $resultado[0]['playlist'];
        $arquivo = $resultado[0]['nomeArquivo'];
        
        $result = $conn->deletarMusicas($nome);

        unlink("../$path/$nome");
        rmdir("../$path");
        unlink("../musicas/$arquivo");
        
        die('0');
    }else{
        die('1');
    }
} else if($act == 'permissionMusic'){

    $idMusic = $_POST['idMusic'];
    $ativo = $_POST['checkMusic'];

    $results = $conn->PermissionMusica($idMusic, $ativo);
    
    die('0');

} else if($act == 'getMusicas'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchMusicas($idTurma);
    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getNewMusica'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewMusica($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewMusicas'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewMusicas($idTurma);

    die(json_encode($result));
} else if($act == 'pesquisa'){

    $search = $_POST['pesquisa'];
    $turma = $_POST['idTurma'];

    $result = $conn->getpesquisaMusica($search, $turma);

    if($result == ''){
        $result = '';
        die(json_encode($result));
    } else {
        die(json_encode($result));
    }

} else {
    die('{"error":1}');
}
