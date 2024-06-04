<?php
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
require_once('conexao.php');
$conn = new conecta();

$act = '';

if(isset($_GET['id'])){
    $idTurma = $_GET['id'];
}else{
    //Resolve um bug de versões antigas
    foreach ($_GET as $key => $val) break; $idTurma = substr($key,2);
}

$historico = json_decode($_POST['historico']);
foreach($historico as $hist=>$val){
    $categoria = $val->cat;
    $id = $val->id;
    $hr = $val->now;
    $horario = (int) ($hr / 1000);

    $salvaHistorico = $conn->salvaHistorico($idTurma, $categoria, $id, $horario);
}
die('{"error":0}');

if($act == 'getjogo1'){

    $idTurma = $_POST['idTurma'];

    $getjogo1historico = $conn->historicoJogo1($idTurma);

    die('{"error":0}');
}else if($act == 'getebook1'){

    $idTurma = $_POST['idTurma'];

    $getebook1historico = $conn->historicoEbook1($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid1'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid1historico = $conn->historicoJogoRfid1($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo2'){

    $idTurma = $_POST['idTurma'];

    $getjogo2historico = $conn->historicoJogo2($idTurma);

    die('{"error":0}');
}else if($act == 'getebook2'){

    $idTurma = $_POST['idTurma'];

    $getebook2historico = $conn->historicoEbook2($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid2'){
    
    $idTurma = $_POST['idTurma'];

    $getjogorfid2historico = $conn->historicoJogoRfid2($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo3'){

    $idTurma = $_POST['idTurma'];

    $getjogo3historico = $conn->historicoJogo3($idTurma);

    die('{"error":0}');
}else if($act == 'getebook3'){

    $idTurma = $_POST['idTurma'];

    $getebook3historico = $conn->historicoEbook3($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid3'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid3historico = $conn->historicoJogoRfid3($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo4'){

    $idTurma = $_POST['idTurma'];

    $getjogo4historico = $conn->historicoJogo4($idTurma);

    die('{"error":0}');
}else if($act == 'getebook4'){

    $idTurma = $_POST['idTurma'];

    $getebook4historico = $conn->historicoEbook4($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid4'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid4historico = $conn->historicoJogoRfid4($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo5'){

    $idTurma = $_POST['idTurma'];

    $getjogo5historico = $conn->historicoJogo5($idTurma);

    die('{"error":0}');
}else if($act == 'getebook5'){

    $idTurma = $_POST['idTurma'];

    $getebook5historico = $conn->historicoEbook5($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid5'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid5historico = $conn->historicoJogoRfid5($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo6'){

    $idTurma = $_POST['idTurma'];

    $getjogo6historico = $conn->historicoJogo6($idTurma);

    die('{"error":0}');
}else if($act == 'getebook6'){

    $idTurma = $_POST['idTurma'];

    $getebook6historico = $conn->historicoEbook6($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid6'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid6historico = $conn->historicoJogoRfid6($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo7'){

    $idTurma = $_POST['idTurma'];

    $getjogo7historico = $conn->historicoJogo7($idTurma);

    die('{"error":0}');
}else if($act == 'getebook7'){

    $idTurma = $_POST['idTurma'];

    $getebook7historico = $conn->historicoEbook7($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid7'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid7historico = $conn->historicoJogoRfid7($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo8'){

    $idTurma = $_POST['idTurma'];

    $getjogo8historico = $conn->historicoJogo8($idTurma);

    die('{"error":0}');
}else if($act == 'getebook8'){

    $idTurma = $_POST['idTurma'];

    $getebook8historico = $conn->historicoEbook8($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid8'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid8historico = $conn->historicoJogoRfid8($idTurma);

    die('{"error":0}');
}else if($act == 'getjogo9'){

    $idTurma = $_POST['idTurma'];

    $getjogo9historico = $conn->historicoJogo9($idTurma);

    die('{"error":0}');
}else if($act == 'getebook9'){

    $idTurma = $_POST['idTurma'];

    $getebook9historico = $conn->historicoEbook9($idTurma);

    die('{"error":0}');
}else if($act == 'getjogorfid9'){

    $idTurma = $_POST['idTurma'];

    $getjogorfid9historico = $conn->historicoJogoRfid9($idTurma);

    die('{"error":0}');
}else {
    die('{"error":1}');
}


