<?
session_start();
header('Access-Control-Allow-Origin: *');
require_once('../areadospais/php/conexao.php');
require_once('../areadospais/php/phphelper/regex.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>RecordRTC / PHP / FFmpeg</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="author" type="text/html" href="https://plus.google.com/+MuazKhan">
    <meta name="author" content="Muaz Khan">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <link href="css/index.css" rel="stylesheet" type="text/css">
    <!-- script used for audio/video/gif recording -->
    <script src="https://www.webrtc-experiment.com/RecordRTC.js"></script>
</head>

<body>
<section class="inbox">
    <ul class="list-mensagem">
        <li><h3>Mensagens</h3></li>
        <?
        $idFilho = $_GET['id'];
        if(empty($idFilho) || $idFilho == ''){
            $idFilho = $_SESSION['child'];
        }
        $search['index'] = 'mixkids';
        $search['type'] = 'mensagem';
        $search['body']['size'] = 25;
        $search['body']['sort'] = array(
            0=>array('data' => 'desc'),
            1=>'_score'
        );
        $search['body']['query']['filtered']['filter']['and'] = array(
            0=> array(
                'query'=>array('match'=>array(
                    'idFilho'=>array(
                        'query'=> $idFilho,
                        'type' => 'phrase'
                    )
                ))
            ),
            1=>array(
                'term'=>array('tipo'=>'resposta')
            )
        );
        $res = $client->search($search);
        $vd = '';
        if($res['hits']['total'] > 0){
            $count = 0;
            $result = '';
            foreach($res['hits']['hits'] as $mensagem){
                $msg = $mensagem['_source'];

                $class = '';
                if($msg['visualizado'] != 'false'){
                    $class = 'visualizado';
                }

                if($vd == ''){
                    $vd = $msg['videoId'];
		    $vd = str_replace("https", "http", $msg['videoId']);
                    $class = $class.' visualizando';
                }
		$tmpvid = str_replace("https", "http", $msg['videoId']);
                echo '<li class="item '.$class.'">
                        <a href="#" data-video="'.$tmpvid.'" data-id="'.$mensagem['_id'].'">'.$msg["email"].'</a>
                     </li>';
            }
        }else{
            echo '<li class="item">
                    <a href="#">Vazio!</a>
                 </li>';
        }
        ?>
    </ul>


    <div id="container" style="padding: 1em 2em;"></div>
</section>
<section class="experiment exp2">
    <div>
        <video id="preview" controls src="<?=$vd?>"></video>
    </div>
</section>


<script src="js/jquery-1.7.2.min.js"></script>
<script>
    $(document).ready(function(){
        $('.item a').on('click', function(){
            if(!$(this).parent().hasClass('visualizando')){
                $('.visualizando').removeClass('visualizando');
                $(this).parent().addClass('visualizando');
                $(this).parent().addClass('visualizado');
                $('#preview').attr('src', this.dataset.video);
                $('#preview')[0].play();
                var id =  this.dataset.id;
                $.ajax(
                    'visualizarmsgm.ajax.php',
                    {
                        type : "POST",
                        data : {
                            id : id
                        }
                    }
                );
            }
        });
    });
</script>
</body>
</html>
