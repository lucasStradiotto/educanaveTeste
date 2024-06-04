<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
session_start();
header('Access-Control-Allow-Origin: *');
require_once('conexao.php');
require_once('phphelper/regex.php');

$conn = new conecta();

$act = $_GET['act'];

if ($act == 'getNotification') {

    $idProf = $_POST['idProf'];

    if ($idProf == "admin") {
        $idTurma = 1;
        $arrayAdmin = [];
        $jogoAdmin1 = $conn->getNewJogos1($idTurma);
        $arrayAdmin['Jogo1'] = $jogoAdmin1;
        $jogoAdmin2 = $conn->getNewJogos2($idTurma);
        $arrayAdmin['Jogo2'] = $jogoAdmin2;
        $jogoAdmin3 = $conn->getNewJogos3($idTurma);
        $arrayAdmin['Jogo3'] = $jogoAdmin3;
        $jogoAdmin4 = $conn->getNewJogos4($idTurma);
        $arrayAdmin['Jogo4'] = $jogoAdmin4;
        $jogoAdmin5 = $conn->getNewJogos5($idTurma);
        $arrayAdmin['Jogo5'] = $jogoAdmin5;
        $jogoAdmin6 = $conn->getNewJogos6($idTurma);
        $arrayAdmin['Jogo6'] = $jogoAdmin6;
        $jogoAdmin7 = $conn->getNewJogos7($idTurma);
        $arrayAdmin['Jogo7'] = $jogoAdmin7;
        $jogoAdmin8 = $conn->getNewJogos8($idTurma);
        $arrayAdmin['Jogo8'] = $jogoAdmin8;
        $jogoAdmin9 = $conn->getNewJogos9($idTurma);
        $arrayAdmin['Jogo9'] = $jogoAdmin9;
        $ebookAdmin1 = $conn->getNewEbooks1($idTurma);
        $arrayAdmin['Ebook1'] = $ebookAdmin1;
        $ebookAdmin2 = $conn->getNewEbooks2($idTurma);
        $arrayAdmin['Ebook2'] = $ebookAdmin2;
        $ebookAdmin3 = $conn->getNewEbooks3($idTurma);
        $arrayAdmin['Ebook3'] = $ebookAdmin3;
        $ebookAdmin4 = $conn->getNewEbooks4($idTurma);
        $arrayAdmin['Ebook4'] = $ebookAdmin4;
        $ebookAdmin5 = $conn->getNewEbooks5($idTurma);
        $arrayAdmin['Ebook5'] = $ebookAdmin5;
        $ebookAdmin6 = $conn->getNewEbooks6($idTurma);
        $arrayAdmin['Ebook6'] = $ebookAdmin6;
        $ebookAdmin7 = $conn->getNewEbooks7($idTurma);
        $arrayAdmin['Ebook7'] = $ebookAdmin7;
        $ebookAdmin8 = $conn->getNewEbooks8($idTurma);
        $arrayAdmin['Ebook8'] = $ebookAdmin8;
        $ebookAdmin9 = $conn->getNewEbooks9($idTurma);
        $arrayAdmin['Ebook9'] = $ebookAdmin9;
        $hibridoAdmin1 = $conn->getNewHibridoRfid1($idTurma);
        $arrayAdmin['Hibrido1'] = $hibridoAdmin1;
        $hibridoAdmin2 = $conn->getNewHibridoRfid2($idTurma);
        $arrayAdmin['Hibrido2'] = $hibridoAdmin2;
        $hibridoAdmin3 = $conn->getNewHibridoRfid3($idTurma);
        $arrayAdmin['Hibrido3'] = $hibridoAdmin3;
        $hibridoAdmin4 = $conn->getNewHibridoRfid4($idTurma);
        $arrayAdmin['Hibrido4'] = $hibridoAdmin4;
        $hibridoAdmin5 = $conn->getNewHibridoRfid5($idTurma);
        $arrayAdmin['Hibrido5'] = $hibridoAdmin5;
        $hibridoAdmin6 = $conn->getNewHibridoRfid6($idTurma);
        $arrayAdmin['Hibrido6'] = $hibridoAdmin6;
        $hibridoAdmin7 = $conn->getNewHibridoRfid7($idTurma);
        $arrayAdmin['Hibrido7'] = $hibridoAdmin7;
        $hibridoAdmin8 = $conn->getNewHibridoRfid8($idTurma);
        $arrayAdmin['Hibrido8'] = $hibridoAdmin8;
        $hibridoAdmin9 = $conn->getNewHibridoRfid9($idTurma);
        $arrayAdmin['Hibrido9'] = $hibridoAdmin9;
        $musicasAdmin = $conn->getNewMusicas($idTurma);
        $arrayAdmin['Musicas'] = $musicasAdmin;
        $videosAdmin = $conn->getNewVideos($idTurma);
        $arrayAdmin['Videos'] = $videosAdmin;
        $sitesAdmin = $conn->getNewSites($idTurma);
        $arrayAdmin['Sites'] = $sitesAdmin;
        die(json_encode($arrayAdmin));
    } else {

        $array = [];

        $getTurma = $conn->searchTurmaProfessor($idProf);

        foreach ($getTurma as $key => $value) {
            $jogo1 = $conn->getNewJogos1($value['id']);

            $array['Jogo1'] = $jogo1;

            $jogo2 = $conn->getNewJogos2($value['id']);

            $array['Jogo2'] = $jogo2;

            $jogo3 = $conn->getNewJogos3($value['id']);

            $array['Jogo3'] = $jogo3;

            $jogo4 = $conn->getNewJogos4($value['id']);

            $array['Jogo4'] = $jogo4;

            $jogo5 = $conn->getNewJogos5($value['id']);

            $array['Jogo5'] = $jogo5;

            $jogo6 = $conn->getNewJogos6($value['id']);

            $array['Jogo6'] = $jogo6;

            $jogo7 = $conn->getNewJogos7($value['id']);

            $array['Jogo7'] = $jogo7;

            $jogo8 = $conn->getNewJogos8($value['id']);

            $array['Jogo8'] = $jogo8;

            $jogo9 = $conn->getNewJogos9($value['id']);

            $array['Jogo9'] = $jogo9;

            $ebook1 = $conn->getNewEbooks1($value['id']);

            $array['Ebook1'] = $ebook1;

            $ebook2 = $conn->getNewEbooks2($value['id']);

            $array['Ebook2'] = $ebook2;

            $ebook3 = $conn->getNewEbooks3($value['id']);

            $array['Ebook3'] = $ebook3;

            $ebook4 = $conn->getNewEbooks4($value['id']);

            $array['Ebook4'] = $ebook4;

            $ebook5 = $conn->getNewEbooks5($value['id']);

            $array['Ebook5'] = $ebook5;

            $ebook6 = $conn->getNewEbooks6($value['id']);

            $array['Ebook6'] = $ebook6;

            $ebook7 = $conn->getNewEbooks7($value['id']);

            $array['Ebook7'] = $ebook7;

            $ebook8 = $conn->getNewEbooks8($value['id']);

            $array['Ebook8'] = $ebook8;

            $ebook9 = $conn->getNewEbooks9($value['id']);

            $array['Ebook9'] = $ebook9;

            $hibrido1 = $conn->getNewHibridoRfid1($value['id']);

            $array['Hibrido1'] = $hibrido1;

            $hibrido2 = $conn->getNewHibridoRfid2($value['id']);

            $array['Hibrido2'] = $hibrido2;

            $hibrido3 = $conn->getNewHibridoRfid3($value['id']);

            $array['Hibrido3'] = $hibrido3;

            $hibrido4 = $conn->getNewHibridoRfid4($value['id']);

            $array['Hibrido4'] = $hibrido4;

            $hibrido5 = $conn->getNewHibridoRfid5($value['id']);

            $array['Hibrido5'] = $hibrido5;

            $hibrido6 = $conn->getNewHibridoRfid6($value['id']);

            $array['Hibrido6'] = $hibrido6;

            $hibrido7 = $conn->getNewHibridoRfid7($value['id']);

            $array['Hibrido7'] = $hibrido7;

            $hibrido8 = $conn->getNewHibridoRfid8($value['id']);

            $array['Hibrido8'] = $hibrido8;

            $hibrido9 = $conn->getNewHibridoRfid9($value['id']);

            $array['Hibrido9'] = $hibrido9;

            $musicas = $conn->getNewMusicas($value['id']);

            $array['Musicas'] = $musicas;

            $videos = $conn->getNewVideos($value['id']);

            $array['Videos'] = $videos;

            $sites = $conn->getNewSites($value['id']);

            $array['Sites'] = $sites;
        }

        die(json_encode($array));
    }
} else if ($act == 'notifyJogo1') {

    $idProf = $_POST['idProf'];

    $getTurma = $conn->searchTurmaProfessor($idProf);
    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    foreach ($getTurma as $key => $value) {
        $result = $conn->updateNewJogo1($value['id'], $nomeJogo, $new);
    }


    die("0");
} else if ($act == 'notifyJogo2') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo2($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo3') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo3($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo4') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo4($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo5') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo5($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo6') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo6($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo7') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo7($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo8') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo8($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyJogo9') {

    $nomeJogo = $_POST['nomeJogo'];
    $new = 0;

    $result = $conn->updateNewJogo9($nomeJogo, $new);

    die("0");
} else if ($act == 'notifyEbook1') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook1($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook2') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook2($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook3') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook3($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook4') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook4($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook5') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook5($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook6') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook6($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook7') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook7($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook8') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook8($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyEbook9') {

    $nomeEbook = $_POST['nomeEbook'];
    $new = 0;

    $result = $conn->updateNewEbook9($nomeEbook, $new);

    die("0");
} else if ($act == 'notifyHibrido1') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido1($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido2') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido2($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido3') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido3($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido4') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido4($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido5') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido5($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido6') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido6($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido7') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido7($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido8') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido8($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyHibrido9') {

    $nomeHibrido = $_POST['nomeHibrido'];
    $new = 0;

    $result = $conn->updateNewHibrido9($nomeHibrido, $new);

    die("0");
} else if ($act == 'notifyMusic') {

    $nomeMusic = $_POST['nomeMusic'];
    $new = 0;

    $result = $conn->updateNewMusic($nomeMusic, $new);

    die("0");
} else if ($act == 'notifyVideo') {

    $nomeVideo = $_POST['nomeVideo'];
    $new = 0;

    $result = $conn->updateNewVideo($nomeVideo, $new);

    die("0");
} else if ($act == 'notifySite') {

    $nomeSite = $_POST['nomeSite'];
    $new = 0;

    $result = $conn->updateNewSite($nomeSite, $new);

    die("0");
} else if ($act == 'getNotifyJogos') {

    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultJogo1 = $conn->setNotifyJogo1($idTurma);
        $resultJogo2 = $conn->setNotifyJogo2($idTurma);
        $resultJogo3 = $conn->setNotifyJogo3($idTurma);
        $resultJogo4 = $conn->setNotifyJogo4($idTurma);
        $resultJogo5 = $conn->setNotifyJogo5($idTurma);
        $resultJogo6 = $conn->setNotifyJogo6($idTurma);
        $resultJogo7 = $conn->setNotifyJogo7($idTurma);
        $resultJogo8 = $conn->setNotifyJogo8($idTurma);
        $resultJogo9 = $conn->setNotifyJogo9($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultJogo1 = $conn->setNotifyJogo1($value['id']);
            $resultJogo2 = $conn->setNotifyJogo2($value['id']);
            $resultJogo3 = $conn->setNotifyJogo3($value['id']);
            $resultJogo4 = $conn->setNotifyJogo4($value['id']);
            $resultJogo5 = $conn->setNotifyJogo5($value['id']);
            $resultJogo6 = $conn->setNotifyJogo6($value['id']);
            $resultJogo7 = $conn->setNotifyJogo7($value['id']);
            $resultJogo8 = $conn->setNotifyJogo8($value['id']);
            $resultJogo9 = $conn->setNotifyJogo9($value['id']);
        }
    
        die("0");
    }

} else if ($act == 'getNotifyEbooks') {

    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultEbook1 = $conn->setNotifyEbook1($idTurma);
        $resultEbook2 = $conn->setNotifyEbook2($idTurma);
        $resultEbook3 = $conn->setNotifyEbook3($idTurma);
        $resultEbook4 = $conn->setNotifyEbook4($idTurma);
        $resultEbook5 = $conn->setNotifyEbook5($idTurma);
        $resultEbook6 = $conn->setNotifyEbook6($idTurma);
        $resultEbook7 = $conn->setNotifyEbook7($idTurma);
        $resultEbook8 = $conn->setNotifyEbook8($idTurma);
        $resultEbook9 = $conn->setNotifyEbook9($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultEbook1 = $conn->setNotifyEbook1($value['id']);
            $resultEbook2 = $conn->setNotifyEbook2($value['id']);
            $resultEbook3 = $conn->setNotifyEbook3($value['id']);
            $resultEbook4 = $conn->setNotifyEbook4($value['id']);
            $resultEbook5 = $conn->setNotifyEbook5($value['id']);
            $resultEbook6 = $conn->setNotifyEbook6($value['id']);
            $resultEbook7 = $conn->setNotifyEbook7($value['id']);
            $resultEbook8 = $conn->setNotifyEbook8($value['id']);
            $resultEbook9 = $conn->setNotifyEbook9($value['id']);
        }
    
        die("0");
    }

} else if($act == 'getNotifyHibrido'){
    
    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultHibrido1 = $conn->setNotifyHibrido1($idTurma);
        $resultHibrido2 = $conn->setNotifyHibrido2($idTurma);
        $resultHibrido3 = $conn->setNotifyHibrido3($idTurma);
        $resultHibrido4 = $conn->setNotifyHibrido4($idTurma);
        $resultHibrido5 = $conn->setNotifyHibrido5($idTurma);
        $resultHibrido6 = $conn->setNotifyHibrido6($idTurma);
        $resultHibrido7 = $conn->setNotifyHibrido7($idTurma);
        $resultHibrido8 = $conn->setNotifyHibrido8($idTurma);
        $resultHibrido9 = $conn->setNotifyHibrido9($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultHibrido1 = $conn->setNotifyHibrido1($value['id']);
            $resultHibrido2 = $conn->setNotifyHibrido2($value['id']);
            $resultHibrido3 = $conn->setNotifyHibrido3($value['id']);
            $resultHibrido4 = $conn->setNotifyHibrido4($value['id']);
            $resultHibrido5 = $conn->setNotifyHibrido5($value['id']);
            $resultHibrido6 = $conn->setNotifyHibrido6($value['id']);
            $resultHibrido7 = $conn->setNotifyHibrido7($value['id']);
            $resultHibrido8 = $conn->setNotifyHibrido8($value['id']);
            $resultHibrido9 = $conn->setNotifyHibrido9($value['id']);
        }
    
        die("0");
    }

} else if($act == 'getNotifyMusic'){
    
    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultMusic = $conn->setNotifyMusic($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultMusic = $conn->setNotifyMusic($value['id']);
        }
    
        die("0");
    }

} else if($act == 'getNotifyVideo'){
    
    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultMusic = $conn->setNotifyVideo($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultMusic = $conn->setNotifyVideo($value['id']);
        }
    
        die("0");
    }

} else if($act == 'getNotifySite'){
    
    $idProf = $_POST['idProf'];

    if($idProf == 'admin'){
        $idTurma = 1;
        $resultMusic = $conn->setNotifySite($idTurma);

        die("0");
    } else {
        $getTurma = $conn->searchTurmaProfessor($idProf);
    
        foreach ($getTurma as $key => $value) {
            $resultMusic = $conn->setNotifySite($value['id']);
        }
    
        die("0");
    }

} else {
    die("9");
}
