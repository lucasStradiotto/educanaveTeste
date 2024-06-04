<?php
/*ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);*/
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Histórico - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">

    <link href="css/style.css" rel="stylesheet">

    <link href="css/pages/reports.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <a class="brand" href="../index.html">
                    Educa NAVE
                </a>
                <div class="nav-collapse">
                    <ul class="nav pull-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span id="notification" class="notif notif-red hidden">0</span>
                                <i class="icon-envelope-alt"></i>
                                Notificações
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Notificações</a></li>
                                <li><a href="#" target="_blank">Notificações</a></li>
                                <li><a href="#">Notificações</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="icon-cog"></i>
                                Conta
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="config.php">Configurações</a></li>
                                <li><a href="../manual.html" target="_blank">Manual</a></li>
                                <li><a href="php/logout.php">Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div> <!-- /container -->
        </div> <!-- /navbar-inner -->
    </div> <!-- /navbar -->
    <div class="subnavbar">
        <div class="subnavbar-inner">
            <div class="container">
                <ul class="mainnav">
                    <li><a href="inicio.php"><i class="icon-star"></i><span>Inicio</span></a></li>
                    <li><a href="conteudo.php"><i class="icon-play-circle"></i><span>Atividades</span></a></li>
                    <li><a href="horas.php"><i class="icon-time"></i><span>Horas de uso</span></a></li>
                    <!-- <li><a href="mundo.php"><i class="icon-picture"></i><span>Mundo Virtual</span></a></li> -->
                    <!-- <li><a href="mensagens.php"><i class="icon-envelope-alt"></i><span>Mensagens</span></a></li> -->
                    <li class="active"><a href="historico.php"><i class="icon-calendar"></i><span>Histórico recente</span></a></li>
                    <!-- <li><a href="oem.php"><i class="icon-key"></i><span>Código OEM</span></a></li> -->
                    <li><a href="config.php"><i class="icon-cog"></i><span>Usuários</span></a></li>
                </ul>
            </div>
            <!-- /container -->
        </div>
        <!-- /subnavbar-inner -->
    </div>
    <!-- /subnavbar -->


    <div class="main">
        <div class="main-inner">
            <div class="container">
                <?php
                if ($_SESSION['perfil'] == 'professor') {
                ?>
                    <h1 class="right">Professor: <?= $_SESSION['nomeProfessor'] ?> - <?= $_SESSION['codProfessor'] ?></h1>
                <?php
                }
                ?>
                <div id="target-0">
                    <div class="widget">
                        <div class="widget-content">
                            <h1>Turmas</h1>
                            <br />
                            <p>
                                <?php
                                $idProfessor = $_SESSION['idUsuario'];
                                ?>
                                <input type="text" class="hidden" id="idProfSessao" value="<?= $idProfessor ?>">
                            <div id="alunosTurma">

                            </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div id="target-0">
                    <div class="widget">
                        <div class="widget-content">
                            <h1>Alunos</h1>
                            <p>
                                Escolha qual aluno(a) você deseja ver informações.
                            </p>
                            <p id="alunoRow">

                            </p>
                        </div> <!-- /widget-content -->
                    </div> <!-- /widget -->
                </div> <!-- /span6 -->


                <?php
                // $historico = $_SESSION['child'];

                // MUNDO

                // $mundo = $conn->historicoMundo($historico);

                // JOGOS

                // $resultJogos = $conn->searchJogos1();
                // $jogos = count($resultJogos);

                //VIDEOS

                $resultVideo = $conn->searchVideo();
                $video = count($resultVideo);

                //musicas

                // $ResultMusica = $conn->searchMusicas();
                // $musica = count($ResultMusica);

                //sites

                // $resultSites = $conn->searchSites();
                // $sites = count($resultSites);


                ?>

                <div class="widget">

                    <div class="info-box" id="graficos">
                        <div class="row-fluid stats-box">
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 1<i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow1"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 1<i class="icon-book" style="color: orange"></i><div id="ebookRow1"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 1<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow1"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 2<i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow2"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 2<i class="icon-book" style="color: orange"></i><div id="ebookRow2"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 2<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow2"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 3 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow3"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 3<i class="icon-book" style="color: orange"></i><div id="ebookRow3"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 3<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow3"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 4 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow4"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 4<i class="icon-book" style="color: orange"></i><div id="ebookRow4"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 4<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow4"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 5 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow5"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 5<i class="icon-book" style="color: orange"></i><div id="ebookRow5"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 5<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow5"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 6 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow6"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 6<i class="icon-book" style="color: orange"></i><div id="ebookRow6"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 6<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow6"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 7 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow7"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 7<i class="icon-book" style="color: orange"></i><div id="ebookRow7"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 7<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow7"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 8 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow8"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 8<i class="icon-book" style="color: orange"></i><div id="ebookRow8"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 8<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow8"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 9 <i class="icon-gamepad" style="color:#9d00ff"></i><div id="jogoRow9"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 9<i class="icon-book" style="color: orange"></i><div id="ebookRow9"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais vistos</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Ambiente 9<i class="icon-hand-up" style="color:green"></i><div id="jogoRfidRow9"></div>
                                </div>
                                <div id="hist-jogo">
                                    <div class="stats-box-title">Os mais jogados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart3" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Total <i class="icon-film" style="color:#F30"></i><div id="videoRow" style="display: inline;"></div>
                                </div>
                                <div id="hist-video">
                                    <div class="stats-box-title">Videos com mais visualizações</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="chart-video" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Total <i class="icon-music" style="color:#9d00ff"></i><div id="musicaRow" style="display: inline;"></div>
                                </div>
                                <div id="hist-musica">
                                    <div class="stats-box-title">Músicas mais ouvidas</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart4" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="span4">
                                <div class="stats-box-all-info">
                                    Total <i class="icon-globe" style="color:#00c4ff"></i><div id="siteRow" style="display: inline;"></div>
                                </div>
                                <div id="hist-site">
                                    <div class="stats-box-title">Sites mais visitados</div>
                                    <div class="wrap-chart">
                                        <div id="order-stat" class="chart" style="padding: 0px; position: relative;">
                                            <canvas id="bar-chart5" class="chart-holder" height="250" width="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div> <!-- /container -->
        </div> <!-- /extra-inner -->
    </div> <!-- /extra -->


    <div class="footer">
        <div class="footer-inner">
            <div class="container">
                <div class="row">
                    <div class="span12">
                        &copy; 2022 <a href="#">Grupo Educa NAVE</a>.
                    </div> <!-- /span12 -->
                </div> <!-- /row -->
            </div> <!-- /container -->
        </div> <!-- /footer-inner -->
    </div> <!-- /footer -->


    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery-1.7.2.min.js"></script>
    <script src="js/excanvas.min.js"></script>
    <script src="js/chart.min.js" type="text/javascript"></script>

    <script src="js/bootstrap.js"></script>
    <script src="js/base.js"></script>
    <script src="js/myjs/historico.js"></script>
    <script>
        /*new Chart(
        document.getElementById("bar-chart1").getContext("2d")
    ).Bar({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }
        ]
    });


	new Chart(
        document.getElementById("bar-chart6").getContext("2d")
    ).Bar({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }
        ]
    });*/
        <?
        function verificaHistoricos($array, $nome)
        {
            if (count($array) == 0) { ?>
                $('#hist-<?= $nome ?>').html(
                    '<div class="item">' +
                    '<div class="icon-exclamation-sign more"></div>' +
                    '<h5 align="center">Não há historico</h5>' +
                    '</div>');
            <? return false;
            } else {
                return true;
            }
        }

        function getname($id, $tipe)
        {
            if (isset($id)) {
                global $client;
                try {
                    $res = $client->get(array('index' => 'mixkids', 'type' => $tipe, 'id' => $id));
                    return $res['_source']['nome'];
                } catch (Exception $e) {
                    return '';
                }
            } else {
                return '';
            }
        }
        if (verificaHistoricos($video['facets']['id']['terms'], 'video')) { ?>
            new Chart(
                document.getElementById("chart-video").getContext("2d")
            ).Bar({
                labels: [
                    <? for ($i = 0; $i <= 4 && $i < count($video['facets']['id']['terms']); $i++) { ?> "<?= getname($video['facets']['id']['terms'][$i]['term'], 'video'); ?>"
                        <? if ($i != 4 && $i < (count($video['facets']['id']['terms'])) - 1) {
                            echo ',';
                        } ?>
                    <? } ?>
                ],
                datasets: [{
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    data: [
                        <? for ($i = 0; $i <= 4 && $i < count($video['facets']['id']['terms']); $i++) { ?>
                            <?= $video['facets']['id']['terms'][$i]['count'] ?>
                            <? if ($i != 4 && $i < (count($video['facets']['id']['terms'])) - 1) {
                                echo ',';
                            } ?>
                        <? } ?>
                    ]
                }]
            });
        <? } ?>


        <? if (verificaHistoricos($jogos['facets']['id']['terms'], 'jogo')) { ?>
            new Chart(
                document.getElementById("bar-chart3").getContext("2d")
            ).Bar({
                labels: [
                    <? for ($i = 0; $i <= 4 && $i < count($jogos['facets']['id']['terms']); $i++) { ?> "<?= getname($jogos['facets']['id']['terms'][$i]['term'], 'jogos'); ?>"
                        <? if ($i != 4 && $i < (count($jogos['facets']['id']['terms'])) - 1) {
                            echo ',';
                        } ?>
                    <? } ?>
                ],
                datasets: [{
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    data: [
                        <? for ($i = 0; $i <= 4 && $i < count($jogos['facets']['id']['terms']); $i++) { ?>
                            <?= $jogos['facets']['id']['terms'][$i]['count'] ?>
                            <? if ($i != 4 && $i < (count($jogos['facets']['id']['terms'])) - 1) {
                                echo ',';
                            } ?>
                        <? } ?>
                    ]
                }]
            });
        <? } ?>

        <? if (verificaHistoricos($musica['facets']['id']['terms'], 'musica')) { ?>
            new Chart(
                document.getElementById("bar-chart4").getContext("2d")
            ).Bar({
                labels: [
                    <? for ($i = 0; $i <= 4 && $i < count($musica['facets']['id']['terms']); $i++) { ?> "<?= getname($musica['facets']['id']['terms'][$i]['term'], 'musicas'); ?>"
                        <? if ($i != 4 && $i < (count($musica['facets']['id']['terms'])) - 1) {
                            echo ',';
                        } ?>
                    <? } ?>
                ],
                datasets: [{
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    data: [
                        <? for ($i = 0; $i <= 4 && $i < count($musica['facets']['id']['terms']); $i++) { ?>
                            <?= $musica['facets']['id']['terms'][$i]['count'] ?>
                            <? if ($i != 4 && $i < (count($musica['facets']['id']['terms'])) - 1) {
                                echo ',';
                            } ?>
                        <? } ?>
                    ]
                }]
            });
        <? } ?>



        <? if (verificaHistoricos($sites['facets']['id']['terms'], 'site')) { ?>

            new Chart(
                document.getElementById("bar-chart5").getContext("2d")
            ).Bar({
                labels: [
                    <? for ($i = 0; $i <= 4 && $i < count($sites['facets']['id']['terms']); $i++) { ?> "<?= getname($sites['facets']['id']['terms'][$i]['term'], 'site'); ?>"
                        <? if ($i != 4 && $i < (count($sites['facets']['id']['terms'])) - 1) {
                            echo ',';
                        } ?>
                    <? } ?>
                ],
                datasets: [{
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    data: [
                        <? for ($i = 0; $i <= 4 && $i < count($sites['facets']['id']['terms']); $i++) { ?>
                            <?= $sites['facets']['id']['terms'][$i]['count'] ?>
                            <? if ($i != 4 && $i < (count($sites['facets']['id']['terms'])) - 1) {
                                echo ',';
                            } ?>
                        <? } ?>
                    ]
                }]
            });
        <? } ?>
    </script>
</body>

</html>