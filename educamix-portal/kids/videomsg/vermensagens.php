<?
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
    session_start();
    header('Access-Control-Allow-Origin: *');
    require_once('../areadospais/php/conexao.php');
    require_once('../areadospais/php/phphelper/regex.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Educamix Kids - Ver mensagens</title>
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
<section class="experiment">
    <div>
        <?
            $video;
            $res = $client->get(array(
                'index'=>'mixkids',
                'type'=>'mensagem',
                'id'=>$_GET['id']
            ));
            if(@$res['found'] == 1){
                $video = $res['_source']['videoId'];
                /*COISAS QUE FOREM ALTERADAS AQUI DEVEM SER ALTERADAS EM visualizarmsgm.ajax.php*/
                $client->update(array(
                    'index'=>'mixkids',
                    'type'=>'mensagem',
                    'id'=>$_GET['id'],
                    'body'=>array(
                        'doc'=>array(
                            'visualizado'=>'true'
                        ),
                        'doc_as_upsert' => true
                    )
                ));
                /**/
            }
        ?>
        <video id="preview" controls src="<?=$video?>"></video>
	<h2> Utilize o Google Chrome!</h2>
    </div>


    <div id="container" style="padding: 1em 2em;"></div>
</section>
<section id="buttons">
    <div style="position: relative;top:30px;">
        <a href="index.html?act=resp&idmess=<?=$res['_id']?>"><button id="record"></button></a>
    </div>
</section>
</body>
</html>
