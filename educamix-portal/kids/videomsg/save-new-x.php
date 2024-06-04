<?php

ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
    session_start();
    header('Access-Control-Allow-Origin: *');
    require_once('../areadospais/php/conexao.php');
    require_once('../areadospais/php/phphelper/regex.php');

    // Muaz Khan         - www.MuazKhan.com
    // MIT License       - www.WebRTC-Experiment.com/licence
    // Documentation     - github.com/muaz-khan/WebRTC-Experiment/tree/master/RecordRTC

    // make sure that you're using newest ffmpeg version!

    // because we've different ffmpeg commands for windows & linux
    // that's why following script is used to fetch target OS
    $OSList = array
    (
    'Windows 3.11' => 'Win16',
    'Windows 95' => '(Windows 95)|(Win95)|(Windows_95)',
    'Windows 98' => '(Windows 98)|(Win98)',
    'Windows 2000' => '(Windows NT 5.0)|(Windows 2000)',
    'Windows XP' => '(Windows NT 5.1)|(Windows XP)',
    'Windows Server 2003' => '(Windows NT 5.2)',
    'Windows Vista' => '(Windows NT 6.0)',
    'Windows 7' => '(Windows NT 7.0)',
    'Windows NT 4.0' => '(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)',
    'Windows ME' => 'Windows ME',
    'Open BSD' => 'OpenBSD',
    'Sun OS' => 'SunOS',
    'Linux' => '(Linux)|(X11)',
    'Mac OS' => '(Mac_PowerPC)|(Macintosh)',
    'QNX' => 'QNX',
    'BeOS' => 'BeOS',
    'OS/2' => 'OS/2',
    'Search Bot'=>'(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves/Teoma)|(ia_archiver)'
    );
    // Loop through the array of user agents and matching operating systems
    foreach($OSList as $CurrOS=>$Match)
    {
        // Find a match
        if (preg_match("/".$Match."/i", $_SERVER['HTTP_USER_AGENT']))
        {
            // We found the correct match
            break;
        }
    }

    // if it is audio-blob
    // if (isset($_FILES["audio-blob"])) {
    //     $uploadDirectory = 'uploads/'.$_POST["filename"].'.wav';
    //     if (!move_uploaded_file($_FILES["audio-blob"]["tmp_name"], $uploadDirectory)) {
    //         echo("Occoreu um erro!");
    //     }
    //     else {
	    echo 'oi'
            // if it is video-blob
            if (isset($_FILES["video-blob"])) {
                $uploadDirectory = 'uploads/'.$_POST["filename"].'.webm';
                if (!move_uploaded_file($_FILES["video-blob"]["tmp_name"], $uploadDirectory)) {
                    echo("Problem writing video file to disk!");
                }
                else {
                    $nome = time().''.rand(0,9);
                    // $audioFile = 'uploads/'.$_POST["filename"].'.wav';
                    $videoFile = 'uploads/'.$_POST["filename"].'.webm';

                    $mergedFile = 'uploads/'.$nome.'-merged.webm';
                    $thumb = 'uploads/'.$nome.'-merged.jpeg';

                    // ffmpeg depends on yasm
                    // libvpx depends on libvorbis
                    // libvorbis depends on libogg
                    // make sure that you're using newest ffmpeg version!

                    if(!strrpos($CurrOS, "Windows")) {
                        $cmd = ' -i '.$videoFile.' -map 0:0 -map 1:0 '.$mergedFile;
                    }else{
                        $cmd = ' -i '.$videoFile.' -c:v mpeg4 -c:a vorbis -b:v 64k -b:a 12k -strict experimental '.$mergedFile;
                    }
                    exec('ffmpeg '.$cmd.' 2>&1', $out, $ret);

                    $cmd = ' -i '.$videoFile.' -deinterlace -an -ss 1 -t 00:00:01 -r 1 -y -vcodec mjpeg -f mjpeg '.$thumb;
                    exec('ffmpeg '.$cmd.' 2>&1', $out2, $ret2);
                    if ($ret || $ret2){
                        print_r($out);
                        print_r($out2);
                        die("Erro ao salvar video!\n");
                        /*print_r($cmd.'\n');
                        print_r($out);*/
                    } else {

                        // unlink($audioFile);
                        unlink($videoFile);

                        if($_REQUEST['act'] == 'enviado'){

                            $put = array(
                                'index'=>'mixkids',
                                'type'=>'mensagem',
                                'body'=>array(
                                    'idFilho'=>$_REQUEST['filhoid'],
                                    'email'=>$_REQUEST['email'],
                                    'tipo'=>'enviado',
                                    'videoId'=> 'https://educamix.com.br/kids/videomsg/'.$mergedFile,
                                    'visualizado'=>false,
                                    'data' => time()
                                )
                            );
                            $res = $client->index($put);

                            /*
                            *
                            *
                            *
                            * Enviar email
                            *
                            *
                            *
                            * */
                            // Change this with your blog name and email address
                            $the_blogname   = 'Educamix Kids';
                            $the_myemail 	= @$_POST['email'];

                            if(isset($_POST['email'])){
                                //error_reporting(0);
                                $errorC = false;

                                $the_email 		= 'contato@educamix.com.br';
                                $the_message 	= 'https://educamix.com.br/kids/videomsg/vermensagens.php?id='.$res['_id'];

                                # want to add aditional fields? just add them to the form in template_contact.php,
                                # you dont have to edit this file

                                //added fields that are not set explicit like the once above are combined and added before the actual message
                                $already_used = array('email','message','myblogname','tempcode','temp_url','ajax');
                                $attach = '';

                                $attach.= "<br /> \n Voce Recebeu uma nova mensagens! \n<br /> \n";

                                if(!checkmymail($the_email)){
                                    $errorC = true;
                                    $the_emailclass = "error";
                                }else{
                                    $the_emailclass = "valid";
                                }

                                if($the_message == ""){
                                    $errorC = true;
                                    $the_messageclass = "error";
                                }else{
                                    $the_messageclass = "valid";
                                }

                                if($errorC == false){
                                    $to      =  $the_myemail;
                                    $subject = "Educamix Kids: Nova mensagem de " . $the_blogname;
                                    $header  = 'MIME-Version: 1.0' . "\r\n";
                                    $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                                    $header .= 'From:'. $the_email  . " \r\n";

                                    $message1 = nl2br($the_message);

                                    if(!empty($the_company)) 	$the_company 	= "Empresa: $the_company <br/>";

                                    $message = "
                                    Você possui uma nova mensagem! <br/>

                                    $attach <br />

                                    Mensagem: <a href='".$message1."'>$message1</a> <br />";



                                    if(@mail($to,$subject,$message,$header)) $send = true; else $send = false;

                                    /*if(isset($_POST['ajax'])){*/
                                    $res = '';
                                    if ($send)
                                        $res = 'Enviado!';
                                    else
                                        $res = 'Ocorreu um erro';

                                    die('{"res" : "'.$res.'", "video" : "'.$mergedFile.'"}');
                                    /*}*/
                                }

                            }






                        }else if($_REQUEST['act'] == 'resp'){

                            $res = $client->get(array(
                                'index'=>'mixkids',
                                'type'=>'mensagem',
                                'id'=>$_POST['id']
                            ));
                            if(@$res['found'] == 1){
                                $put = array(
                                    'index'=>'mixkids',
                                    'type'=>'mensagem',
                                    'body'=>array(
                                        'idFilho'=>$res['_source']['idFilho'],
                                        'email'=>$res['_source']['email'],
                                        'tipo'=>'resposta',
                                        'videoId'=> 'https://educamix.com.br/kids/videomsg/'.$mergedFile,
                                        'visualizado'=> 'false',
                                        'data' => time()
                                    )
                                );

                                $res = $client->index($put);

                                die('{"res" : "enviado", "video" : "'.$mergedFile.'"}');
                            }else{
                                die('{"res" : "erro"}');
                            }
                        }else{
                            die('{"res" : "erro"}');
                        }

                    }
                }
            }
    //     }
    // }


function checkmymail($mailadresse){
    $email_flag=preg_match("!^\w[\w|\.|\-]+@\w[\w|\.|\-]+\.[a-zA-Z]{2,4}$!",$mailadresse);
    return $email_flag;
}
