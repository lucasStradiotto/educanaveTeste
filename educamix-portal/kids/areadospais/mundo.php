<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Mundo Virtual - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="js/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">

    <link href="css/style.css" rel="stylesheet">

    <link href="css/pages/plans.css" rel="stylesheet">

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
                    <li class="active"><a href="mundo.php"><i class="icon-picture"></i><span>Mundo Virtual</span></a></li>
                    <!-- <li><a href="mensagens.php"><i class="icon-envelope-alt"></i><span>Mensagens</span></a></li> -->
                    <li><a href="historico.php"><i class="icon-calendar"></i><span>Histórico recente</span></a></li>
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
                <div class="row">
                <?php
                if($_SESSION['perfil'] == 'professor'){
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
                    $idAluno = $_GET['child'];
                    $aluno = $conn->searchAluno($idAluno);
                    ?>
                    <div class="widget">

                        <div class="widget-header">
                            <h2><i class="icon-globe"></i> Mundos</h2>
                        </div>
                        <div class="widget-content">
                            <div class="container">
                                <div class="pricing-plans plans-4">
                                    <?php
                                    for ($count = 1; $count <= 4; $count++) {
                                    ?>
                                        <div class="plan-container mundo" data-id="<?= $count ?>">
                                            <label class="plan <?php if ($aluno[0]['mundo'] == $count) {
                                                                    echo 'red';
                                                                } ?>">
                                                <div class="plan-header">
                                                    <div class="plan-title">
                                                        Mundo <?= $count ?>
                                                    </div> <!-- /plan-title -->
                                                    <div class="plan-price">
                                                        <img src="img/mundo<?= $count ?>.png" class="img-responsive">
                                                    </div> <!-- /plan-price -->
                                                </div> <!-- /plan-header -->

                                                <div class="plan-actions">
                                                    <h3>
                                                    </h3>
                                                </div> <!-- /plan-actions -->
                                            </label> <!-- /plan -->
                                        </div> <!-- /plan-container -->
                                    <?php
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="widget">
                        <div class="widget-header">
                            <h2><i class="icon-user"></i> Avatar</h2>
                        </div>
                        <div class="widget-content">
                            <div class="container">


                                <div class="pricing-plans plans-8">
                                    <?php
                                    for ($count = 1; $count <= 23; $count++) {
                                    ?>
                                        <div class="plan-container avatar" data-id="<?= $count ?>">
                                            <label class="plan <?php if ($aluno[0]['avatar'] == $count) {
                                                                    echo 'red';
                                                                } ?>">
                                                <div class="plan-header">
                                                    <div class="plan-title">
                                                        Avatar <?= $count ?>
                                                    </div> <!-- /plan-title -->
                                                    <div class="plan-price">
                                                        <img src="img/avatar/<?= $aluno[0]['sexo'] ?>/<?= $count ?>.png" class="avatares">
                                                    </div> <!-- /plan-price -->
                                                </div> <!-- /plan-header -->

                                                <div class="plan-actions">
                                                    <h3>
                                                    </h3>
                                                </div> <!-- /plan-actions -->
                                            </label> <!-- /plan -->
                                        </div> <!-- /plan-container -->
                                    <?php
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>


                </div> <!-- /row -->
            </div> <!-- /container -->
        </div> <!-- /main-inner -->
    </div> <!-- /main -->

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

    <div id="loader"></div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery-1.7.2.min.js"></script>
    <script src="js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>

    <script src="js/bootstrap.js"></script>
    <script src="js/myjs/helper.js"></script>
    <!--<script src="js/base.js"></script>-->
    <script src="js/myjs/mundo.js"></script>
    <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>

</body>

</html>