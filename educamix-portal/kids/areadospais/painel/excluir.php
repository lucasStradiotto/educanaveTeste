<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="utf-8">
    <title>Painel - Educamix Kids</title>
    <link rel="shortcut icon" href="../images/favicon.ico">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">    
    
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="../js/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">
    
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="../css/font-awesome.css" rel="stylesheet">
    
    
    <!--<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.8.23/themes/sunny/jquery-ui.css">-->
    
    <link href="../css/style.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements 
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <style>
    label
    {
        display: inline-table;
        width: 32%;
    }
    input[type=text]
    {
        padding: 7px;
        width: 90%;
    }
    </style>
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
                <a class="brand" href="../../index.html">
                    Educamix Kids
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
                                <li><a href="?op=logout">Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->	
            </div> <!-- /container -->
        </div> <!-- /navbar-inner -->
    </div> <!-- /navbar -->


    <div class="subnavbar"></div>
    
    
    <div class="main">
        <div class="main-inner">
            <div class="container">
                <div class="row">
                    <div class="widget">
                        <div class="widget-content">
                            <h3>Excluir os dados a seguir?</h3>
                            <form action="?op=editar" method="post">
                                <label>
                                    <b>ID:</b>
                                    <input type="text" name="id"     value="<?php echo $pai['_id']; ?>" readonly="readonly">
                                </label>
                                <label>
                                    <b>Email:</b>
                                    <input type="text" name="email"  value="<?php echo $pai['_source']['email']; ?>">
                                </label>
                                <label>
                                    <b>Senha:</b>
                                    <input type="text" name="senha"  value="<?php echo $pai['_source']['senha']; ?>">
                                </label>
                                <label>
                                    <b>Nome:</b>
                                    <input type="text" name="nome"   value="<?php echo $pai['_source']['nome']; ?>">
                                </label>
                                <label>
                                    <b>OEM:</b>
                                    <input type="text" name="oem"    value="<?php echo $pai['_source']['oem']; ?>">
                                </label>
                                <label>
                                    <b>Modelo:</b>
                                    <input type="text" name="modelo" value="<?php echo $pai['_source']['modelo']; ?>">
                                </label>
                                <a href="index.php" class="btn btn-default">Cancelar</a>
                                <a href="?op=excluir&id=<?php echo $pai['_id']; ?>&ok=1" class="btn btn-danger">Excluir</a>
                            </form>
                        </div>
                    </div>
                </div> <!-- /row -->
            </div> <!-- /container -->
        </div> <!-- /main-inner -->
    </div> <!-- /main -->

    <div id="loader"></div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>
    <script src="../js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>
    
    <script src="../js/bootstrap.js"></script>
    
    <script src="../js/base.js"></script>

    <script src="../js/myjs/helper.js"></script>
</body>
</html>