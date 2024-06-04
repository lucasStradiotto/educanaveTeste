<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
/*
 * verificar qual ação será executada e como
 *
 * ERROR:
 * 0 = Tudo ok
 * 1 = ação inválida
 * 2 = criança não encontrada
 */
header('Access-Control-Allow-Origin: *');
session_start();
require_once('conexao.php');
$conn = new conecta();


// if (isset($_POST['turma'])) {
//     $idTurma = $_POST['turma'];
// } else if (isset($_SESSION['turma'])) {
//     $idTurma = $_SESSION['turma'];
// } else {
//     die('{"error":102}');
// }

$idTurma = $_POST['idTurma'];

$result = $conn->searchTurmass($idTurma);
var_dump($result);
$array = [];

$array['error'] = 0;
$array['result'] = $result;

die(json_encode($array));

// $res = $client->get(array(
//     'index'=>'mixkids',
//     'type'=>'filho',
//     'id'=>$idFilho
// ));


//TODO: procurar videomensagens que não foram visualizadas
//TODO: Enviar como parametro o numero de mensagens não visualizadas
// $videoMessage = 0;
// $search['index'] = 'mixkids';
// $search['type'] = 'mensagem';
// $search['body']['size'] = 25;
// $search['body']['sort'] = array(
//     0=>array('data' => 'desc'),
//     1=>'_score'
// );
// $search['body']['query']['filtered']['filter']['and'] = array(
//     0=> array(
//         'query'=>array('match'=>array(
//             'idFilho'=>array(
//                 'query'=> $idFilho,
//                 'type' => 'phrase'
//             )
//         ))
//     ),
//     1=>array(
//         'term'=>array('tipo'=>'resposta')
//     ),
//     2=>array(
//         'term'=>array('visualizado'=>'false')
//     )
// );
// $msg = $client->search($search);
// if(isset($msg['hits']['total'])){
//     $videoMessage = $msg['hits']['total'];
// }

// if(@$res['found'] == 1){
    //TODO: CASO TENHA ALGO QUE SEJA COLOCADO NO BOTÃO ' + ' DO APP,
    //TODO: COLOQUE A VERIFICAÇÃO E DECLARAÇÃO AQUI (COMO SERÁ FEITO ABAIXO)COM O LINK PARA O SERVIDOR
    //TODO: EXEMPLO: $linkmais = 'https://www.educamix.com.br/kids/php/eventos/felizAniversario.php?id=ID_DA_CRIANÇA'
    // $linkmais = '';
    // $icon = ''; //TODO: EXEMPLO fa-plus (font-awesome 4.1)


//     $result = json_encode($res['_source']);

//     // $_SESSION['child'] = $idFilho;
//     die('{"error":0, "videomensagem":"'.$videoMessage.'", "mais":{"link":"'.$linkmais.'", "icon":"'.$icon.'"}, "result":'.$result.'}');
// }else{
//     die('{"error":2}');
// }