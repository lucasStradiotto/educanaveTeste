<?php
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>Mensagens - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="js/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">
    <link href="css/mensagem.css" rel="stylesheet">
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
        <?php
            if($_SESSION['perfil'] == 'professor') {
        ?>
        <input type="text" class="hidden" id="idProfSessao" value="<?= $_SESSION['idProfessor'] ?>">
        <?php
            } else {
        ?>
        <input type="text" class="hidden" id="idProfSessao" value="admin">
        <?php
            }
        ?>
        <div class="accordion" id="accordionMensagem">
            <div class="accordion-item" id="itemMensagem">
                <button id="btnMensagem" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagem" aria-expanded="true" aria-controls="collapseMensagem">
                    <h2 class="tituloMsg" id="tituloMsgQtd">0 Notificações</h2>
                    <div class="iconesOnOff">
                        <img id="iconeOnNotificacoes" src="assets/on.png" alt="Mensagem Disponível">
                        <img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">
                    </div>
                </button>
                <div id="collapseMensagem" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#btnMensagem">
                    <div class="conteudoMensagem" id="conteudoNotificacao">
                        <h3>Nenhuma novidade!</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="espaco"></div>
        <div id="conteudoJogo" class="conteudoNotificacaoDiv">

        </div>
        <div id="conteudoEbook" class="conteudoNotificacaoDiv">

        </div>
        <div id="conteudoHibrido" class="conteudoNotificacaoDiv">

        </div>
        <div id="conteudoMusica" class="conteudoNotificacaoDiv">

        </div>
        <div id="conteudoVideo" class="conteudoNotificacaoDiv">

        </div>
        <div id="conteudoSite" class="conteudoNotificacaoDiv">

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
    <script src="js/Turgeson-fogLoader-c59296d/jquery.fogLoader.1.1.2.min.js"></script>

    <script src="js/bootstrap.js"></script>
    <script src="js/base.js"></script>
    <script src="js/myjs/helper.js"></script>
    <script src="js/mensagens.js"></script>

</body>
</html>