<?php
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>Conteúdo - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="js/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="css/conteudo.css" rel="stylesheet">

</head>

<body>
    <div class="navbarInicio">	
		<img class="navbarCapa" src="./assets/capa-menu.png" alt="Capa do Menu">
		<img class="navbarLogo" src="./assets/logo-nave.png" alt="Logo Educanave">
	</div>
	<div class="subnavbarInicio">
		<div class="bordaSubMenus">
			<a href="inicio.php"><img class="menus" id="menuEstrela-" src="./assets/menu-estrela-selecao.png" alt="Menu Estrela"></a>
			<img class="menusSelecionados" id="menuEstrela-Selecionado" src="./assets/menu-estrela-selecionado.png" alt="Menu Estrela">
			<a href="turma.php"><img class="menus" id="menuTurma-" src="./assets/menu-turma-selecao.png" alt="Menu Turma"></a>
			<img class="menusSelecionados" id="menuTurma-Selecionado" src="./assets/menu-turma-selecionado.png" alt="Menu Turma">
			<a href="conteudo.php"><img class="menus" id="menuAtividades-" src="./assets/menu-atividades-selecao.png" alt="Menu Atividades"></a>
			<img class="menusSelecionados" id="menuAtividades-Selecionado" src="./assets/menu-atividades-selecionado.png" alt="Menu Atividades">
			<a href="mensagens.php"><img class="menus" id="menuMensagem-" src="./assets/menu-mensagens-selecao.png" alt="Menu Mensagem"></a>
			<img class="menusSelecionados" id="menuMensagem-Selecionado" src="./assets/menu-mensagens-selecionado.png" alt="Menu Mensagem">
			<a href="config.php"><img class="menus" id="menuConfiguracao-" src="./assets/menu-confi-selecao.png" alt="Menu Configuração"></a>
			<img class="menusSelecionados" id="menuConfiguracao-Selecionado" src="./assets/menu-confi-selecionado.png" alt="Menu Configuração">
		</div>
	</div>
    <br><br><br><br><br>
    <div class="main">
        <?php
            if($_SESSION['perfil'] == 'professor') {
        ?>
            <div class="accordion" id="accordionTurma">
                <div class="accordion-item" id="itemTurma">
                    <button id="btnTurma" class="accordion accordionTurma" data-bs-toggle="collapse" data-bs-target="#collapseTurma" aria-expanded="true" aria-controls="collapseTurma">
                        <img id="iconTurma" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
                        <label id="lblTurma" class="labelaccordion">Turmas</label>
                    </button>
                    <div id="collapseTurma" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionTurma">
                        <input type="text" class="hidden" id="idProfSessao" value="<?= $_SESSION['idProfessor'] ?>">
                        <div id="conteudoTurma">

                        </div>
                    </div>
                </div>
                <br>
            </div>
            <div class="espaco"></div>
            <div class="accordion" id="accordionAluno">
                <div class="accordion-item" id="itemAluno">
                    <button id="btnAluno" class="accordion accordionAluno" data-bs-toggle="collapse" data-bs-target="#collapseAluno" aria-expanded="true" aria-controls="collapseAluno">
                        <img id="iconAluno" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
                        <label id="lblAluno" class="labelaccordion">Alunos</label>
                    </button>
                    <div id="collapseAluno" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionAluno">
                        <div id="pesquisar">
                            <img src="assets/barra-de-pesquisa.png" alt="pesquisa">
                            <input type="text" name="pesquisaAluno" id="pesquisaAluno" placeholder="Pesquisar..." disabled>
                        </div>
                        <div>
                            <hr>
                        </div>
                        <div id="Alunos">
                            <div id="conteudoAluno">
                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                            </div>
                        </div>
                        <div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="espaco"></div>
        <?php
            } else {
        ?>
        <input type="text" class="hidden" id="idProfSessao" value="">
        <?php
            }
        ?>
        <div class="accordion" id="accordionAmbiente">
            <div class="accordion-item" id="itemAmbiente">
                <button id="btnAmbiente" class="accordion accordionAmbiente" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente" aria-expanded="true" aria-controls="collapseAmbiente">
                        <img id="iconAmbiente" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
                        <label id="lblAmbiente" class="labelaccordion">Ambientes</label>
                </button>
                <div id="collapseAmbiente" class="accordion-collapse collapse show"
                aria-labelledby="headingOne" data-bs-parent="#accordionAmbiente">
                    <div id="Ambientes">
                        <div class="accordion" id="ambiente1">
                            <div class="accordion-item" id="itemAmbiente1">
                                <button id="btnAmbiente1" class="accordion accordionAmbiente1" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente1" aria-expanded="true" aria-controls="collapseAmbiente1">
                                    Planeta ABC - Alfabetização e consciência fonológica
                                </button>
                                <div id="collapseAmbiente1" class="accordion-collapse collapse show"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente1">
                                    <div id="conteudoAmbiente1">
                                        <div id="cabecalhoJogosAmbiente1">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo1" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos1">
                                                    <label for="marcarJogos1" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo1" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos1">
                                                    <label for="desmarcarJogos1"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente1">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin') {
                                            ?>
                                                <div class="ambientesAdmin">
                                                    <div class="btnAdicionar">
                                                        <button id="addJogo1" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo1">
                                                            <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                        </button>
                                                    </div>
                                                    <div id="JogosAmbientes1Admin" class="ambienteAdminVazio">

                                                    </div>
                                                    <div id="gridJogosAmbiente1Admin">
                                                        
                                                    </div>
                                                </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor") {
                                            ?>
                                            <div id="gridJogosAmbiente1">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente1">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks1" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks1">
                                                    <label for="marcarEbooks1" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks1" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks1">
                                                    <label for="desmarcarEbooks1"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente1">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook1" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook1">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes1Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente1Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente1">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente1">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido1" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido1">
                                                    <label for="marcarJogoHibrido1" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido1" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido1">
                                                    <label for="desmarcarJogoHibrido1"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente1">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido1" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido1">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes1Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente1Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente1">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 1 -->

                        <div class="modal" tabindex="-1" id="modalJogo1">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo1">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo1">
                                        <h1 id="h1Jogo1">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo1">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo1">
                                                <div class="inputFile">
                                                    <input type="file" id="fileJogo1" name="fileJogo1" accept=".zip" required="required">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo1">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo1" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo1" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook1">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook1">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook1">
                                        <h1 id="h1Ebook1">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook1">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook1">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook1" id="fileEbook1">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook1">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook1" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook1" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido1">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido1">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido1">
                                        <h1 id="h1Hibrido1">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido1">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido1">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido1" id="fileJogoHibrido1">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido1">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido1" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido1" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Fim Modal Ambiente 1 -->

                        <div class="accordion" id="ambiente2">
                            <div class="accordion-item" id="itemAmbiente2">
                                <button id="btnAmbiente2" class="accordion accordionAmbiente2" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente2" aria-expanded="true" aria-controls="collapseAmbiente2">
                                    Planeta Gente - Identidade, Alteridade, Direitos das Crianças
                                </button>
                                <div id="collapseAmbiente2" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente2">
                                    <div id="conteudoAmbiente2">
                                        <div id="cabecalhoJogosAmbiente2">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo2" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos2">
                                                    <label for="marcarJogos2" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo2" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos2">
                                                    <label for="desmarcarJogos2"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente2">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo2" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo2">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes2Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente2Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente2">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente2">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks2" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks2">
                                                    <label for="marcarEbooks2" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks2" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks2">
                                                    <label for="desmarcarEbooks2"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente2">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook2" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook2">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes2Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente2Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente2">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente2">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido2" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido2">
                                                    <label for="marcarJogoHibrido2" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido2" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido2">
                                                    <label for="desmarcarJogoHibrido2"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente2">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido2" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido2">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes2Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente2Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente2">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 2 -->

                        <div class="modal" tabindex="-1" id="modalJogo2">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo2">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo2">
                                        <h1 id="h1Jogo2">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo2">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo2">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo2" id="fileJogo2">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo2">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo2" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo2" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook2">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook2">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook2">
                                        <h1 id="h1Ebook2">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook2">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook2">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook2" id="fileEbook2">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook2">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook2" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook2" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido2">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido2">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido2">
                                        <h1 id="h1Hibrido2">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido2">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido2">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido2" id="fileJogoHibrido2">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido2">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido2" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido2" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 2 -->

                        <div class="accordion" id="ambiente3">
                            <div class="accordion-item" id="itemAmbiente3">
                                <button id="btnAmbiente3" class="accordion accordionAmbiente3" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente3" aria-expanded="true" aria-controls="collapseAmbiente3">
                                    Planeta Movimento - Corpo, Movimento e Arte
                                </button>
                                <div id="collapseAmbiente3" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente3">
                                    <div id="conteudoAmbiente3">
                                        <div id="cabecalhoJogosAmbiente3">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo3" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos3">
                                                    <label for="marcarJogos3" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo3" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos3">
                                                    <label for="desmarcarJogos3"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente3">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo3" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo3">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes3Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente3Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente3">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente3">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks3" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks3">
                                                    <label for="marcarEbooks3" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks3" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks3">
                                                    <label for="desmarcarEbooks3"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente3">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook3" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook3">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes3Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente3Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente3">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente3">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido3" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido3">
                                                    <label for="marcarJogoHibrido3" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido3" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido3">
                                                    <label for="desmarcarJogoHibrido3"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente3">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido3" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido3">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes3Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente3Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente3">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 3 -->

                        <div class="modal" tabindex="-1" id="modalJogo3">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo3">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo3">
                                        <h1 id="h1Jogo3">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo3">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo3">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo3" id="fileJogo3">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo3">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo3" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo3" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook3">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook3">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook3">
                                        <h1 id="h1Ebook3">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook3">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook3">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook3" id="fileEbook3">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook3">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook3" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook3" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido3">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido3">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido3">
                                        <h1 id="h1Hibrido3">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido3">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido3">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido3" id="fileJogoHibrido3">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido3">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido3" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido3" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 3 -->

                        <div class="accordion" id="ambiente4">
                            <div class="accordion-item" id="itemAmbiente4">
                                <button id="btnAmbiente4" class="accordion accordionAmbiente4" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente4" aria-expanded="true" aria-controls="collapseAmbiente4">
                                    Planeta Números - Espaços, Tempos, Relações e Números
                                </button>
                                <div id="collapseAmbiente4" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente4">
                                    <div id="conteudoAmbiente4">
                                        <div id="cabecalhoJogosAmbiente4">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo4" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos4">
                                                    <label for="marcarJogos4" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo4" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos4">
                                                    <label for="desmarcarJogos4"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente4">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo4" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo4">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes4Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente4Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente4">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente4">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks4" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks4">
                                                    <label for="marcarEbooks4" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks4" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks4">
                                                    <label for="desmarcarEbooks4"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente4">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook4" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook4">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes4Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente4Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente4">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente4">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido4" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido4">
                                                    <label for="marcarJogoHibrido4" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido4" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido4">
                                                    <label for="desmarcarJogoHibrido4"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente4">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido4" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido4">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes4Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente4Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente4">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 4 -->

                        <div class="modal" tabindex="-1" id="modalJogo4">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo4">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo4">
                                        <h1 id="h1Jogo4">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo4">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo4">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo4" id="fileJogo4">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo4">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo4" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo4" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook4">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook4">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook4">
                                        <h1 id="h1Ebook4">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook4">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook4">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook4" id="fileEbook4">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook4">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook4" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook4" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido4">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido4">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido4">
                                        <h1 id="h1Hibrido4">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido4">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido4">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido4" id="fileJogoHibrido4">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido4">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido4" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido4" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 4 -->

                        <div class="accordion" id="ambiente5">
                            <div class="accordion-item" id="itemAmbiente5">
                                <button id="btnAmbiente5" class="accordion accordionAmbiente5" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente5" aria-expanded="true" aria-controls="collapseAmbiente5">
                                    Planeta Imaginação - Autoria, Criação e Jogo Simbólico
                                </button>
                                <div id="collapseAmbiente5" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente5">
                                    <div id="conteudoAmbiente5">
                                        <div id="cabecalhoJogosAmbiente5">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo5" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos5">
                                                    <label for="marcarJogos5" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo5" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos5">
                                                    <label for="desmarcarJogos5"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente5">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo5" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo5">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes5Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente5Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente5">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente5">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks5" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks5">
                                                    <label for="marcarEbooks5" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks5" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks5">
                                                    <label for="desmarcarEbooks5"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente5">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook5" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook5">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes5Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente5Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente5">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente5">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido5" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido5">
                                                    <label for="marcarJogoHibrido5" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido5" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido5">
                                                    <label for="desmarcarJogoHibrido5"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente5">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido5" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido5">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes5Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente5Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente5">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 5 -->

                        <div class="modal" tabindex="-1" id="modalJogo5">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo5">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo5">
                                        <h1 id="h1Jogo5">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo5">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo5">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo5" id="fileJogo5">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo5">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo5" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo5" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook5">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook5">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook5">
                                        <h1 id="h1Ebook5">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook5">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook5">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook5" id="fileEbook5">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook5">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook5" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook5" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido5">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido5">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido5">
                                        <h1 id="h1Hibrido5">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido5">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido5">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido5" id="fileJogoHibrido5">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido5">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido5" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido5" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 5 -->

                        <div class="accordion" id="ambiente6">
                            <div class="accordion-item" id="itemAmbiente6">
                                <button id="btnAmbiente6" class="accordion accordionAmbiente6" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente6" aria-expanded="true" aria-controls="collapseAmbiente6">
                                    Planeta Vida - Sustentabilidade, Curiosidade Científicas, Cidadania e Educação para o Consumo
                                </button>
                                <div id="collapseAmbiente6" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente6">
                                    <div id="conteudoAmbiente6">
                                        <div id="cabecalhoJogosAmbiente6">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo6" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos6">
                                                    <label for="marcarJogos6" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo6" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos6">
                                                    <label for="desmarcarJogos6"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente6">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo6" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo6">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes6Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente6Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente6">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente6">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks6" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks6">
                                                    <label for="marcarEbooks6" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks6" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks6">
                                                    <label for="desmarcarEbooks6"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente6">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook6" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook6">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes6Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente6Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente6">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente6">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido6" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido6">
                                                    <label for="marcarJogoHibrido6" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido6" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido6">
                                                    <label for="desmarcarJogoHibrido6"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente6">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido6" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido6">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes6Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente6Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente6">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 6 -->

                        <div class="modal" tabindex="-1" id="modalJogo6">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo6">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo6">
                                        <h1 id="h1Jogo6">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo6">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo6">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo6" id="fileJogo6">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo6">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo6" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo6" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook6">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook6">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook6">
                                        <h1 id="h1Ebook6">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook6">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook6">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook6" id="fileEbook6">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook6">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook6" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook6" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido6">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido6">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido6">
                                        <h1 id="h1Hibrido6">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido6">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido6">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido6" id="fileJogoHibrido6">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido6">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido6" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido6" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 6 -->

                        <div class="accordion" id="ambiente7">
                            <div class="accordion-item" id="itemAmbiente7">
                                <button id="btnAmbiente7" class="accordion accordionAmbiente7" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente7" aria-expanded="true" aria-controls="collapseAmbiente7">
                                    Planeta Histórias - Literatura e Contação  de Histórias
                                </button>
                                <div id="collapseAmbiente7" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente7">
                                    <div id="conteudoAmbiente7">
                                        <div id="cabecalhoJogosAmbiente7">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo7" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos7">
                                                    <label for="marcarJogos7" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo7" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos7">
                                                    <label for="desmarcarJogos7"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente7">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo7" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo7">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes7Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente7Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente7">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente7">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks7" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks7">
                                                    <label for="marcarEbooks7" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks7" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks7">
                                                    <label for="desmarcarEbooks7"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente7">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook7" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook7">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes7Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente7Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente7">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente7">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido7" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido7">
                                                    <label for="marcarJogoHibrido7" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido7" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido7">
                                                    <label for="desmarcarJogoHibrido7"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente7">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido7" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido7">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes7Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente7Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente7">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 7 -->

                        <div class="modal" tabindex="-1" id="modalJogo7">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo7">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo7">
                                        <h1 id="h1Jogo7">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo7">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo7">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo7" id="fileJogo7">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo7">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo7" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo7" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook7">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook7">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook7">
                                        <h1 id="h1Ebook7">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook7">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook7">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook7" id="fileEbook7">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook7">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook7" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook7" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido7">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido7">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido7">
                                        <h1 id="h1Hibrido7">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido7">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido7">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido7" id="fileJogoHibrido7">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido7">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido7" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido7" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 7 -->

                        <div class="accordion" id="ambiente8">
                            <div class="accordion-item" id="itemAmbiente8">
                                <button id="btnAmbiente8" class="accordion accordionAmbiente8" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente8" aria-expanded="true" aria-controls="collapseAmbiente8">
                                    Planeta  Emoções - Educação Socioemocional
                                </button>
                                <div id="collapseAmbiente8" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente8">
                                    <div id="conteudoAmbiente8">
                                        <div id="cabecalhoJogosAmbiente8">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo8" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos8">
                                                    <label for="marcarJogos8" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo8" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos8">
                                                    <label for="desmarcarJogos8"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente8">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo8" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo8">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes8Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente8Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente8">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente8">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks8" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks8">
                                                    <label for="marcarEbooks8" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks8" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks8">
                                                    <label for="desmarcarEbooks8"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente8">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook8" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook8">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes8Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente8Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente8">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente8">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido8" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido8">
                                                    <label for="marcarJogoHibrido8" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido8" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido8">
                                                    <label for="desmarcarJogoHibrido8"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente8">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido8" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido8">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes8Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente8Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente8">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 8 -->

                        <div class="modal" tabindex="-1" id="modalJogo8">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo8">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo8">
                                        <h1 id="h1Jogo8">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo8">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo8">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo8" id="fileJogo8">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo8">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo8" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo8" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook8">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook8">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook8">
                                        <h1 id="h1Ebook8">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook8">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook8">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook8" id="fileEbook8">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook8">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook8" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook8" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido8">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido8">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido8">
                                        <h1 id="h1Hibrido8">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido8">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido8">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido8" id="fileJogoHibrido8">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido8">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido8" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido8" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 8 -->

                        <div class="accordion" id="ambiente9">
                            <div class="accordion-item" id="itemAmbiente9">
                                <button id="btnAmbiente9" class="accordion accordionAmbiente9" data-bs-toggle="collapse" data-bs-target="#collapseAmbiente9" aria-expanded="true" aria-controls="collapseAmbiente9">
                                    Planeta Digital - Cultura Digital e Pensamento Computacional
                                </button>
                                <div id="collapseAmbiente9" class="accordion-collapse collapse"
                                aria-labelledby="headingOne" data-bs-parent="#btnAmbiente9">
                                    <div id="conteudoAmbiente9">
                                        <div id="cabecalhoJogosAmbiente9">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogo9" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogos9">
                                                    <label for="marcarJogos9" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogo9" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogos9">
                                                    <label for="desmarcarJogos9"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="jogosAmbiente9">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addJogo9" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalJogo9">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogosAmbientes9Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogosAmbiente9Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogosAmbiente9">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoEbooksAmbinente9">
                                            <div class="tituloAmbiente">
                                                <h3>Histórias Digitais</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveEbooks9" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarEbooks9">
                                                    <label for="marcarEbooks9" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeEbooks9" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarEbooks9">
                                                    <label for="desmarcarEbooks9"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                                }
                                            ?>
                                        </div>
                                        <div id="ebooksAmbiente9">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addEbook9" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalEbook9">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="EbooksAmbientes9Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridEbooksAmbiente9Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridEbooksAmbiente9">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                        <div id="cabecalhoJogoHibridoAmbiente9">
                                            <div class="tituloAmbiente">
                                                <h3>Jogos Híbridos</h3>
                                            </div>
                                            <?php 
                                                if($_SESSION['perfil'] == 'professor'){
                                            ?>
                                            <div class="checkPermission">
                                                <div id="checkPositiveJogoHibrido9" class="checkItemPermission">
                                                    <img src="assets/id-check01.png" alt="check Positive" id="marcarJogoHibrido9">
                                                    <label for="marcarJogoHibrido9" class="lblMarcarTodos">Marcar Todos</label>
                                                </div>
                                                <div id="checkNegativeJogoHibrido9" class="checkItemPermission">
                                                    <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarJogoHibrido9">
                                                    <label for="desmarcarJogoHibrido9"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                                                </div>
                                            </div>
                                            <?php 
                                               }
                                            ?>
                                        </div>
                                        <div id="hibridosAmbiente9">
                                            <?php
                                                if($_SESSION['perfil'] == 'admin'){
                                            ?>
                                            <div class="ambientesAdmin">
                                                <div class="btnAdicionar">
                                                    <button id="addHibrido9" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalHibrido9">
                                                        <img src="assets/botao-adicionar.png" alt="Adicionar">
                                                    </button>
                                                </div>
                                                <div id="JogoHibridoAmbientes9Admin" class="ambienteAdminVazio">

                                                </div>
                                                <div id="gridJogoHibridoAmbiente9Admin">
                                                    
                                                </div>
                                            </div>
                                            <?php
                                                } else if($_SESSION['perfil'] == "professor"){
                                            ?>
                                            <div id="gridJogoHibridoAmbiente9">
                                                <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                                            </div>
                                            <?php
                                                }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Ambiente 9 -->

                        <div class="modal" tabindex="-1" id="modalJogo9">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalJogo9">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalJogo9">
                                        <h1 id="h1Jogo9">Adicionar Jogo</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalJogo9">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogo9">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogo9" id="fileJogo9">
                                                </div>
                                                <div class="modal-footer" id="footerModalJogo9">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalJogo9" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarJogo9" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalEbook9">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalEbook9">
                                    <img src="assets/local-titulo.png" alt="Titulo" class="fundoTitulo">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalEbook9">
                                        <h1 id="h1Ebook1">Adicionar Histórias Digitas</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalEbook9">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formEbook9">
                                                <div class="inputFile">
                                                    <input type="file" name="fileEbook9" id="fileEbook9">
                                                </div>
                                                <div class="modal-footer" id="footerModalEbook9">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalEbook9" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarEbook9" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" tabindex="-1" id="modalHibrido9">
                            <div class="load">
                                <img class="iconLoading" src="assets/loading.png" alt="Loading">
                            </div>
                            <div class="modal-dialog">
                                <div class="modal-content" id="fundoModalHibrido9">
                                    <img src="assets/pop-up.png" alt="Modal">
                                    <div class="modal-header" id="tituloModalHibrido9">
                                        <h1 id="h1Hibrido9">Adicionar Jogo Híbrido</h1>
                                    </div>
                                    <div class="modal-body" id="conteudoModalHibrido9">
                                        <div class="interiorModal">
                                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                                            <form enctype="multipart/form-data" id="formJogoHibrido9">
                                                <div class="inputFile">
                                                    <input type="file" name="fileJogoHibrido9" id="fileJogoHibrido9">
                                                </div>
                                                <div class="modal-footer" id="footerModalHibrido9">
                                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                                        <img id="btnFecharModalHibrido9" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                                    </button>
                                                    <button type="submit" class="btnFechar">
                                                        <img id="btnSalvarHibrido9" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fim Modal Ambiente 9 -->
                    </div>
                </div>
            </div>
        </div>
        <div class="espaco"></div>
        <div class="accordion" id="accordionMusicas">
            <div class="accordion-item" id="itemMusicas">
                <button id="btnMusicas" class="accordion accordionMusicas" data-bs-toggle="collapse" data-bs-target="#collapseMusicas" aria-expanded="true" aria-controls="collapseMusicas">
					<img id="iconMusicas" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
					<label id="lblMusicas" class="labelaccordion">Músicas</label>
				</button>
                <div id="collapseMusicas" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#btnMusicas">
                    <div id="pesquisarMusicas">
						<img src="assets/barra-de-pesquisa.png" alt="pesquisa">
						<input type="text" name="pesquisaMusicas" id="pesquisaMusicas" placeholder="Pesquisar...">
					</div>
                    <div id="cabecalhoMusicas">
                        <?php 
                            if($_SESSION['perfil'] == 'professor'){
                        ?>
                        <div class="checkPermission">
                            <div id="checkPositiveMusicas" class="checkItemPermission">
                                <img src="assets/id-check01.png" alt="check Positive" id="marcarMusicas">
                                <label for="marcarMusicas" class="lblMarcarTodos">Marcar Todos</label>
                            </div>
                            <div id="checkNegativeMusicas" class="checkItemPermission">
                                <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarMusicas">
                                <label for="desmarcarMusicas"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                            </div>
                        </div>
                        <?php 
                            }
                        ?>
                    </div>
                    <div>
						<hr>
					</div>
                    <?php
                        if($_SESSION['perfil'] == 'admin'){
                    ?>
                     <div class="ambientesAdmin" id="musicPlayerAdmin">
                        <div class="btnAdicionar">
                            <img src="assets/botao-adicionar.png" alt="Adicionar" id="addMusica" data-bs-toggle="modal" data-bs-target="#modalMusica">
                        </div>
                        <div id="conteudoMusicasAdmin">
                            
                        </div>
                    </div>
                    <?php
                        } else if($_SESSION['perfil'] == 'professor'){
                    ?>
                    <div id="conteudoMusicas">
                        <h1 id="selecionarTurmaMusica">Selecione uma Turma Acima</h1>
                    </div>
                    <?php
                        }
                    ?>
                    <div>
						<hr>
					</div>
                </div>
            </div>
        </div>

        <!-- Modal Musica -->

        <div class="modal" tabindex="-1" id="modalMusica">
            <div class="load">
                <img class="iconLoading" src="assets/loading.png" alt="Loading">
            </div>
            <div class="modal-dialog">
                <div class="modal-content" id="fundoModalMusica">
                    <img src="assets/pop-up.png" alt="Modal">
                    <div class="modal-header" id="tituloModalMusica">
                        <h1 id="h1Musica">Adicionar Música</h1>
                    </div>
                    <div class="modal-body" id="conteudoModalMusica">
                        <div class="interiorModal">
                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                            <form enctype="multipart/form-data" id="formMusic">
                                <div class="inputFile">
                                    <input type="file" id="fileMusic" name="fileMusic" accept=".zip" required="required">
                                </div>
                                <div class="modal-footer" id="footerModalMusica">
                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                        <img id="btnFecharModalMusica" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                    </button>
                                    <button type="submit" class="btnFechar">
                                        <img id="btnSalvarMusica" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fim Modal Musica -->

        <div class="espaco"></div>
        <div class="accordion" id="accordionVideos">
            <div class="accordion-item" id="itemVideos">
                <button id="btnVideos" class="accordion accordionVideos" data-bs-toggle="collapse" data-bs-target="#collapseVideos" aria-expanded="true" aria-controls="collapseVideos">
                    <img id="iconVideos" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
					<label id="lblVideos" class="labelaccordion">Vídeos</label>
                </button>
                <div id="collapseVideos" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#btnVideos">
                    <div id="pesquisarVideos">
						<img src="assets/barra-de-pesquisa.png" alt="pesquisa">
						<input type="text" name="pesquisaVideos" id="pesquisaVideos" placeholder="Pesquisar...">
					</div>
                    <?php 
                        if($_SESSION['perfil'] == 'professor'){
                    ?>
                    <div class="checkPermission">
                        <div id="checkPositiveVideos" class="checkItemPermission">
                            <img src="assets/id-check01.png" alt="check Positive" id="marcarVideos">
                            <label for="marcarVideos" class="lblMarcarTodos">Marcar Todos</label>
                        </div>
                        <div id="checkNegativeVideos" class="checkItemPermission">
                            <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarVideos">
                            <label for="desmarcarVideos"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                        </div>
                    </div>
                    <?php 
                        }
                    ?>
                    <div>
						<hr>
					</div>
                    <?php
                        if($_SESSION['perfil'] == 'admin'){
                    ?>
                    <div class="videosAdmin">
                        <div class="btnAdicionar">
                            <img src="assets/botao-adicionar.png" alt="Adicionar" id="addVideo" data-bs-toggle="modal" data-bs-target="#modalVideo">
                        </div>
                        <div id="conteudoVideosAdmin">
                            
                        </div>
                    </div>
                    <?php
                        } else if($_SESSION['perfil'] == 'professor'){
                    ?>
                    <div id="conteudoVideos">
                        <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                    </div>
                    <?php
                        }
                    ?>
                    <div>
						<hr>
					</div>
                </div>
            </div>
        </div>

        <!-- Modal Vídeo -->

        <div class="modal" tabindex="-1" id="modalVideo">
            <div class="load">
                <img class="iconLoading" src="assets/loading.png" alt="Loading">
            </div>
            <div class="modal-dialog">
                <div class="modal-content" id="fundoModalVideo">
                    <img src="assets/pop-up.png" alt="Modal">
                    <div class="modal-header" id="tituloModalVideo">
                        <h1 id="h1Video">Adicionar Vídeo</h1>
                    </div>
                    <div class="modal-body" id="conteudoModalVideo">
                        <div class="interiorModal">
                            <h3 class="fraseUpload">ATENÇÃO: Não serão permitidos arquivos com espaços em branco ou caracteres especiais nos nomes e no .zip</h3>
                            <form enctype="multipart/form-data" id="formVideo">
                                <div class="inputFile">
                                    <input type="file" id="fileVideo" name="fileVideo" accept=".zip" required="required">
                                </div>
                                <div class="modal-footer" id="footerModalVideo">
                                    <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                        <img id="btnFecharModalVideo" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                    </button>
                                    <button type="submit" class="btnFechar">
                                        <img id="btnSalvarVideo" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fim Modal Vídeo -->

        <div class="espaco"></div>
        <div class="accordion" id="accordionSites">
            <div class="accordion-item" id="itemSites">
                <button id="btnSites" class="accordion accordionSites" data-bs-toggle="collapse" data-bs-target="#collapseSites" aria-expanded="true" aria-controls="collapseSites">
                    <img id="iconSites" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
					<label id="lblSites" class="labelaccordion">Sites</label>
                </button>
                <div id="collapseSites" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#btnSites">
                    <div id="pesquisarSites">
						<img src="assets/barra-de-pesquisa.png" alt="pesquisa">
						<input type="text" name="pesquisaSites" id="pesquisaSites" placeholder="Pesquisar...">
					</div>
                    <?php 
                        if($_SESSION['perfil'] == 'professor'){
                    ?>
                    <div class="checkPermission">
                        <div id="checkPositiveSites" class="checkItemPermission">
                            <img src="assets/id-check01.png" alt="check Positive" id="marcarSites">
                            <label for="marcarSites" class="lblMarcarTodos">Marcar Todos</label>
                        </div>
                        <div id="checkNegativeSites" class="checkItemPermission">
                            <img src="assets/id-check-off01.png" alt="check Negative" id="desmarcarSites">
                            <label for="desmarcarSites"  class="lblDesmarcarTodos">Desmarcar Todos</label>
                        </div>
                    </div>
                    <?php 
                        }
                    ?>
                    <div>
						<hr>
					</div>
                    <?php
                        if($_SESSION['perfil'] == 'admin'){
                    ?>
                    <div class="SitesAdmin">
                        <div class="btnAdicionar">
                            <img src="assets/botao-adicionar.png" alt="Adicionar" id="addSite" data-bs-toggle="modal" data-bs-target="#modalSite">
                        </div>
                        <div id="conteudoSitesAdmin">
                            
                        </div>
                    </div>
                    <?php
                        } else if($_SESSION['perfil'] == 'professor'){
                    ?>
                    <div id="conteudoSites">
                        <h1 class="selecionarTurma">Selecione uma Turma Acima</h1>
                    </div>
                    <?php
                        }
                    ?>
                    <div>
						<hr>
					</div>
                </div>
            </div>
        </div>

        <!-- Modal Site -->

        <div class="modal" tabindex="-1" id="modalSite">
            <div class="load">
                <img class="iconLoading" src="assets/loading.png" alt="Loading">
            </div>
            <div class="modal-dialog">
                <div class="modal-content" id="fundoModalSite">
                    <img src="assets/pop-up.png" alt="Modal">
                    <div class="modal-header" id="tituloModalSite">
                        <h1 id="h1Site">Adicionar Site</h1>
                    </div>
                    <div class="modal-body" id="conteudoModalSite">
                        <div class="siteContent">
                            <div class="inputsFormSite">
                                <label class="lblAddSite">Nome do Site: </label>
                                <input type="text" id="inputNomeSite" class="inputSite">
                            </div>
                            <div class="inputsFormSite">
                                <label class="lblAddSite">Url do Site: </label>
                                <input type="text" id="inputUrlSite" class="inputSite">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" id="footerModalSite">
                        <button type="button" class="btnFechar" data-bs-dismiss="modal">
                            <img id="btnFecharModalSite" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                        </button>
                        <button type="submit" class="btnFechar">
                            <img id="btnSalvarSite" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fim Modal Site -->

        <?php
            if($_SESSION['perfil'] == 'professor'){
        ?>
            <div class="espaco"></div>
            <div class="accordion" id="accordionHorario">
                <div class="accordion-item" id="itemHorario">
                    <button id="btnHorario" class="accordion accordionHorario" data-bs-toggle="collapse" data-bs-target="#collapseHorario" aria-expanded="true" aria-controls="collapseHorario">
                        <div id="horarioLabel">
                            <img id="iconHorario" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
                            <label id="lblHorario" class="labelaccordion">Horário </label>
                        </div>
                    </button>
                    <div id="collapseHorario" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#btnHorario">
                        <div class="btnAttHoras">
                            <div class="btnAtualizarHoras">Atualizar Horas</div>
                        </div>
                        <div id="conteudoHorario">
                            <div class="diaSemana">
                                <div id="domingo">
                                    <div id="cabecalhoDomingo" class="cabecalhoHorario">
                                        <h3 id="tituloDomingo">Domingo</h3>
                                        <label id="deDomingo">de: </label>
                                        <input type="text" id="inputDeDomingo" value="08:00" class="inputHora" >
                                        <label id="ateDomingo">até: </label>
                                        <input type="text" id="inputAteDomingo" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderDomingo" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="segunda">
                                    <div id="cabecalhoSegunda" class="cabecalhoHorario">
                                        <h3 id="tituloSegunda">Segunda-Feira</h3>
                                        <label id="deSegunda">de: </label>
                                        <input type="text" id="inputDeSegunda" value="08:00" class="inputHora" >
                                        <label id="ateSegunda">até: </label>
                                        <input type="text" id="inputAteSegunda" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderSegunda" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="terca">
                                    <div id="cabecalhoTerca" class="cabecalhoHorario">
                                        <h3 id="tituloTerca">Terça-Feira</h3>
                                        <label id="deTerca">de: </label>
                                        <input type="text" id="inputDeTerça" value="08:00" class="inputHora" >
                                        <label id="ateTerca">até: </label>
                                        <input type="text" id="inputAteTerça" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderTerça" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="quarta">
                                    <div id="cabecalhoQuarta" class="cabecalhoHorario">
                                        <h3 id="tituloQuarta">Quarta-Feira</h3>
                                        <label id="deQuarta">de: </label>
                                        <input type="text" id="inputDeQuarta" value="08:00" class="inputHora" >
                                        <label id="ateQuarta">até: </label>
                                        <input type="text" id="inputAteQuarta" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderQuarta" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="quinta">
                                    <div id="cabecalhoQuinta" class="cabecalhoHorario">
                                        <h3 id="tituloQuinta">Quinta-Feira</h3>
                                        <label id="deQuinta">de: </label>
                                        <input type="text" id="inputDeQuinta" value="08:00" class="inputHora" >
                                        <label id="ateQuinta">até: </label>
                                        <input type="text" id="inputAteQuinta" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderQuinta" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sexta">
                                    <div id="cabecalhoSexta" class="cabecalhoHorario">
                                        <h3 id="tituloSexta">Sexta-Feira</h3>
                                        <label id="deSexta">de: </label>
                                        <input type="text" id="inputDeSexta" value="08:00" class="inputHora" >
                                        <label id="ateSexta">até: </label>
                                        <input type="text" id="inputAteSexta" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderSexta" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sabado">
                                    <div id="cabecalhoSabado" class="cabecalhoHorario">
                                        <h3 id="tituloSabado">Sábado</h3>
                                        <label id="deSabado">de: </label>
                                        <input type="text" id="inputDeSábado" value="08:00" class="inputHora" >
                                        <label id="ateSabado">até: </label>
                                        <input type="text" id="inputAteSábado" value="17:00" class="inputHora" >
                                    </div>
                                    <div class="range">
                                        <div id="sliderSábado" class="slider-range"></div>
                                        <div class="lblRange">
                                            <div class="inicioHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaInicial">06:00</label>
                                            </div>
                                            <div class="almocoHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaAlmoco">12:00</label>
                                            </div>
                                            <div class="finalHour">
                                                <div class="verticalRow"></div>
                                                <label class="horaFinal">18:00</label>
                                            </div>
                                            <div class="verticalRow end"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btnAttHoras">
                            <div class="btnAtualizarHoras">Atualizar Horas</div>
                        </div>
                        <br><br>
                    </div>
                </div>
            </div>
        <?php
            }
        ?>
        <div class="espaco"></div>
        <div class="footer">
            <div class="footer-inner">
                <div class="container">
                    <div class="row">
                        <div class="span12" id="footerInfo">
                            &copy; 2023 <a href="#">Grupo Cittius</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="js/jquery-1.7.2.min.js"></script>
        <script src="js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>
        <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>

        <script src="js/bootstrap.js"></script>
        <script src="js/base.js"></script>
        <script src="js/myjs/helper.js"></script>
        <script type="module" src="js/conteudo.js"></script>

</body>

</html>