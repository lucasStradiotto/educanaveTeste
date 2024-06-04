<?php
require_once('php/verificalogin.php');
include('php/verificaprofessor.php');
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
    <div class="subnavbar">
        <div class="subnavbar-inner">
            <div class="container">
                <ul class="mainnav">
                    <li><a href="inicio.php"><i class="icon-star"></i><span>Inicio</span></a></li>
                    <li><a href="conteudo.php"><i class="icon-play-circle"></i><span>Usuários e Atividades</span></a></li>
                    <li><a href="horas.php"><i class="icon-time"></i><span>Horas de uso</span></a></li>
                    <li><a href="mundo.php"><i class="icon-picture"></i><span>Mundo Virtual</span></a></li>
                    <!-- <li><a href="mensagens.php"><i class="icon-envelope-alt"></i><span>Mensagens</span></a></li> -->
                    <li><a href="historico.php"><i class="icon-calendar"></i><span>Histórico recente</span></a></li>
                    <!-- <li><a href="oem.php"><i class="icon-key"></i><span>Código OEM</span></a></li> -->
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
                <br>
                <div class="row">

                    <div id="target-0">
                        <div class="widget">
                            <div class="widget-content">
                                <?php
                                $conn = new conecta();
                                $profSession = $_SESSION['login'];
                                $turma = $_GET['id'];
                                $result = $conn->searchTurmas($turma);
                                $idProf = $result[0]['professor'];
                                $resultado = $conn->searchProfessorTurma($idProf);
                                $professor = $resultado['nome'];
                                ?>
                                <input class="hidden" id="nomeTurma" value="<?= $result[0]['nomeTurma'] ?>">
                                <input class="hidden" id="idTurma" value="<?= $turma ?>">
                                <input class="hidden" id="idProf" value="<?= $idProf ?>">
                                <input class="hidden" id="SessionProf" value="<?= $profSession ?>">
                                <div>
                                    <button class="btn btn-danger right" id="btnExcluirTurma">Excluir Turma e Alunos</button>
                                    <h1><?= $result[0]['nomeTurma'] ?></h1>
                                    <h3 class="right">Professor: <?= $professor ?></h3>
                                    <h3>Código: <?= $result[0]['codTurma'] ?></h3>
                                    <br>
                                </div>
                                <div class="widget-header">
                                    <h3><i class="icon-cogs"></i> Editar Alunos</h3>
                                </div>
                                <br>
                                <div class="input-group">
                                    <button class="btn btn-primary right" id="addAlunoTurma">Adicionar Aluno</button>
                                    <select class="form-select right" id="select_addAlunoTurma">
                                        <option selected>Selecione o Aluno</option>
                                    </select>
                                </div>
                                <br>
                                <table class="table table-hover" id="tabelaAlunosTurma">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Nome do Responsável</th>
                                            <th scope="col">Data Nascimento</th>
                                            <th scope="col">Mundo</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">

                                    </tbody>
                                </table>


                            </div> <!-- /widget-content -->
                        </div> <!-- /widget -->
                    </div> <!-- /span6 -->

                    <div class="target-0">
                        <div class="widget">
                            <div class="widget-content">
                                <h1>Cadastro Novo(a) Aluno(a)</h1>
                                <br>
                                <form id="cad-child" class="form-horizontal">
                                    <div class="widget-header">
                                        <h3><i class="icon-cogs"></i> Cadastrar novo(a) Aluno(a)</h3>
                                    </div>
                                    <br />
                                    <fieldset>

                                        <input type="hidden">

                                        <div class="control-group">
                                            <label class="control-label" for="username">Nome do(a) Aluno(a)</label>
                                            <div class="controls">
                                                <input type="text" id="child-nome" placeholder="Nome">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="child-senha">Senha (opcional)</label>
                                            <div class="controls">
                                                <input type="password" id="child-senha" placeholder="Senha(opcional)">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="resp_nome">Nome do(a) Responsável</label>
                                            <div class="controls">
                                                <input type="text" id="resp_nome" placeholder="Nome">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="username">Data de Nascimento</label>
                                            <div class="controls">
                                                <input type="date" id="child-nasc" placeholder="Data de nascimento">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group">
                                            <label class="control-label" for="username">Sexo</label>
                                            <div class="controls">
                                                <label><input type="radio" name="sexo" value="Masculino" required="required"> Masculino</label>
                                                <label><input type="radio" name="sexo" value="Feminino" required="required"> Feminino</label>
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="control-group hidden">
                                            <label class="control-label" for="turmaAlunoCad">Turma: </label>
                                            <select type="text" class="select_turma" id="turmaAlunoCad" style="margin-left: 20px;">
                                                <option value="<?= $turma ?>" selected><?= $result[0]['nomeTurma'] ?></option>
                                            </select>
                                        </div> <!-- /control-group -->

                                        <div class="control-group hidden">
                                            <label class="control-label" for="username">Nome do Professor</label>
                                            <div class="controls">
                                                <input type="text" id="prof" placeholder="Professor" value="<?= $idProf ?>">
                                            </div> <!-- /controls -->
                                        </div> <!-- /control-group -->

                                        <div class="form-actions">
                                            <input type="submit" class="btn btn-primary" value="Cadastrar Aluno">
                                        </div> <!-- /form-actions -->

                                    </fieldset>
                                </form>
                            </div><!-- /widget-content -->
                        </div><!-- /widget -->
                    </div><!-- /span6 -->

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
    <script src="js/myjs/listarturma.js"></script>

</body>

</html>