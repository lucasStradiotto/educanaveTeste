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

    $result = $conn->searchJogoRfid1($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid2($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid3($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid4($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid5($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid6($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid7($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid8($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'get9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid9($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getJogoRfid1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid1($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid2($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid3($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid4($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid5($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid6($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid7($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid8($idTurma);

    die(json_encode($result));
}else if ($act == 'getJogoRfid9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchJogoRfid9($idTurma);

    die(json_encode($result));
}else if($act == 'addJogoRfid1'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid1($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid2'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid2($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid3'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid3($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid4'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid4($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid5'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid5($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid6'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid6($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid7'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid7($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid8'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid8($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'addJogoRfid9'){
    
    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../jogorfid/";
    $caminho = "jogorfid/";
    
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

            $adicionarJogo = $conn->adicionarJogoRfid9($tipo, $nome, $ativo, $arquivo['name'], $img, $link, $idTurma, $new, $version[2],$sizeFile);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

}else if($act == 'removeJogoRfid1'){
    if(isset($_POST['idRemoveJogorfid1'])){

        $idJogoRfid = $_POST['idRemoveJogorfid1'];

        $resultado = $conn->getJogoRfid1Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid1($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid2'){
    if(isset($_POST['idRemoveJogorfid2'])){
        $idJogoRfid = $_POST['idRemoveJogorfid2'];

        $resultado = $conn->getJogoRfid2Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid2($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid3'){
    if(isset($_POST['idRemoveJogorfid3'])){
        $idJogoRfid = $_POST['idRemoveJogorfid3'];

        $resultado = $conn->getJogoRfid3Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid3($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid4'){
    if(isset($_POST['idRemoveJogorfid4'])){
        $idJogoRfid = $_POST['idRemoveJogorfid4'];

        $resultado = $conn->getJogoRfid4Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid4($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid5'){
    if(isset($_POST['idRemoveJogorfid5'])){
        $idJogoRfid = $_POST['idRemoveJogorfid5'];

        $resultado = $conn->getJogoRfid5Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid5($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid6'){
   if(isset($_POST['idRemoveJogorfid6'])){
        $idJogoRfid = $_POST['idRemoveJogorfid6'];

        $resultado = $conn->getJogoRfid6Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid6($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid7'){
    if(isset($_POST['idRemoveJogorfid7'])){
        $idJogoRfid = $_POST['idRemoveJogorfid7'];

        $resultado = $conn->getJogoRfid7Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid7($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid8'){
    if(isset($_POST['idRemoveJogorfid8'])){
        $idJogoRfid = $_POST['idRemoveJogorfid8'];

        $resultado = $conn->getJogoRfid8Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid8($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if($act == 'removeJogoRfid9'){
    if(isset($_POST['idRemoveJogorfid9'])){
        $idJogoRfid = $_POST['idRemoveJogorfid9'];

        $resultado = $conn->getJogoRfid9Nome($idJogoRfid);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deleteJogoRfid9($nome);

        $removePasta = "../jogorfid/".$nome;
        $removeZip = "../jogorfid/".$nome.".zip";

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
}else if ($act == 'getNewJogoRfid1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid1($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid2($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid3($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid4($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid5($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid6($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid7($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid8($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogoRfid9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewJogoRfid9($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid1'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid1($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid2'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid2($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid3'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid3($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid4'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid4($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid5'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid5($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid6'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid6($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid7'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid7($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid8'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid8($idTurma);

    die(json_encode($result));
}else if ($act == 'getNewJogosRfid9'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewHibridoRfid9($idTurma);

    die(json_encode($result));
} else if($act == 'enablePermissionHibrido1'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido1($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido1'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido1($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido2'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido2($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido2'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido2($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido3'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido3($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido3'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido3($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido4'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido4($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido4'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido4($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido5'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido5($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido5'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido5($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido6'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido6($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido6'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido6($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido7'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido7($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido7'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido7($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido8'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido8($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido8'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido8($idHibrido, $ativo);

    die('0');

} else if($act == 'enablePermissionHibrido9'){

    $idHibrido = $_POST['id'];
    $ativo = 'true';
    
    $result = $conn->enablePermissionHibrido9($idHibrido, $ativo);

    die('0');

} else if($act == 'desablePermissionHibrido9'){

    $idHibrido = $_POST['id'];
    $ativo = 'false';
    
    $result = $conn->desablePermissionHibrido9($idHibrido, $ativo);

    die('0');

}else if($act == 'getAllJogorfid'){

    $idTurma = $_POST['idTurma'];
    $array = [];

    $rs1 = $conn->getNewJogosRfid1($idTurma);

    array_push($array, $rs1);

    $rs2 = $conn->getNewJogosRfid2($idTurma);

    array_push($array, $rs2);

    $rs3 = $conn->getNewJogosRfid3($idTurma);

    array_push($array, $rs3);

    $rs4 = $conn->getNewJogosRfid4($idTurma);

    array_push($array, $rs4);

    $rs5 = $conn->getNewJogosRfid5($idTurma);

    array_push($array, $rs5);

    $rs6 = $conn->getNewJogosRfid6($idTurma);

    array_push($array, $rs6);

    $rs7 = $conn->getNewJogosRfid7($idTurma);

    array_push($array, $rs7);

    $rs8 = $conn->getNewJogosRfid8($idTurma);

    array_push($array, $rs8);

    $rs9 = $conn->getNewJogosRfid9($idTurma);

    array_push($array, $rs9);
    
    die(json_encode($array));

} else{
    die('{"error":1}');
}
