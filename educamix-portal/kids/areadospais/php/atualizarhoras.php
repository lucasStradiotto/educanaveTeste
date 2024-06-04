<?php
/*
 * ERROR:
 * 0 = TUDO OK
 * 1 = domingo INVALIDO
 * 2 = segunda INVALIDO
 * 3 = terca INVALIDO
 * 4 = quarta INVALIDO
 * 5 = quinta INVALIDO
 * 6 = sexta INVALIDO
 * 7 = sabado INVALIDO
 * 8 = criança não encontrada
 * 9 = não é tutor desta criança
 * 10 = error ao salvar no banco
 */
header('Access-Control-Allow-Origin: *');
session_start();

require_once('conexao.php');

$conn = new conecta();

$domingo = $_POST['domingo'];
$segunda = $_POST['segunda'];
$terca = $_POST['terca'];
$quarta = $_POST['quarta'];
$quinta = $_POST['quinta'];
$sexta = $_POST['sexta'];
$sabado = $_POST['sabado'];
$idTurma = $_POST['idTurma'];

$domingo0Exploded = explode(":", $domingo[0]);
$domingo1Exploded = explode(":", $domingo[1]);
$segunda0Exploded = explode(":", $segunda[0]);
$segunda1Exploded = explode(":", $segunda[1]);
$terca0Exploded = explode(":", $terca[0]);
$terca1Exploded = explode(":", $terca[1]);
$quarta0Exploded = explode(":", $quarta[0]);
$quarta1Exploded = explode(":", $quarta[1]);
$quinta0Exploded = explode(":", $quinta[0]);
$quinta1Exploded = explode(":", $quinta[1]);
$sexta0Exploded = explode(":", $sexta[0]);
$sexta1Exploded = explode(":", $sexta[1]);
$sabado0Exploded = explode(":", $sabado[0]);
$sabado1Exploded = explode(":", $sabado[1]);

if($domingo0Exploded[0] >= $domingo1Exploded[0]){
    die('1');
}
if($segunda0Exploded[0] >= $segunda1Exploded[0]){
    die('2');
}
if($terca0Exploded[0] >= $terca1Exploded[0]){
    die('3');
}
if($quarta0Exploded[0] >= $quarta1Exploded[0]){
    die('4');
}
if($quinta0Exploded[0] >= $quinta1Exploded[0]){
    die('5');
}
if($sexta0Exploded[0] >= $sexta1Exploded[0]){
    die('6');
}
if($sabado0Exploded[0] >= $sabado1Exploded[0]){
    die('7');
}

$dadosHoras[0] = array('idTurma' => $idTurma, 'dia' => 'Domingo', 'de' => $domingo[0], 'ate' => $domingo[1]);
$dadosHoras[1] = array('idTurma' => $idTurma, 'dia' => 'Segunda-feira', 'de' => $segunda[0], 'ate' => $segunda[1]);
$dadosHoras[2] = array('idTurma' => $idTurma, 'dia' => 'Terça-feira', 'de' => $terca[0], 'ate' => $terca[1]);
$dadosHoras[3] = array('idTurma' => $idTurma, 'dia' => 'Quarta-feira', 'de' => $quarta[0], 'ate' => $quarta[1]);
$dadosHoras[4] = array('idTurma' => $idTurma, 'dia' => 'Quinta-feira', 'de' => $quinta[0], 'ate' => $quinta[1]);
$dadosHoras[5] = array('idTurma' => $idTurma, 'dia' => 'Sexta-feira', 'de' => $sexta[0], 'ate' => $sexta[1]);
$dadosHoras[6] = array('idTurma' => $idTurma, 'dia' => 'Sábado', 'de' => $sabado[0], 'ate' => $sabado[1]);

$turma = $idTurma;

$result = $conn->getHorarios($turma);

if($result){
    foreach ($dadosHoras as $key => $value) {
        $idTurma = $value['idTurma'];
        $dia = $value['dia'];
        $valDe = explode(":", $value['de']);
        $valAte = explode(":", $value['ate']);
        $concatValDe = $valDe[0].$valDe[1];
        $deVal = intval($concatValDe) / 100;
        $de = $deVal * 60;
        $concatValAte = $valAte[0].$valAte[1];
        $ateVal = intval($concatValAte / 100);
        $ate = $ateVal * 60;


        $resultado = $conn->AtualizarHoras($idTurma, $dia, $de, $ate);
    }

    die('0');

} else {
    foreach ($dadosHoras as $key => $value) {
        $idTurma = $value['idTurma'];
        $dia = $value['dia'];
        $valDe = explode(":", $value['de']);
        $valAte = explode(":", $value['ate']);
        $concatValDe = $valDe[0].$valDe[1];
        $deVal = intval($concatValDe) / 100;
        $de = $deVal * 60;
        $concatValAte = $valAte[0].$valAte[1];
        $ateVal = intval($concatValAte / 100);
        $ate = $ateVal * 60;

        $resultado = $conn->setHoras($idTurma, $dia, $de, $ate);
    }

    die('0');
}
