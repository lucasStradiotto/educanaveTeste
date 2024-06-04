<?
/*ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
/*
 * verificar qual ação será executada e como
 *
 * ERROR:
 * 0 = Tudo ok
 * 1 = ação inválida
 * 102 = sem criança
 * add :
 * 2 = Link do youtube inválido
 * 3 = Lista não encontrada
 * 4 = Erro ao cadastrar no banco
 * remove:
 * 11 = Lista não encontrada
 * 12 = Erro ao cadastrar no banco
 * addList:
 * 21 = Nome inválido
 * removeList:
 *
 * Atualizarlista:
 * 41 = check inválido
 * 42 = Lista não encontrada
 * 43 = Não foi possivel atualizar
 *
 * GET:
 * 51 = Não tem nada para pegar
 */
session_start();
header('Access-Control-Allow-Origin: *');
require_once('conexao.php');
require_once('phphelper/regex.php');

$act = $_GET['act'];
if(isset($_SESSION['child'])){
    $idFilho = $_SESSION['child'];
}else if(isset($_GET['child'])){
    $idFilho = $_GET['child'];
}else{
    die('{"error":102}');
}

/*
 * ========PEGAR========
 */
if($act == 'get'){
    print_r($idFilho);
    $search = array(
        'index'=>'mixkids',
        'type'=>'video',
        'body'=>array('query'=>array(
	    'match'=>array(
               'idFilho'=>array(
                  'query'=> $idFilho,
                  'type' => 'phrase'
               )
        )))
    );
     print_r("oioioioixxxx");
    $res = $client->search($search);
 print_r("oioioioiyyyy");
    print_r($res);

    if($res['hits']['total'] > 0){
        $count = 0;
        $result = '';
        foreach($res['hits']['hits'] as $videos){
            $video = $videos['_source'];
            if($video['ativo']){
                if($count > 0){
                    $result = $result.', ';
                }
                $result = $result.'{"nome":"'.$video['nome'].'", "lista":[';
                $c = 0;
                foreach($video['lista'] as $vd){
                    if($c>0){
                        $result = $result.', ';
                    }
                    $result = $result.'{"id":"'.$videos['_id'].'", "link":"'.$vd['link'].'", "nome":"'.@$vd['nome'].'"}';
                    $c++;
                }
                $result = $result.']}';
                $count++;
            }
        }
        sleep(2);
        die('{"error":0, "result":['.$result.']}');
    }else{
        die('{"error":51}');
    }
}
/*
 * ========ADICIONAR========
 */
else if($act == 'add'){
    $lista = $_POST['lista'];
    $video = $_POST['video'];
    if(isset($_POST['nome'])){
        $nome = $_POST['nome'];
    }

    if(!preg_match($regex['youtube'], $video)){
        die('{"error":2}');
    }
    $search = $client->get(array(
        'index'=>'mixkids',
        'type'=> 'video',
        'id'=>$lista
    ));
    if(@$search['found'] != 1){
        die('{"error":3}');
    }
    $atualizar['index'] = 'mixkids';
    $atualizar['type'] = 'video';
    $atualizar['id'] = $lista;
    $count = 0;
    foreach($search['_source']['lista'] as $vd){
        $atualizar['body']['doc']['lista'][$count]['link'] = $vd['link'];
        if(isset($atualizar['body']['doc']['lista'][$count]['nome'])){
            $atualizar['body']['doc']['lista'][$count]['nome'] = $vd['nome'];
        }
        $count++;
    }
    $atualizar['body']['doc']['lista'][$count]['link'] = $video;
    if($nome){
        $atualizar['body']['doc']['lista'][$count]['nome'] = $nome;
    }
    $results = $client->update($atualizar);


    if($results['_version'] > 0 ){
        $link = $video;
        $lk = explode('?v=', $link);//TODO: Como dito em algum 'todo' acima, há no stackoverflow um metodo melhor para fazer isso

        sleep(2);
        die('{"error":0,"video":"'.$lk[1].'", "link":"'.$video.'"}');
    }else{
        die('{"error":4}');
    }
}
/*
 * ========REMOVER========
 */
else if($act == 'remove'){
    if(isset($_POST['id']) && isset($_POST['video'])){
        $lista = $_POST['id'];
        $video = $_POST['video'];

        $search = $client->get(array(
            'index'=>'mixkids',
            'type'=> 'video',
            'id'=>$lista
        ));
        if(@$search['found'] != 1){
            die('{"error":11}');
        }
        $atualizar['index'] = 'mixkids';
        $atualizar['type'] = 'video';
        $atualizar['id'] = $lista;
        $count = 0;

        foreach($search['_source']['lista'] as $vd){
            if(strpos($vd['link'], $video) === false){
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
}
/*
 * ========ADICIONAR LISTA========
 */
else if($act == 'addList'){
    $nome = $_POST['nome'];

    if($nome == ''){
        die('{"error":21}');
    }
    $query = array(
        'index'=>'mixkids',
        'type'=>'video',
        'body'=>array(
            'idFilho'=>$idFilho,
            'nome'=>$nome,
            'ativo'=>true,
            'lista'=>array()
        )
    );
    $result = $client->index($query);
    
    if($result['created'] == 1){
        sleep(2);
        die('{"error":0}');
    }else{
        //ERRO 6 Erro ao inserir no banco
        die('{"error":7}');
    }
}
/*
 * ========REMOVER LISTA========
 */
else if($act == 'removeList'){
    $lista = $_POST['lista'];

    $query = array(
        'index' => 'mixkids',
        'type' => 'video',
        'id' => $lista
    );
    $result = $client->delete($query);
    if($result['found'] == 1){
        sleep(2);
        die('{"error":0}');
    }else{
        //ERRO 6 Erro ao inserir no banco
        die('{"error":7}');
    }
}
/*
 * ========Atualizar LISTA========
 */
else if($act == 'atualizarList'){
    $lista = $_POST['lista'];
    $check = $_POST['check'];

    if($check == 'false'){
        $check = false;
    }else if($check == 'true'){
        $check = true;
    }else{
        die('{"error":41}');
    }
    $search = $client->get(array(
        'index'=>'mixkids',
        'type'=> 'video',
        'id'=>$lista
    ));
    if(@$search['found'] != 1){
        die('{"error":42}');
    }
    $atualizar = array(
        'index'=>'mixkids',
        'type'=>'video',
        'id'=>$lista,
        'body'=>array('doc'=>array('ativo'=>$check))
    );
    $results = $client->update($atualizar);

    if($results['_version'] > 0 ){
        sleep(2);
        die('{"error":0}');
    }else{
        die('{"error":43}');
    }
}
/*
 * ========Erro========
 */
else{
    die('{"error":1}');
}
