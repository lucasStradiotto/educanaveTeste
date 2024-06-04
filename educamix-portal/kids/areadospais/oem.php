<?
require_once('php/verificalogin.php');
ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Configurações - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">


    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="js/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">

    <link href="css/style.css" rel="stylesheet">


    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
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
                </div><!--/.nav-collapse -->
            </div> <!-- /container -->
        </div> <!-- /navbar-inner -->
    </div> <!-- /navbar -->
    <div class="subnavbar">
        <div class="subnavbar-inner">
            <div class="container">
                <ul class="mainnav">
                    <li><a href="inicio.php"><i class="icon-star"></i><span>Inicio</span></a></li>
                    <li><a href="conteudo.php"><i class="icon-play-circle"></i><span>Conteúdos</span></a></li>
                    <li><a href="horas.php"><i class="icon-time"></i><span>Horas de uso</span></a></li>
                    <li><a href="mundo.php"><i class="icon-picture"></i><span>Mundo Virtual</span></a></li>
                    <li><a href="mensagens.php"><i class="icon-envelope-alt"></i><span>Mensagens</span></a></li>
                    <li><a href="historico.php"><i class="icon-calendar"></i><span>Histórico recente</span></a></li>
                    <li class="active"><a href="oem.php"><i class="icon-key"></i><span>Código OEM</span></a></li>
                    <li><a href="config.php"><i class="icon-cog"></i><span>Configurações</span></a></li>
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
                    <div class="widget">
                        <div class="widget-header">
                            <h2><i class="icon-cog"></i> Configurações</h2>
                        </div>
                        <div class="widget-content">






                            <form id="edit-conta" class="form-horizontal">
                                <div class="widget-header">
                                    <h3><i class="icon-cogs"></i> Atualizar dados</h3>
                                </div>
                                <br/>
                                <fieldset>
                                    <?
                                    $get = array(
                                        'index'=>'mixkids',
                                        'type'=>'pais',
                                        'id'=>$_SESSION['id']
                                    );
                                    $res = $client->get($get);
                                    if($res['found'] != 0){
                                        /*$query = array(
                                            'index' => 'mixkids',
                                            'type' => 'oem',
                                            'body' => array('query' => array('match' => array('idPai' => array(
                                                'query'=>$res['_id'],
                                                'type'=>'phrase'
                                            ))))
                                        );
                                        $oem = $client->search($query);*/
                                        ?>
                                        <div class="control-group">
                                            <label class="control-label" for="username">Email</label>
                                            <div class="controls">
                                                <input type="email" required="required" class="disabled" id="usuario" value="<?=$_SESSION['login']?>" disabled>
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="firstname">Nome</label>
                                            <div class="controls">
                                                <input type="text" id="conta-nome" placeholder="Nome" required="required" value="<?=$res['_source']['nome']?>">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="firstname">Código OEM</label>
                                            <div class="controls">
                                                <input type="text" id="oem" placeholder="oem (opcional)" value="<?=@$res['_source']['oem']?>">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="form-actions">
                                            <button type="submit" class="btn btn-primary">Atualizar dados</button>
                                        </div> <!-- /form-actions -->
                                    <? } ?>
                                </fieldset>
                            </form>






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
    <script src="js/base.js"></script>

    <script src="js/myjs/helper.js"></script>
    <script src="js/myjs/config.js"></script>
    <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>
</body>


</html>
