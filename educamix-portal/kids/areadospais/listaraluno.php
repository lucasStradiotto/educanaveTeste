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

    <div class="main">
        <div class="main-inner">
            <div class="container">
                <br>
                <div class="row">

                    <div id="target-0">
                        <div class="widget">
                            <div class="widget-content">
                                <h1>Alunos</h1>
                                <br>
                                <table class="table table-hover" id="tabelaAlunos">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Sobrenome</th>
                                            <th scope="col">Data de Nascimento</th>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Telefone Responsável</th>
                                            <th scope="col">E-mail Responsável</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">

                                    </tbody>
                                </table>


                            </div> <!-- /widget-content -->
                        </div> <!-- /widget -->
                    </div> <!-- /span6 -->

                    <div id="editarCadastroAluno" hidden>
                        <div class="widget">
                            <div class="widget-content">
                                <h1>Editar Aluno(a)</h1>

                                <form class="atualizar-child form-horizontal" method="POST" action="#" id="EditAluno">
                                    <fieldset>
                                        <p id="showError2" style="color:red"></p>

                                        <div class="control-group" hidden>
                                            <label class="control-label" for="idAlunoEdit">ID</label>
                                            <div class="controls">
                                                <input type="text" class="child-nome" value="" id="idAlunoEdit" name="idAlunoEdit" disabled>
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="nome">Nome</label>
                                            <div class="controls">
                                                <input type="text" class="child-nome" value="" id="nome" name="nome">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="sobrenome">Sobrenome</label>
                                            <div class="controls">
                                                <input type="text" class="child-senha" value="" id="sobrenome" name="sobrenome">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="data_nascimento_aluno">Data de nascimento</label>
                                            <div class="controls">
                                                <input type="date" class="child-nasc" placeholder="Data de nascimento" value="" id="data_nascimento_aluno" name="data_nascimento_aluno">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="sexo">Sexo</label>
                                            <div class="controls">
                                                <label><input type="radio" name="sexo" id="sexo" value="Masculino" required="required"> Masculino</label>
                                                <label><input type="radio" name="sexo" id="sexo" value="Feminino" required="required"> Feminino</label>
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="endereco">Endereço</label>
                                            <div class="controls">
                                                <input type="text" class="child-senha" value="" id="endereco" name="endereco">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="tel_responsavel">Telefone Responsável</label>
                                            <div class="controls">
                                                <input type="tel" class="child-senha" value="" id="tel_responsavel" name="tel_responsavel">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="email_responsavel">E-mail Responsável</label>
                                            <div class="controls">
                                                <input type="tel" class="child-senha" value="" id="email_responsavel" name="email_responsavel">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="turma">Turma</label>
                                            <div class="controls">
                                                <input type="tel" class="child-senha" value="" id="turma" name="turma">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="professor">Professor</label>
                                            <div class="controls">
                                                <input type="tel" class="child-senha" value="" id="professor" name="professor">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="avatar">Avatar</label>
                                            <div class="controls">
                                                <input type="tel" class="child-senha" value="" id="avatar" name="avatar">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="form-actions modal-footer">
                                            <input type="submit" class="btn btn-primary right" value="Salvar" id="Salvar">
                                        </div> <!-- /form-actions -->

                                    </fieldset>
                                </form>

                            </div> <!-- /widget-content -->
                        </div> <!-- /widget -->
                    </div> <!-- /span6 -->

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
    <script src="js/myjs/listaraluno.js"></script>
    
</body>

</html>