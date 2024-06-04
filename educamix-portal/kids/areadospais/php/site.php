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
if($act == 'get'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchSites($idTurma);

    $array = [];

    $array['error'] = 0;
    $array['result'] = $result;

    die(json_encode($array));
} else if($act == 'add'){
    $lista = $_POST['lista'];
    $site = $_POST['site'];
    $nome = ''.@$_POST['nome'];

    if(!filter_var($site, FILTER_VALIDATE_URL)){
        die('{"error":2}');
    }
    $search = $client->get(array(
        'index'=>'mixkids',
        'type'=> 'site',
        'id'=>$lista
    ));
    if(@$search['found'] != 1){
        die('{"error":3}');
    }
    $atualizar['index'] = 'mixkids';
    $atualizar['type'] = 'site';
    $atualizar['id'] = $lista;
    $count = 0;
    foreach($search['_source']['lista'] as $st){
        $atualizar['body']['doc']['lista'][$count]['nome'] = $st['nome'];
        $atualizar['body']['doc']['lista'][$count]['link'] = $st['link'];
        $count++;
    }
    $atualizar['body']['doc']['lista'][$count]['nome'] = $nome;
    $atualizar['body']['doc']['lista'][$count]['link'] = $site;
    $results = $client->update($atualizar);

    if(@$results['_version'] > 0 ){
        sleep(2);
        die('{"error":0, "link":"'.$site.'"}');
    }else{
        die('{"error":4}');
    }
} else if($act == 'removeSites'){
    if(isset($_POST['id']) && isset($_POST['site'])){
        $lista = $_POST['id'];
        $site = $_POST['site'];

        $search = $client->get(array(
            'index'=>'mixkids',
            'type'=> 'site',
            'id'=>$lista
        ));
        if(@$search['found'] != 1){
            die('{"error":11}');
        }
        $atualizar['index'] = 'mixkids';
        $atualizar['type'] = 'site';
        $atualizar['id'] = $lista;
        $count = 0;

        foreach($search['_source']['lista'] as $vd){
            if(strpos($vd['link'], $site) === false){
                $atualizar['body']['doc']['lista'][$count]['nome'] = $vd['nome'];
                $atualizar['body']['doc']['lista'][$count]['link'] = $vd['link'];
                $count++;
            }
        }
        $results = $client->update($atualizar);
        if($results['_version'] > 0 ){
            sleep(2);
            die('{"error":0}');
        }else{
            die('{"error":12}');
        }
    }else{
        die('{"error":13}');
    }
} else if($act == 'addList'){

    $searchTurmas = $conn->searchTurma();
    foreach ($searchTurmas as $key => $value) {
        $idTurma = $value['id'];
        $nome = $_POST['nome'];
        $url = $_POST['url'];
        $ativo = 'false';

        $new = 1;

        $result = $conn->cadastrarSites($nome, $url, $ativo, $idTurma, $new);
    }
    
    die('0');
} else if($act == 'remove'){
    if(isset($_POST['idRemoveSite'])){
        $idSite = $_POST['idRemoveSite'];

        $resultado = $conn->getSiteNome($idSite);

        $nome = $resultado[0]['nome'];
        
        $result = $conn->deletarSite($nome);
        
        die('0');
    } else {
        die('1');
    }
} else if($act == 'atualizarList'){
    $idSite = $_POST['lista'];
    $ativo = $_POST['check'];

    if($ativo == 'false'){
        $ativo = 'false';
    }else if($ativo == 'true'){
        $ativo = 'true';
    }else{
        die('{"error":41}');
    }

    $new = 1;

    $results = $conn->atualizarSites($idSite, $ativo, $new);

    if($results > 0 ){
        sleep(2);
        die('{"error":0}');
    }else{
        die('{"error":43}');
    }
} else if($act == 'getSites'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->searchSites($idTurma);

    die(json_encode($result));
} else if($act == 'getNewSite'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewSite($idTurma);

    die(json_encode($result));
} else if($act == 'getNewSites'){

    $idTurma = $_POST['idTurma'];

    $result = $conn->getNewSites($idTurma);

    die(json_encode($result));
} else if($act == 'permissionSite'){

    $idSite = $_POST['siteId'];
    $ativo = $_POST['checkSite'];

    $result = $conn->PermissionSite($idSite, $ativo);

    die('0');

} else if($act == 'pesquisa'){

    $search = $_POST['pesquisa'];
    $turma = $_POST['idTurma'];

    $result = $conn->getpesquisaSite($search, $turma);

    if($result == ''){
        $result = '';
        die(json_encode($result));
    } else {
        die(json_encode($result));
    }
    
} else{
    die('{"error":1}');
}
