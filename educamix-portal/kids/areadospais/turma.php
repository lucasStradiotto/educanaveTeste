<?php
require_once('php/verificalogin.php');
require_once('php/verificaprofessor.php');
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
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="css/font-awesome.css" rel="stylesheet">
    <link href="css/turma.css" rel="stylesheet">
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
			if($_SESSION['perfil'] == 'professor'){
		?>
				<div class="accordion" id="accordionturma">
					<div class="accordion-item" id="itemTurma">
						<button id="btnTurma" class="accordion accordionTurma" data-bs-toggle="collapse" data-bs-target="#collapseTurma" aria-expanded="true" aria-controls="collapseTurma">
							<img id="iconTurma" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
							<label id="lblTurma" class="labelaccordion">Turmas</label>
						</button>
						<div id="collapseTurma" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionturma">
							<div id="btnMaisTurma">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addTurmas">
									<img id="btnAddTurma" src="assets/botao-adicionar.png" alt="botao adicionar">
								</button>
							</div>
							<input type="text" class="hidden" id="idProfSessao" value="<?= $_SESSION['idProfessor'] ?>">
							<div id="conteudoTurma">
								
							</div>
						</div>
					</div>
					<br>
				</div>
				<br><br><br>
				<div class="accordion" id="accordionaluno">	
					<div class="accordion-item" id="itemAluno">
						<button id="btnAluno" class="accordion accordionTurma" data-bs-toggle="collapse" data-bs-target="#collapseAluno" aria-expanded="true" aria-controls="collapseAluno">
							<img id="iconAluno" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
							<label id="lblAluno" class="labelaccordion">Alunos</label>
						</button>
						<div id="collapseAluno" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionaluno">
							<div id="pesquisar">
								<img src="assets/barra-de-pesquisa.png" alt="pesquisa">
								<input type="text" name="pesquisaAluno" id="pesquisaAluno" placeholder="Pesquisar..." disabled>
							</div>
							<div>
								<hr>
							</div>
							<div id="Alunos">
								<button id="btnMaisAluno" type="button" class="btn" disabled>
									<img src="assets/botao-adicionar.png" alt="botao adicionar">
								</button>
								<div id="optionsAluno">
									<button id="AddAlunoOpt">Adicionar Aluno</button>
									<button id="AddAlunoLoteOpt" data-bs-toggle="modal" data-bs-target="#addAlunoLote">Adicionar em Lote</button>
									<button id="AddAlunoaTurma">Adicionar Aluno a Turma</button>
								</div>
								<div id="conteudoAluno">
									<h1 id="selecionarTurma">Selecione uma Turma Acima</h1>
								</div>
							</div>
							<div>
								<hr>
							</div>
						</div>
					</div>
				</div>
		<?php
			} else if($_SESSION['perfil'] == 'admin'){
		?>
			<input type="text" class="hidden" id="idProfSessao" value="">
			<div class="accordion" id="accordionProfessor">
				<div class="accordion-item" id="itemProf">
					<button id="btnProf" class="accordion accordionTurma" data-bs-toggle="collapse" data-bs-target="#collapseProf" aria-expanded="true" aria-controls="collapseProf">
						<img id="iconProf" class="accordiontitle" src="assets/local-titulo.png" alt="Local-Título">
						<label id="lblProf" class="labelaccordion">Professores</label>
					</button>
					<div id="collapseProf" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionturma">
						<div id="btnMaisProf">
							<button type="button" class="btn">
								<img id="btnAddProf" src="assets/botao-adicionar.png" alt="botao adicionar">
							</button>
						</div>
						<div id="conteudoProf">
							<table class="w3-striped w3-bordered w3-hoverable" id="tableProf">
								<tr id="tableTitleLine">
									<th id="thID">ID</th>
									<th id="thNome">Nome</th>
									<th id="thEmail">E-mail</th>
									<th id="thPerfil">Perfil</th>
									<th id="thCodigo">Código</th>
									<th id="thAcoes">Ações</th>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<br>
			</div>
		<?php
			}
		?>

		<div class="modal" tabindex="-1" id="addTurmas">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModal">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModal">
						<h1 id="h1Turma">Criar Turma</h1>
					</div>
					<div class="modal-body" id="conteudoModal">
						
					<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
						<div class="carousel-indicators" id="carouselIndicators">
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 1"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src="assets/turma01.png" class="d-block w-100" alt="turma01">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma02.png" class="d-block w-100" alt="turma02">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma03.png" class="d-block w-100" alt="turma03">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma04.png" class="d-block w-100" alt="turma04">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma05.png" class="d-block w-100" alt="turma05">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma06.png" class="d-block w-100" alt="turma06">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma07.png" class="d-block w-100" alt="turma07">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma08.png" class="d-block w-100" alt="turma08">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma09.png" class="d-block w-100" alt="turma09">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma10.png" class="d-block w-100" alt="turma10">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma11.png" class="d-block w-100" alt="turma11">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma12.png" class="d-block w-100" alt="turma12">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item">
								<img src="assets/turma13.png" class="d-block w-100" alt="turma13">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true">
								<img id="setaEsquerdaTurma" src="assets/seta-cima.png" alt="Seta Esquerda">
							</span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true">
								<img id="setaDireitaTurma" src="assets/seta-baixa.png" alt="Seta Direita">
							</span>
							<span class="visually-hidden">Next</span>
						</button>
						</div>

					</div>
					<div id="dadosTurma">
						<div class="divInputTurma" id="divInputTurmaNome">
							<label id="lblNomeTurma">Nome: </label>
							<input type="text" id="nomeTurma">
						</div>
						<div class="divInputTurma" id="divInputTurmaMundo">
							<label id="lblMundoTurma">Mundo: </label>
							<select name="mundoTurma" id="mundoTurma">
								<option value="0">Selecione um Mundo</option>
								<option value="5">Mundo 5</option>
							</select>
						</div>
					</div>
					<div class="modal-footer" id="footerModal">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalAddTurma" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen">
							<img id="btnSalvarNovaTurma" src="assets/botao-adicionar.png" alt="Adicionar" class="btnSalvarModal">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="salvarTurma">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalSalvar">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalSalvar">
						<h1 id="h1TurmaSalvar">Turma</h1>
					</div>
					<div class="modal-body" id="conteudoModalSalvar">

					</div>
					<div id="dadosTurmaSalvar">
						<div class="divInputTurmaSalvar">
							<label id="lblNomeTurmaSalvar">Nome: </label>
							<label id="nomeTurmaSalvar"></label>
						</div>
						<div class="divInputTurmaSalvar">
							<label id="lblMundoTurmaSalvar">Mundo: </label>
							<label id="mundoTurmaSalvar"></label>
						</div>
					</div>
					<div class="modal-footer" id="footerModalSalvar">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalSalvar" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen">
							<img id="btnSalvarNovaTurmaSalvar" src="assets/engre.png" alt="Adicionar" class="btnSalvarModal">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="editTurma">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalEditTurma">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalEditTurma">
						<h1 id="h1EditTurma"></h1>
					</div>
					<div class="modal-body" id="conteudoModalEditTurma">
						
					<div id="carouselExampleCaptions3" class="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
						<div class="carousel-indicators" id="carouselIndicatorsEditTurma">
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="3" aria-label="Slide 4"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="4" aria-label="Slide 5"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="5" aria-label="Slide 6"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="6" aria-label="Slide 7"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="7" aria-label="Slide 8"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="8" aria-label="Slide 9"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="9" aria-label="Slide 10"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="10" aria-label="Slide 11"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="11" aria-label="Slide 12"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="12" aria-label="Slide 13"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="13" aria-label="Slide 1"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item editTurma active" id="item-turma01">
								<img src="assets/turma01.png" class="d-block w-100" alt="turma01">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma02">
								<img src="assets/turma02.png" class="d-block w-100" alt="turma02">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma03">
								<img src="assets/turma03.png" class="d-block w-100" alt="turma03">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma04">
								<img src="assets/turma04.png" class="d-block w-100" alt="turma04">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma05">
								<img src="assets/turma05.png" class="d-block w-100" alt="turma05">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma06">
								<img src="assets/turma06.png" class="d-block w-100" alt="turma06">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma07">
								<img src="assets/turma07.png" class="d-block w-100" alt="turma07">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma08">
								<img src="assets/turma08.png" class="d-block w-100" alt="turma08">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma09">
								<img src="assets/turma09.png" class="d-block w-100" alt="turma09">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma10">
								<img src="assets/turma10.png" class="d-block w-100" alt="turma10">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma11">
								<img src="assets/turma11.png" class="d-block w-100" alt="turma11">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma12">
								<img src="assets/turma12.png" class="d-block w-100" alt="turma12">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
							<div class="carousel-item editTurma" id="item-turma13">
								<img src="assets/turma13.png" class="d-block w-100" alt="turma13">
								<div class="carousel-caption d-none d-md-block">
								</div>
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true">
								<img id="setaEsquerdaEditTurma" src="assets/seta-cima.png" alt="Seta Esquerda">
							</span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true">
								<img id="setaDireitaEditTurma" src="assets/seta-baixa.png" alt="Seta Direita">
							</span>
							<span class="visually-hidden">Next</span>
						</button>
						</div>

					</div>
					<div id="dadosEditTurma">
						<div class="divInputTurma" id="divInputEditTurmaNome">
							<label id="lblNomeTurma">Nome: </label>
							<input type="text" id="nomeTurmaEditTurma">
						</div>
						<div class="divInputTurma" id="divInputEditTurmaMundo">
							<label id="lblMundoTurma">Mundo: </label>
							<select name="mundoTurmaEditTurma" id="mundoTurmaEditTurma">
								<option value="0">Selecione um Mundo</option>
								<option value="5">Mundo 5</option>
							</select>
						</div>
					</div>
					<div class="modal-footer" id="footerModalEditTurma">
						<img src="assets/Lixeira.png" alt="Deletar" id="deletarTurma">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalEditTurma" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen">
							<img id="btnSalvarEditTurma" src="assets/botao-adicionar.png" alt="Adicionar" class="btnSalvarModal">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="addAluno">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalAddAluno">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalAddAluno">
						<h1 id="h1AddAluno">Adicionar Aluno</h1>
					</div>
					<div id="conteudoModalAluno">
						<div id="dadosIcone">
							<div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
								<div class="carousel-indicators" id="carouselIndicatorsAluno">
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3" aria-label="Slide 4"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="4" aria-label="Slide 5"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="5" aria-label="Slide 6"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="6" aria-label="Slide 7"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="7" aria-label="Slide 8"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="8" aria-label="Slide 9"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="9" aria-label="Slide 10"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="10" aria-label="Slide 11"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="11" aria-label="Slide 12"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="12" aria-label="Slide 13"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="13" aria-label="Slide 14"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="14" aria-label="Slide 15"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="15" aria-label="Slide 1"></button>
								</div>
								<div class="carousel-inner">
									<div class="carousel-item active" id="item-aluno01">
										<img src="assets/aluno01.png" class="d-block w-100" alt="aluno01">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno02">
										<img src="assets/aluno02.png" class="d-block w-100" alt="aluno02">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno03">
										<img src="assets/aluno03.png" class="d-block w-100" alt="aluno03">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno04">
										<img src="assets/aluno04.png" class="d-block w-100" alt="aluno04">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno05">
										<img src="assets/aluno05.png" class="d-block w-100" alt="aluno05">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno06">
										<img src="assets/aluno06.png" class="d-block w-100" alt="aluno06">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno07">
										<img src="assets/aluno07.png" class="d-block w-100" alt="aluno07">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno08">
										<img src="assets/aluno08.png" class="d-block w-100" alt="aluno08">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno09">
										<img src="assets/aluno09.png" class="d-block w-100" alt="aluno09">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno10">
										<img src="assets/aluno10.png" class="d-block w-100" alt="aluno10">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno11">
										<img src="assets/aluno11.png" class="d-block w-100" alt="aluno11">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno12">
										<img src="assets/aluno12.png" class="d-block w-100" alt="aluno12">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno13">
										<img src="assets/aluno13.png" class="d-block w-100" alt="aluno13">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno14">
										<img src="assets/aluno14.png" class="d-block w-100" alt="aluno14">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item" id="item-aluno15">
										<img src="assets/aluno15.png" class="d-block w-100" alt="aluno15">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true">
										<img id="setaEsquerdaAluno" src="assets/seta-cima.png" alt="Seta Esquerda">
									</span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true">
										<img id="setaDireitaAluno" src="assets/seta-baixa.png" alt="Seta Direita">
									</span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
						<div id="dadosAluno">
							<div class="formAluno" id="formNomeAluno">
								<label id="lblNomeAluno">Nome: </label>
								<div id="inputNomeAluno" class="inputCadAluno">
									<input type="text" id="nomeAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno" id="formRespAluno">
								<label id="lblResponsavelAluno">Responsável: </label>
								<div id="inputNomeRespAluno" class="inputCadAluno">
									<input type="text" id="responsavelAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno" id="formNascAluno">
								<label id="lblNascimentoAluno">Nascimento: </label>
								<div id="inputDataAluno" class="inputCadAluno">
									<input type="date" id="nascimentoAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno" id="formGeneroAluno">
								<label id="lblGeneroAluno">Gênero: </label>
								<div id="inputGeneroAluno" class="inputCadAluno">
									<select id="generoAluno" class="inputForm">
										<option value="0">Selecione um Gênero</option>
										<option value="1">Masculino</option>
										<option value="2">Feminino</option>
									</select>
								</div>
							</div>
							<div class="formAluno" id="formTurmaAluno">
								<label id="lblTurmaAluno">Turma: </label>
								<div id="inputTurmaAluno" class="inputCadAluno">
								<select id="turmaAluno" class="inputForm">
									<option value="0">Selecione uma turma</option>
								</select>
								</div>
							</div>
							<div class="formAluno" id="formObsAluno">
								<label id="lblObs">Observações: </label>
								<div id="inputObsAluno" class="inputCadAluno">
									<textarea id="observacoesAluno" cols="30" rows="5"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer" id="footerModalAluno">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalAluno" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen">
							<img id="btnSalvarNovoAluno" src="assets/botao-adicionar.png" alt="Adicionar">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="modalSalvarAluno">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalAlunoSalvar">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalAlunoSalvar">
						<h1 id="h1AlunoSalvar">Aluno(a) </h1>
					</div>
					<div id="bodyModal">
						<div class="modal-body" id="conteudoModalAlunoSalvar">
							
						</div>
						<div id="dadosAlunoSalvar">
							<div class="formAluno">
                                <label id="lblNomeAlunoSalvar">Nome: </label>
                                <label id="nomeAlunoSalvar"></label>
                             </div>
                             <div class="formAluno">
                                <label id="lblResponsavelAlunoSalvar">Responsável: </label>
                                <label id="responsavelAlunoSalvar"></label>
                             </div>
                             <div class="formAluno">
                                <label id="lblNascimentoAlunoSalvar">Nascimento: </label>
                                <label id="nascimentoAlunoSalvar"></label>
                             </div>
                             <div class="formAluno">
                                <label id="lblGeneroAlunoSalvar">Gênero: </label>
                                <label id="generoAlunoSalvar"></label>
                             </div>
                             <div class="formAluno">
                                <label id="lblTurmaAlunoSalvar">Turma: </label>
                                <label id="turmaAlunoSalvar"></label>
                             </div>
                             <div class="formAluno">
                                <label id="lblObssalvar">Observações: </label>
                                <label id="obsSalvar"></label>
                             </div>
						</div>
					</div>
					<div class="modal-footer" id="footerModalSalvarAluno">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalSalvarAluno" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen">
							<img id="btnSalvarNovoAlunoSalvar" src="assets/botao-adicionar.png" alt="Adicionar" >
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="editarAluno">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalEditAluno">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalEditAluno">
						<h1 id="h1EditAluno"></h1>
					</div>
					<div id="conteudoModalEditAluno">
						<div id="dadosEditIcone">
							<div id="carouselExampleCaptions4" class="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
								<div class="carousel-indicators" id="carouselIndicatorsEditAluno">
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="1" aria-label="Slide 2"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="2" aria-label="Slide 3"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="3" aria-label="Slide 4"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="4" aria-label="Slide 5"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="5" aria-label="Slide 6"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="6" aria-label="Slide 7"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="7" aria-label="Slide 8"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="8" aria-label="Slide 9"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="9" aria-label="Slide 10"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="10" aria-label="Slide 11"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="11" aria-label="Slide 12"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="12" aria-label="Slide 13"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="13" aria-label="Slide 14"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="14" aria-label="Slide 15"></button>
									<button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="15" aria-label="Slide 1"></button>
								</div>
								<div class="carousel-inner">
									<div class="carousel-item edit-Aluno active" id="item-edit-aluno01">
										<img src="assets/aluno01.png" class="d-block w-100" alt="aluno01">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno02">
										<img src="assets/aluno02.png" class="d-block w-100" alt="aluno02">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno03">
										<img src="assets/aluno03.png" class="d-block w-100" alt="aluno03">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno04">
										<img src="assets/aluno04.png" class="d-block w-100" alt="aluno04">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno05">
										<img src="assets/aluno05.png" class="d-block w-100" alt="aluno05">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno06">
										<img src="assets/aluno06.png" class="d-block w-100" alt="aluno06">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno07">
										<img src="assets/aluno07.png" class="d-block w-100" alt="aluno07">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno08">
										<img src="assets/aluno08.png" class="d-block w-100" alt="aluno08">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno09">
										<img src="assets/aluno09.png" class="d-block w-100" alt="aluno09">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno10">
										<img src="assets/aluno10.png" class="d-block w-100" alt="aluno10">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno11">
										<img src="assets/aluno11.png" class="d-block w-100" alt="aluno11">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno12">
										<img src="assets/aluno12.png" class="d-block w-100" alt="aluno12">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno13">
										<img src="assets/aluno13.png" class="d-block w-100" alt="aluno13">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno14">
										<img src="assets/aluno14.png" class="d-block w-100" alt="aluno14">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
									<div class="carousel-item edit-Aluno" id="item-edit-aluno15">
										<img src="assets/aluno15.png" class="d-block w-100" alt="aluno15">
										<div class="carousel-caption d-none d-md-block">
										</div>
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true">
										<img id="setaEsquerdaEditAluno" src="assets/seta-cima.png" alt="Seta Esquerda">
									</span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true">
										<img id="setaDireitaEditAluno" src="assets/seta-baixa.png" alt="Seta Direita">
									</span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
						<div id="dadosEditAluno">
							<div class="formAluno">
								<input type="text" id="idAlunoEdit" hidden>
								<label id="lblEditNomeAluno">Nome: </label>
								<div class="formEditAluno" id="formEditNome">
									<input type="text" id="nomeEditAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno">
								<label id="lblEditResponsavelAluno">Responsável: </label>
								<div class="formEditAluno" id="formEditResp">
									<input type="text" id="responsavelEditAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno">
								<label id="lblEditNascimentoAluno">Nascimento: </label>
								<div class="formEditAluno" id="formEditData">
									<input type="date" id="nascimentoEditAluno" class="inputForm">
								</div>
							</div>
							<div class="formAluno">
								<label id="lblEditGeneroAluno">Gênero: </label>
								<div class="formEditAluno" id="formEditGenero" class="inputForm">
									<select id="generoEditAluno" class="inputForm">
										<option value="0">Selecione um gênero</option>
										<option value="1">Masculino</option>
										<option value="2">Feminino</option>
									</select>
								</div>
							</div>
							<div class="formAluno">
								<label id="lblEditTurmaAluno">Turma: </label>
								<div class="formEditAluno" id="formEditTurma">
									<select id="turmaEditAluno" class="inputForm">
										<option value="0">Selecione uma turma</option>
									</select>
								</div>
							</div>
							<div class="formAluno">
								<label id="lblEditObs">Observações: </label>
								<div class="formEditAluno" id="formEditObs">
									<textarea id="observacoesEditAluno" cols="30" rows="5"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer" id="footerModalEditAluno">
						<img src="assets/Lixeira.png" alt="deletar Aluno" id="deletarAluno">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalEditAluno" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button id="btnDelAluno" type="button" class="btnOpen" data-bs-toggle="modal">
							<img id="btnSalvarEditAluno" src="assets/botao-adicionar.png" alt="Adicionar">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="addAlunoTurma">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalAddAlunoTurma">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalAddAlunoTurma">
						<h1 id="h1AddAlunoTurma"></h1>
					</div>
					<div id="conteudoModalAddAlunoTurma">
						
					</div>
					<div class="modal-footer" id="footerModalAddAlunoTurma">
						<button type="button" class="btnFechar" data-bs-dismiss="modal">
							<img id="btnFecharModalAddAlunoTurma" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
						</button>
						<button type="button" class="btnOpen" id="btnAddAlunoNaTurma">
							<img id="btnAddAlunoTurma" src="assets/botao-adicionar.png" alt="Adicionar">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="addAlunoLote">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalAddAlunoLote">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalAddAlunoLote">
						<h1 id="h1AddAlunoLote">Adicionar Em Lote</h1>
					</div>
					<div id="conteudoModalAddAlunoLote">
						<h2 id="h2CadastroLote">Baixe o modelo do arquivo para cadastrar varios alunos de uma vez.</h2>
						<h4 id="h4CadastroLote">ATENÇÃO PROFESSOR: Por favor preencher todos os dados dos alunos com atenção, não serão permitidos espaços em brancos, ou alterações nos títulos das colunas. certifique-se de que o arquivo tenha a extensão .csv, outros arquivos não serão aceitos. Preencher a coluna "Gênero" somente com "Masculino  ou Feminino". Preencher a coluna "Avatar" somente com numeros de 1 a 15.</h4>
						<div id="loteContent">
							<div id="modeloCadastroLote">
								<a id="linkArquivoModelo" href="../arquivo/Modelo Cadastro Alunos.csv" download="Modelo Cadastro Alunos.csv">
									<img id="folhadePapel" src="assets/FolhaPepel1.png" alt="folha de papel">
									Modelo Cadastro Alunos
								</a>
							</div>
							<form id="cadastroAlunoLoteForm" enctype="multipart/form-data">
								<div id="envioCadastroLote">
									<label id="lblCadastroLote">Enviar arquivo de cadastro de alunos</label>
									<input id="arquivo" name="arquivo" type="file" accept=".csv" required>
								</div>
								<div class="modal-footer" id="footerModalAddAlunoLote">
									<button type="button" class="btnFechar" data-bs-dismiss="modal">
										<img id="btnFecharModalAddAlunoLote" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
									</button>
									<button type="submit" class="btnOpen">
										<img id="btnAddAlunoLote" src="assets/botao-adicionar.png" alt="Adicionar">
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="addProfessores">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalAddProf">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalAddProf">
						<h1 id="h1AddProf">Novo Professor</h1>
					</div>
					<form id="formProf" method="post">
						<div class="modal-body" id="conteudoAddProf">
							<div id="dadosProf">
								<div class="formField" id="formNome">
									<label class="lblField">Nome: </label>
									<input type="text" id="nomeProf">
								</div>
								<div class="formField" id="formEmail">
									<label class="lblField">E-mail: </label>
									<input type="email" id="emailProf">
								</div>
								<div class="formField" id="formSenha">
									<label class="lblField">Senha: </label>
									<input type="password" id="senha1Prof">
								</div>
								<div class="formField" id="formSenha2">
									<label class="lblField">Confirmar Senha: </label>
									<input type="password" id="senha2Prof">
								</div>
								<div class="formField" id="formPerfil">
									<label class="lblField">Perfil: </label>
									<select id="perfilProf">
										<option value="0">Selecione um Perfil</option>
										<option value="professor">Professor</option>
										<option value="admin">Admin</option>
									</select>
								</div>
							</div>
						</div>
						<div class="modal-footer" id="footerModalAddProf">
							<button type="button" class="btnFechar">
								<img id="btnFecharModalAddProf" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
							</button>
							<button type="submit" class="btnOpen" >
								<img id="btnSalvarNovoProf" src="assets/botao-adicionar.png" alt="Adicionar" class="btnSalvarModal">
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="salvarProf">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalSalvarProf">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalSalvarProf">
						<h1 id="h1SalvarProf">Professor </h1>
					</div>
					<div class="modal-body" id="conteudoSalvarProf">
						<form method="post" id="formAddProf">
							<div id="dadosSalvarProf">
								<div class="formSalvarField">
									<label class="lblField">Nome: </label>
									<input id="nomeCadProf" class="lblDadosSalvarProf" disabled>
								</div>
								<div class="formSalvarField">
									<label class="lblField">E-mail: </label>
									<input id="emailCadProf" class="lblDadosSalvarProf" disabled>
								</div>
								<div class="formSalvarField" hidden>
									<label class="lblField">Senha: </label>
									<input id="senhaCadProf" class="lblDadosSalvarProf" disabled>
								</div>
								<div class="formSalvarField">
									<label class="lblField">Perfil: </label>
									<input id="perfilCadProf" class="lblDadosSalvarProf" disabled>
								</div>
							</div>
							<div class="modal-footer" id="footerSalvarProf">
								<button type="button" class="btnFechar" data-bs-dismiss="modal">
									<img id="btnFecharModalSalvarProf" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
								</button>
								<button type="button" class="btnOpen">
									<img id="btnSalvarProf" src="assets/Check-200-2.png" alt="Adicionar" class="btnSalvarModal">
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="ViewProf">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalViewProf">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalViewProf">
						<h1 id="h1ViewProf">Professor </h1>
					</div>
					<div class="modal-body" id="conteudoModalViewProf">
						<div id="dadosViewProf">
							<div class="formViewField">
								<label class="lblField">Nome: </label>
								<label id="nomeViewProf" class="lblDadosViewProf"></label>
							</div>
							<div class="formViewField">
								<label class="lblField">E-mail: </label>
								<label id="emailViewProf" class="lblDadosViewProf"></label>
							</div>
							<div class="formViewField">
								<label class="lblField">Perfil: </label>
								<label id="perfilViewProf" class="lblDadosViewProf"></label>
							</div>
							<div class="formViewField">
								<label class="lblField">Código: </label>
								<label id="codViewProf" class="lblDadosViewProf"></label>
							</div>
						</div>
						<div class="modal-footer" id="footerViewProf">
							<button type="button" class="btnFechar" data-bs-dismiss="modal">
								<img id="btnFecharModalViewProf" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
							</button>
							<button type="button" class="btnOpen" id="btnViewToEdit" data-bs-dismiss="modal">
								
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" tabindex="-1" id="EditProf">
			<div class="modal-dialog">
				<div class="modal-content" id="fundoModalEditProf">
					<img src="assets/pop-up.png" alt="Modal">
					<div class="modal-header" id="tituloModalEditProf">
						<h1 id="h1EditProf">Editar </h1>
					</div>
					<div class="modal-body" id="conteudoModalEditProf">
						<div id="dadosEditProf">
							<form id="formEditProf" enctype="multipart/form-data">
								<div class="formEditField" id="formEditNome">
									<label class="lblEditField">Nome: </label>
									<input type="text" id="nomeEditProf">
								</div>
								<div class="formEditField" id="formEditEmail">
									<label class="lblEditField">E-mail: </label>
									<input type="email" id="emailEditProf">
								</div>
								<!-- <div class="formEditField">
									<label class="lblEditField">Senha: </label>
									<input type="password" id="senha1EditProf">
								</div>
								<div class="formEditField">
									<label class="lblEditField">Confirmar Senha: </label>
									<input type="password" id="senha2EditProf">
								</div> -->
								<div class="formEditField" id="formEditPerfil">
									<label class="lblEditField">Perfil: </label>
									<select id="perfilEditProf" disabled>
										<option value="0">Selecione um Perfil</option>
										<option value="professor">Professor</option>
										<option value="admin">Admin</option>
									</select>
								</div>
							</form>
						</div>
						<div class="modal-footer" id="footerModalEditProf">
							<button type="button" class="btnFechar" data-bs-dismiss="modal">
								<img id="btnFecharModalEditProf" src="assets/sair.png" alt="Fechar" class="btnFecharModal">
							</button>
							<button type="button" class="btnOpen">
								<img id="btnSalvarEditProf" src="assets/botao-adicionar.png" alt="Adicionar" class="btnSalvarModal">
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
    </div>

	
	<br><br><br>
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
    <script src="js/turma.js"></script>
    
</body>
</html>