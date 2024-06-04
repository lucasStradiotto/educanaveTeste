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
if($act == 'get1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos1($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos2($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos3($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos4($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos5($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos6($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos7($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos8($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos9($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getJogos1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos1($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos2($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos3($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos4($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos5($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos6($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos7($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos8($idTurma);

    die(json_encode($result));
} else if ($act == 'getJogos9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogos9($idTurma);

    die(json_encode($result));
} else if($act == 'addJogos1'){

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos1($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos2'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos2($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos3'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos3($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos4'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos4($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos5'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos5($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos6'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos6($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos7'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos7($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos8'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos8($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'addJogos9'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogos/";
    $caminho = "jogos/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        $file->extractTo($pasta.$nomeArquivo[0]);
        $searchForFile = scandir($pasta.$nomeArquivo[0]);
        $versionFile = "../".$path."/version.txt";
        $txtFile = file_get_contents($versionFile);
        $version = explode("=", $txtFile);
        $sizeBytes = filesize($arquivo['tmp_name']);
        $sizeFile = convertToReadableSize($sizeBytes);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarJogos9($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if($act == 'removeJogo1'){
    if(isset($_POST['idRemoveJogo1'])){
        $idJogo = $_POST['idRemoveJogo1'];

        $resultado = $conn->getJogo1Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo1($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo2'){
    if(isset($_POST['idRemoveJogo2'])){
        $idJogo = $_POST['idRemoveJogo2'];

        $resultado = $conn->getJogo2Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo2($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo3'){
   if(isset($_POST['idRemoveJogo3'])){
        $idJogo = $_POST['idRemoveJogo3'];

        $resultado = $conn->getJogo3Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo3($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo4'){
    if(isset($_POST['idRemoveJogo4'])){
        $idJogo = $_POST['idRemoveJogo4'];

        $resultado = $conn->getJogo4Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo4($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo5'){
   if(isset($_POST['idRemoveJogo5'])){
        $idJogo = $_POST['idRemoveJogo5'];

        $resultado = $conn->getJogo5Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo5($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo6'){
    if(isset($_POST['idRemoveJogo6'])){
        $idJogo = $_POST['idRemoveJogo6'];

        $resultado = $conn->getJogo6Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo6($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo7'){
  if(isset($_POST['idRemoveJogo7'])){
        $idJogo = $_POST['idRemoveJogo7'];

        $resultado = $conn->getJogo7Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo7($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo8'){
   if(isset($_POST['idRemoveJogo8'])){
        $idJogo = $_POST['idRemoveJogo8'];

        $resultado = $conn->getJogo8Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo8($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if($act == 'removeJogo9'){
    if(isset($_POST['idRemoveJogo9'])){
        $idJogo = $_POST['idRemoveJogo9'];

        $resultado = $conn->getJogo9Nome($idJogo);

        $nome = $resultado[0]['nome'];

        $result = $conn->deleteJogo9($nome);

        $removePasta = "../jogos/".$nome;
        $removeZip = "../jogos/".$nome.".zip";

        function delTree($dir) {
            $files = array_diff(scandir($dir), array('.','..'));
             foreach ($files as $file) {
               (is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file");
             }
             return rmdir($dir);
           }
        
        delTree($removePasta);
        unlink($removeZip);

        die('0');
    } else {
        die('1');
    }
} else if ($act == 'getNewJogo1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo1($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo2($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo3($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo4($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo5($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo6($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo7($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo8($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogo9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogo9($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos1($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos2($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos3($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos4($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos5($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos6($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos7($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos8($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewJogos9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogos9($idTurma);

    die(json_encode($result));
} else if($act == 'enablePermissionJogos1'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos1($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos1'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos1($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos2'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos2($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos2'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos2($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos3'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos3($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos3'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos3($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos4'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos4($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos4'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos4($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos5'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos5($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos5'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos5($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos6'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos6($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos6'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos6($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos7'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos7($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos7'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos7($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos8'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos8($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos8'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos8($idJogos, $ativo);

    die('0');

} else if($act == 'enablePermissionJogos9'){

    $idJogos = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionJogos9($idJogos, $ativo);

    die('0');

} else if($act == 'desablePermissionJogos9'){

    $idJogos = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionJogos9($idJogos, $ativo);

    die('0');

} else if($act == 'getAllJogos'){

    var_dump($_POST);
    $idTurma = $_POST["idTurma"];
    $array = [];

    $rs1 = $conn->getNewJogos1($idTurma);

    array_push($array, $rs1);

    $rs2 = $conn->getNewJogos2($idTurma);

    array_push($array, $rs2);

    $rs3 = $conn->getNewJogos3($idTurma);

    array_push($array, $rs3);

    $rs4 = $conn->getNewJogos4($idTurma);

    array_push($array, $rs4);

    $rs5 = $conn->getNewJogos5($idTurma);

    array_push($array, $rs5);

    $rs6 = $conn->getNewJogos6($idTurma);

    array_push($array, $rs6);

    $rs7 = $conn->getNewJogos7($idTurma);

    array_push($array, $rs7);

    $rs8 = $conn->getNewJogos8($idTurma);

    array_push($array, $rs8);

    $rs9 = $conn->getNewJogos9($idTurma);

    array_push($array, $rs9);
    
    die(json_encode($array));

} else {
    die('{"error":1}');
}