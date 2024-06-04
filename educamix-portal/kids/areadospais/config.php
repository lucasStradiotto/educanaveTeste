<?php
require_once('php/verificalogin.php');
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
header('Content-Type: text/html; charset=UTF-8');

?>
<!DOCTYPE html>
<html lang="pt-br">

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
    <link href="css/config.css" rel="stylesheet">
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
<br>
<br>
<br>

    <div class="main">
        
        <input type="text" id="sessaoProf" value="<?= $_SESSION['perfil'] ?>" hidden>
        <div class="accordion" id="accordionManuais">
            <div class="accordion-item">
                <button class="accordion Menus" data-bs-toggle="collapse" data-bs-target="#collapseManuais" aria-expanded="true" aria-controls="collapseManuais">
                    <h2 class="titleMenu">Manuais</h2>
                </button>
                <div id="collapseManuais" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionManuais">
                    <div class="interiorAccordionManual">
                        <!-- Inicio Sub Accordions -->
                        <div class="accordion" id="accordionManualdeUso">
                            <div class="accordion-item">
                                <button class="accordion SecMenus" data-bs-toggle="collapse" data-bs-target="#collapseManualdeUso" atia-expanded="true" aria-controls="collapseManualdeUso">
                                    <h2 class="titleMenu">Manual de Uso</h2>
                                </button>
                                <div id="collapseManualdeUso" class="accoriond-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionManualdeUso">
                                    <h1 class="h1Iframe">Manual de Uso</h1>
                                    <div class="iframePdfs">
                                        <iframe src="manuais/manual de uso/MANUAL_DE_USO_V2.pdf#toolbar=0" frameborder="0" width="90%" height="900px"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionManualPedagogico">
                            <div class="accordion-item">
                                <button class="accordion Menus" data-bs-toggle="collapse" data-bs-target="#collapseManualPedagogico" atia-expanded="true" aria-controls="collapseManualPedagogico">
                                    <h2 class="titleMenu">Manual Pedagógico</h2>
                                </button>
                                <div id="collapseManualPedagogico" class="accoriond-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionManualPedagogico">
                                    <h1 class="h1Iframe">Manual Pedagógico</h1>
                                    <div class="iframePdfs">
                                        <iframe src="manuais/manual pedagogico/MANUAL_PEDAGOGICO_V1.pdf#toolbar=0" frameborder="0" width="90%" height="900px"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionCatalogoJogos">
                            <div class="accordion-item">
                                <button class="accordion SecMenus" data-bs-toggle="collapse" data-bs-target="#collapseCatalogoJogos" atia-expanded="true" aria-controls="collapseCatalogoJogos">
                                    <h2 class="titleMenu">Catálogo de Jogos</h2>
                                </button>
                                <div id="collapseCatalogoJogos" class="accoriond-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionCatalogoJogos">
                                    <h1 class="h1Iframe">Catálogo de Jogos</h1>
                                    <div class="iframePdfs">
                                        <iframe src="catalogos/catalogo de jogos/CATALOGO_JOGOS_V5.2.pdf#toolbar=0" frameborder="0" width="90%" height="900px"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionCatalogoTecnico">
                            <div class="accordion-item">
                                <button class="accordion Menus" data-bs-toggle="collapse" data-bs-target="#collapseCatalogoTecnico" atia-expanded="true" aria-controls="collapseCatalogoTecnico">
                                    <h2 class="titleMenu">Catálogo Técnico</h2>
                                </button>
                                <div id="collapseCatalogoTecnico" class="accoriond-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionCatalogoTecnico">
                                    <h1 class="h1Iframe">Catálogo Técnico</h1>
                                    <div class="iframePdfs">
                                        <iframe src="catalogos/catalogo tecnico/CATALOGO_TECNICO_V3.pdf#toolbar=0" frameborder="0" width="90%" height="900px"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Fim Sub Accordions -->
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion" id="accordionDocumentos">
            <div class="accordion-item">
                <button class="accordion SecMenus" data-bs-toggle="collapse" data-bs-target="#collapseDocumentos" aria-expanded="true" aria-controls="collapseDocumentos">
                    <h2 class="titleMenu">Documentos</h2>
                </button>
                <div id="collapseDocumentos" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionDocumentos">
                    <div class="interiorAccordion">
                        <?php
                            if($_SESSION['perfil'] == 'admin'){
                        ?>
                        <div class="botaoAdd">
                            <img id="btnAddDocumento" src="assets/botao-adicionar.png" alt="Botão Adicionar" class="btnAddDoc">
                        </div>
                        <?php
                        }
                        ?>
                        <div class="conteudoAccordion" id="conteudoAccordionDiv">
                            <h1 id="documentoVazio">Nenhum Documento disponível.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Menus" id="contato">
            <h2 class="titleMenu">Contato</h2>
        </div>
        <a href="php/logout.php" id="btnSair">
            <div class="SecMenus">
                <h2 class="titleMenu">Sair</h2>
            </div>
        </a>
        <div class="espaco"></div>
    </div>

    <div class="modal" tabindex="-1" id="modalManual">
        <div class="load">
            <img class="iconLoading" src="assets/loading.png" alt="Loading">
        </div>
        <div class="modal-dialog">
            <div class="modal-content" id="fundoModalManual">
                <img src="assets/pop-up.png" alt="Modal">
                <div class="modal-header" id="tituloModalManual">
                    <h1 id="h1Manual">Adicionar Manual</h1>
                </div>
                <div class="modal-body" id="conteudoModalManual">
                    <div class="interiorModal">
                        <h3 class="fraseUpload">Adicione Manuais para os professores aprenderem sobre os conteúdos.</h3>
                        <form enctype="multipart/form-data" id="formManual">
                            <div class="inputFile">
                                <input type="file" id="fileManual" name="fileManual" accept=".pdf" required="required">
                            </div>
                            <div class="modal-footer" id="footerModalManual">
                                <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                    <img id="btnFecharModalManual" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                </button>
                                <button type="submit" class="btnFechar">
                                    <img id="btnSalvarManual" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" id="modalDocumento">
        <div class="load">
            <img class="iconLoading" src="assets/loading.png" alt="Loading">
        </div>
        <div class="modal-dialog">
            <div class="modal-content" id="fundoModalDocumento">
                <img src="assets/pop-up.png" alt="Modal">
                <div class="modal-header" id="tituloModalDocumento">
                    <h1 id="h1Documento">Adicionar Documento</h1>
                </div>
                <div class="modal-body" id="conteudoModalDocumento">
                    <div class="interiorModal">
                        <h3 class="fraseUpload">Adicione Documentos para os professores baixarem.</h3>
                        <form id="formDocumento" enctype="multipart/form-data">
                            <div class="inputFile">
                                <input type="file" id="fileDoc" name="fileDoc" accept=".pdf" required="required">
                            </div>
                            <div class="modal-footer" id="footerModalDocumento">
                                <button type="button" class="btnFechar" data-bs-dismiss="modal">
                                    <img id="btnFecharModalDocumento" src="assets/sair.png" alt="Fechar" class="iconFecharFooter">
                                </button>
                                <button type="submit" class="btnFechar">
                                    <img id="btnSalvarDocumento" src="assets/botao-adicionar.png" alt="Adicionar" class="iconSalvarFooter">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <script src="js/bootstrap.js"></script>
    <script src="js/base.js"></script>

    <script src="js/myjs/helper.js"></script>
    <script src="js/config.js"></script>
    <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>
</body>
</html>