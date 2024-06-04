<?
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Conteúdo - Educa NAVE</title>
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
                    <li><a href="conteudo.php" class="active"><i class="icon-play-circle"></i><span>Conteúdos</span></a></li>
                    <li><a href="horas.php"><i class="icon-time"></i><span>Horas de uso</span></a></li>
                    <li><a href="mundo.php"><i class="icon-picture"></i><span>Mundo Virtual</span></a></li>
                    <li><a href="mensagens.php"><i class="icon-envelope-alt"></i><span>Mensagens</span></a></li>
                    <li><a href="historico.php"><i class="icon-calendar"></i><span>Histórico recente</span></a></li>
                    <li><a href="oem.php"><i class="icon-key"></i><span>Código OEM</span></a></li>
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

                    <div id="target-0">
                        <div class="widget">
                            <div class="widget-content">
                                <h1>Filhos</h1>
                                <p>
                                    Escolha qual o filho você deseja ver informações.
                                </p>
                                <p>
                                    <?
                                    /*
                                     * PHP CRIANÇAS
                                     */
                                    $search = array(
                                        'index'=>'mixkids',
                                        'type'=>'filho',
                                        'body'=>array('query'=>array('match'=>array(
                                            'id'=>array(
                                                'query'=> $_SESSION['id'],
                                                'type' => 'phrase'
                                            )
                                        )))
                                    );
                                    $result = $client->search($search);
                                    if(@$result['hits']['total'] > 0){
                                        foreach($result['hits']['hits'] as $child){
                                            if(isset($_GET['child'])){
                                                $_SESSION['child'] = $_GET['child'];
                                            }
                                            if(!isset($_SESSION['child'])){
                                                $_SESSION['child'] = $child['_id'];
                                            }
                                            ?>
                                            <a class="child <?if($_SESSION['child']==$child['_id']){echo "ativa";}?>" href="?child=<?=$child['_id']?>">
                                                <i class="avatar-img" style="background:url(img/avatar/<?=$child['_source']['sexo']?>/<?=$child['_source']['avatar']?>.png)"></i>
                                                <?=$child['_source']['nome']?>
                                            </a>
                                        <?
                                        }
                                    }else{
                                        ?>
                                        <a href="config.php">Cadastre seu filho aqui.</a>
                                    <?
                                    }
                                    /*
                                     * ===PHP CRIANÇAS===
                                     */
                                    ?>
                                </p>
                            </div> <!-- /widget-content -->
                        </div> <!-- /widget -->
                    </div> <!-- /span6 -->

                    <div>
                        <div class="widget">
                            <div class="widget-content">
                                <label class="item">
                                    <i class="icon-exclamation-sign alert-danger"></i> <b class="alert-danger">Atenção:</b> Alguns jogos/aplicativos disponíveis na google play podem permitir que a criança saia do sistema de proteção do  Educa NAVE.
                                </label>
                            </div> <!-- /widget-content -->
                        </div> <!-- /widget -->
                    </div> <!-- /span12 -->


                    <?
                    if(@$result['hits']['total'] == 0){
                        ?>
                        <div>
                            <div class="widget">
                                <div class="widget-content">
                                    <label class="span2 item">
                                        <!--<div class="controls item">
                                            <a href="config.php" class="btn btn-success">+ Adicionar criança</a>
                                        </div>-->
                                        <a class="icon-plus more"></a>
                                        <div align="center">
                                            <a href="config.php">
                                                Adicionar criança
                                            </a>
                                        </div>
                                    </label>
                                </div> <!-- /widget-content -->
                            </div> <!-- /widget -->
                        </div> <!-- /span12 -->

                    <?
                    }else{
                        ?>
                        <div>
                            <div class="widget">
                                <div class="widget-header">
                                    <h2><i class="icon-trophy"></i> Jogos google play</h2>
                                </div>
                                <div class="widget-content">
                                    <ul class="span12 btn-block">
                                        <li class="select-all"><a><i class="icon-ok-circle"></i><span>Marcar Todos</span></a></li>
                                        <li class="unselect-all"><a><i class="icon-remove-circle"></i><span>Desmarcar Todos</span></a></li>
                                    </ul>
                                    <?
                                    //==========================JOGOS
                                    $search = array(
                                        'index'=>'mixkids',
                                        'type'=>'jogos',
                                        'body'=>array('query'=>array('match'=>array(
                                            'idFilho'=>array(
                                                'query'=> $_SESSION['child'],
                                                'type' => 'phrase'
                                            )
                                        )))
                                    );
                                    $res = $client->search($search);

                                    if($res['hits']['total'] > 0){
                                        $count = 0;
                                        foreach($res['hits']['hits'] as $jogos){
                                            if($jogos['_source']['tipo'] == 'google'){
                                            ?>
                                                <div class="span2 item">
                                                    <img src="<?=$jogos['_source']['img']?>" class="img-responsive">
                                                    <h5 align="center"><?=$jogos['_source']['nome']?></h5>
                                                    <div>
                                                        <input type="checkbox" <?if($jogos['_source']['ativo']){echo 'checked="checked"';}?> class="checkbox-jogos option-icon" data-id="<?=$jogos['_id']?>">

                                                        <div class="btn-jogo-remove icon-trash remove-elastic option-icon" data-id="<?=$jogos['_id']?>"></div>

                                                        <a href="https://play.google.com/store/apps/details?id=<?=$jogos['_source']['link']?>" target="_blank" class="right">
                                                            <i class="icon-mail-forward option-icon"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            <?
                                            }
                                        }
                                    }
                                    ?>
                                    <label class="span2 item">
                                        <a class="icon-plus more" href="#add-jogo-modal" role="button" data-toggle="modal"></a>
                                        <div>
                                            <a class="right" id="add-video-list" href="#add-jogo-modal" role="button" data-toggle="modal">
                                                <br/>
                                                <i class="icon-plus-sign"></i>
                                                Adicionar Jogo google play
                                            </a>
                                            <div id="add-jogo-modal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledy="myModalLabel" aria-hidden="true">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                                                    <h3>
                                                        Adicionar jogo da google play
                                                    </h3>
                                                </div>
                                                <div class="modal-body">
                                                    <input type="text" id="nome-jogo" style="float:left;width:25%" placeholder="Digite o nome do jogo" required="required">
                                                    <input type="text" id="url-jogo" style="margin:0 10px;float:left" placeholder="Digite o link da google play" required="required">
                                                    <button id="btn-add-jogo" class="btn btn-primary right">Adicionar Lista</button>
                                                </div>
                                                <div class="modal-footer"></div>
                                            </div>
                                        </div>
                                    </label>
                                </div> <!-- /widget-content -->
                            </div> <!-- /widget -->
                        </div> <!-- /span12 -->

                    <?
                    }
                    ?>




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

    <div id="loader" style="z-index:1051"></div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery-1.7.2.min.js"></script>
    <script src="js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>
    <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>

    <script src="js/bootstrap.js"></script>
    <script src="js/base.js"></script>
    <script src="js/myjs/helper.js"></script>
    <script src="js/myjs/jogo.js"></script>

</body>

</html>