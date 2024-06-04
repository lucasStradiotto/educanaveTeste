<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);

/*
 * ERROR:
 * 0 = TUDO OK
 * 1 = não tem criança
 * 2 = Não tem ação
 * 3 = criança não existe
 * 4 = não tem dados
 * 5 = Não conseguiu atualizar
 */
header('Access-Control-Allow-Origin: *');
session_start();

require_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];

if ($act == 'getMundo') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchMundos($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getMundos') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchMundos($idTurma);

    die(json_encode($result));
} else if ($act == 'mundo') {

    $arquivo = $_FILES['file'];
    if (preg_match("/\s/", $arquivo['name'])) {
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../mundos/";
    $caminho = "mundos/";

    copy($_FILES['file']['tmp_name'], $pasta . $arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho . $nomeArquivo[0];

    $file = new ZipArchive;

    if ($file->open($arquivo['tmp_name']) == TRUE) {
        $file->extractTo($pasta . $nomeArquivo[0]);
        $searchTurmas = $conn->searchTurma();
        foreach ($searchTurmas as $key => $value) {
            $idTurma = $value['id'];
            $ativo = "false";
            $nome = $nomeArquivo[0];
            $url = $path;
            $img = 1;
            $tipo = "local";
            $new = 0;

            $adicionarMundo = $conn->adicionarMundo($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new);
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();
} else if ($act == 'getNewMundo') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewMundo($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewMundos') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewMundos($idTurma);

    die(json_encode($result));
} else if ($act == 'removeMundo') {
    if (isset($_POST['idRemoveMundo'])) {
        $id = $_POST['idRemoveMundo'];

        $resultado = $conn->getMundoNome($id);

        $nome = $resultado[0]['nome'];

        $results = $conn->deletarMundo($nome);

        die('{"error":0}');
    } else {
        die('{"error":13}');
    }
} else if ($act == 'getAvatar') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getAvatar($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'getAvatares') {

    $id = $_POST['id'];

    $result = $conn->searchAvatar($id);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if ($act == 'avatar') {

    $arquivo = $_FILES['file'];
    if (preg_match("/\s/", $arquivo['name'])) {
        die("1");
    }
    $nomeArquivo = explode(".", $arquivo['name']);
    $pasta = "../avatar/";
    $caminho = "avatar/";

    copy($_FILES['file']['tmp_name'], $pasta . $arquivo['name']);

    // mkdir($pasta.$nomeArquivo[0]);
    $path = $caminho . $nomeArquivo[0];

    $file = new ZipArchive;

    if ($file->open($arquivo['tmp_name']) == TRUE) {
        $file->extractTo($pasta . $nomeArquivo[0]);
        $conteudo = scandir($pasta . $nomeArquivo[0]);
        for ($i = 0; $i < $file->numFiles; $i++) {
            $avatar = $file->getNameIndex($i);
            $nomeAvatar = explode(".", $avatar);
            $searchTurmas = $conn->searchTurma();
            foreach ($searchTurmas as $key => $value) {
                $idTurma = $value['id'];
                $ativo = "false";
                $nome = $nomeAvatar[0];
                $url = $path;
                $img = 1;
                $tipo = "local";
                $new = 0;

                $adicionarAvatar = $conn->adicionarAvatar($tipo, $nome, $ativo, $arquivo['name'], $img, $url, $idTurma, $new);
            }
        }
        die("0");
    } else {
        die("1");
    }

    $file->close();
} else if ($act == 'getNewAvatar') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewAvatar($idTurma);

    die(json_encode($result));
} else if ($act == 'getNewAvatars') {

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewAvatars($idTurma);

    die(json_encode($result));
} else if ($act == 'removeAvatar') {

    $id = $_POST['idRemoveAvatar'];

    $results = $conn->deletarAvatar($id);

    die('{"error":0}');
} else {
    die('{"error":2}');
}
