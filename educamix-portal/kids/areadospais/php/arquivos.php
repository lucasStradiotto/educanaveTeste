<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('conexao.php');
require_once('phphelper/regex.php');

$conn = new conecta();

$act = $_GET['act'];

if ($act == 'manuais'){

    $arquivo = $_FILES['file'];
    if(preg_match("/\s/",$arquivo['name'])){
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../manuais/";
    $caminho = "manuais/";
    
    copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho.$nomeArquivo[0];

    $file = new ZipArchive;

    if($file->open($arquivo['tmp_name']) == TRUE){
        // $file->extractTo($pasta.$nomeArquivo[0]);
        // $searchTurmas = $conn->searchTurma();
        foreach ($file as $key => $value) {
            $id = $value['id'];
            $nome = $nomeArquivo[0];
            $url = $path;

            $adicionarArquivo = $conn->adicionarManual($nome, $url);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();

} else if ($act == 'documentos'){

    $arquivo = $_FILES['file'];
    
    $nomeArquivo = explode(".", $arquivo['name']);

    $compare = $conn->compareNamesDocs($nomeArquivo[0]);

    if($compare == true){
        die('2');
    } else {
        $pasta = "../documentos/";

        copy($_FILES['file']['tmp_name'], $pasta.$arquivo['name']);
    
        $link = "documentos/".$arquivo['name'];

        $valor = 1;
        
        $result = $conn->AddArquivo($nomeArquivo[0], $link, $valor);
    
        if($result == true){
            die('0');
        }
    }

} else if($act == 'getDoc'){

    $val = $_POST['valor'];

    $result = $conn->getAllDocs($val);

    die(json_encode($result));
} else if($act = 'removeDoc'){

    $idDoc = $_POST['idDoc'];

    $result = $conn->removeDocs($idDoc);

    die('0');

} else {
    
    die('1');
}

?>