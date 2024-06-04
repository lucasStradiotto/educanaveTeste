<?php
require_once('php/verificalogin.php');
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="utf-8">
	<title>Inicio - Educa NAVE</title>
	<link rel="shortcut icon" href="../images/favicon.ico">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
	<link href="css/font-awesome.css" rel="stylesheet">
	<link href="css/inicio.css" rel="stylesheet">
	<link href="js/guidely/guidely.css" rel="stylesheet">
</head>

<body>
	<div class="navbarInicio">	
		<img class="navbarCapa" src="./assets/capa-menu.png" alt="Capa do Menu">
		<img class="navbarLogo" src="./assets/logo-nave.png" alt="Logo Educanave">
	</div>
	<div class="subnavbarInicio">
		<div class="bordaSubMenus">
			<a href="inicio.php"><img class="menus" id="menuEstrela-" src="./assets/menu-estrela-selecao.png" alt="Menu Estrela">
			<img class="menusSelecionados" id="menuEstrela-Selecionado" src="./assets/menu-estrela-selecionado.png" alt="Menu Estrela"></a>
			<a href="turma.php"><img class="menus" id="menuTurma-" src="./assets/menu-turma-selecao.png" alt="Menu Turma">
			<img class="menusSelecionados" id="menuTurma-Selecionado" src="./assets/menu-turma-selecionado.png" alt="Menu Turma"></a>
			<a href="conteudo.php"><img class="menus" id="menuAtividades-" src="./assets/menu-atividades-selecao.png" alt="Menu Atividades">
			<img class="menusSelecionados" id="menuAtividades-Selecionado" src="./assets/menu-atividades-selecionado.png" alt="Menu Atividades"></a>
			<a href="mensagens.php"><img class="menus" id="menuMensagem-" src="./assets/menu-mensagens-selecao.png" alt="Menu Mensagem">
			<img class="menusSelecionados" id="menuMensagem-Selecionado" src="./assets/menu-mensagens-selecionado.png" alt="Menu Mensagem"></a>
			<a href="config.php"><img class="menus" id="menuConfiguracao-" src="./assets/menu-confi-selecao.png" alt="Menu Configuração">
			<img class="menusSelecionados" id="menuConfiguracao-Selecionado" src="./assets/menu-confi-selecionado.png" alt="Menu Configuração"></a>
		</div>
	</div>
	<br><br><br>

	<div class="main">
		<h1>Início</h1>
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

	<script src="js/bootstrap.js"></script>
	<script src="js/base.js"></script>
	<script src="js/inicio.js"></script>
	<script src="js/guidely/guidely.min.js"></script>
</body>

</html>