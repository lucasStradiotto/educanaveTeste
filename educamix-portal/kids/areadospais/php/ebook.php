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

    $result = $conn->searchEbooks1($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks2($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks3($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks4($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks5($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks6($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks7($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks8($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks9($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getEbooks1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks1($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks2($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks3($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks4($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks5($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks6($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks7($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks8($idTurma);

    die(json_encode($result));
}else if ($act == 'getEbooks9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchEbooks9($idTurma);

    die(json_encode($result));
}else if($act == 'addEbook1'){

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks1($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook2'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks2($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook3'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks3($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook4'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks4($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook5'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks5($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook6'){

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks6($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook7'){
    
     $arquivo = $_FILES['file'];
     if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks7($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook8'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks8($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addEbook9'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../ebooks/";
    $caminho = "ebooks/";
    
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
            $link = $path;
            $img = 1;
            $tipo = "local";
            $new = 1;

            $adicionarJogo = $conn->adicionarEbooks9($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2], $sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'removeEbook1'){
    if(isset($_POST['idRemoveEbook1'])){
        $idEbook = $_POST['idRemoveEbook1'];

        $resultado = $conn->getEbook1Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook1($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook2'){
    if(isset($_POST['idRemoveEbook2'])){
        $idEbook = $_POST['idRemoveEbook2'];

        $resultado = $conn->getEbook2Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook2($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook3'){
   if(isset($_POST['idRemoveEbook3'])){
        $idEbook = $_POST['idRemoveEbook3'];

        $resultado = $conn->getEbook3Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook3($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook4'){
    if(isset($_POST['idRemoveEbook4'])){
        $idEbook = $_POST['idRemoveEbook4'];

        $resultado = $conn->getEbook4Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook4($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook5'){
    if(isset($_POST['idRemoveEbook5'])){
        $idEbook = $_POST['idRemoveEbook5'];

        $resultado = $conn->getEbook5Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook5($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook6'){
    if(isset($_POST['idRemoveEbook6'])){
        $idEbook = $_POST['idRemoveEbook6'];

        $resultado = $conn->getEbook6Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook6($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook7'){
    if(isset($_POST['idRemoveEbook7'])){
        $idEbook = $_POST['idRemoveEbook7'];

        $resultado = $conn->getEbook7Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook7($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook8'){
    if(isset($_POST['idRemoveEbook8'])){
        $idEbook = $_POST['idRemoveEbook8'];

        $resultado = $conn->getEbook8Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook8($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if($act == 'removeEbook9'){
    if(isset($_POST['idRemoveEbook9'])){
        $idEbook = $_POST['idRemoveEbook9'];

        $resultado = $conn->getEbook9Nome($idEbook);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteEbook9($nome);

        $removePasta = "../ebooks/".$nome;
        $removeZip = "../ebooks/".$nome.".zip";

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
}else if ($act == 'getNewEbook1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook1($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook2($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook3($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook4($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook5($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook6($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook7($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook8($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbook9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbook9($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks1($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks2($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks3($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks4($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks5($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks6($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks7($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks8($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewEbooks9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewEbooks9($idTurma);

    die(json_encode($result));
}else if($act == 'enablePermissionEbooks1'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks1($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks1'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks1($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks2'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks2($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks2'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks2($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks3'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks3($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks3'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks3($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks4'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks4($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks4'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks4($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks5'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks5($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks5'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks5($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks6'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks6($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks6'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks6($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks7'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks7($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks7'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks7($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks8'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks8($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks8'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks8($idEbooks, $ativo);

    die('0');

} else if($act == 'enablePermissionEbooks9'){

    $idEbooks = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionEbooks9($idEbooks, $ativo);

    die('0');

}else if($act == 'desablePermissionEbooks9'){

    $idEbooks = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionEbooks9($idEbooks, $ativo);

    die('0');

} else if($act == 'getAllEbooks'){

    $idTurma = $_POST['idTurma'];
    $array = [];

    $rs1 = $conn->getNewEbooks1($idTurma);

    array_push($array, $rs1);

    $rs2 = $conn->getNewEbooks2($idTurma);

    array_push($array, $rs2);

    $rs3 = $conn->getNewEbooks3($idTurma);

    array_push($array, $rs3);

    $rs4 = $conn->getNewEbooks4($idTurma);

    array_push($array, $rs4);

    $rs5 = $conn->getNewEbooks5($idTurma);

    array_push($array, $rs5);

    $rs6 = $conn->getNewEbooks6($idTurma);

    array_push($array, $rs6);

    $rs7 = $conn->getNewEbooks7($idTurma);

    array_push($array, $rs7);

    $rs8 = $conn->getNewEbooks8($idTurma);

    array_push($array, $rs8);

    $rs9 = $conn->getNewEbooks9($idTurma);

    array_push($array, $rs9);
    
    die(json_encode($array));

} else{
    die('{"error":1}');
}
