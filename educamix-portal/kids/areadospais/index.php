<?php
?>
<!DOCTYPE html>
<html lang="pt-br">
  
<head>
    <meta charset="utf-8">
    <title>Entrar - Educa NAVE</title>
    <link rel="shortcut icon" href="../images/favicon.ico">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<link href="css/font-awesome.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/index.css" rel="stylesheet" type="text/css">
	<link href="css/pages/signin.css" rel="stylesheet" type="text/css">
</head>
<body>

	<div class="navbarIndex">
		<img class="navbarCapa" src="./assets/capa-menu.png" alt="Capa do Menu">
		<img class="navbarLogo" src="./assets/logo-nave.png" alt="Logo Educanave">
	</div>

	<div class="account-container">
		<div class="content clearfix">
			<form action="#" method="post" id="login">
				<h1>Acesso</h1>
				<p id="showError" style="color: red"></p>
				<div class="login-fields">
					<div class="field">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" value="" placeholder="Email" class="login username-field" />
					</div>
					<div class="field">
						<label for="senha">Senha:</label>
						<input type="password" id="senha" name="senha" value="" placeholder="senha" class="login password-field"/>
					</div>
				</div>
				<div class="login-actions">
					<span class="login-checkbox">
						<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
						<label class="choice" for="Field">Lembrar</label>
					</span>
					<input type="submit" class="button btn btn-success btn-large" value="Entrar" id="btnLogin">
				</div>
				<div class="login-extra">
					<a href="resetarsenha.php">Recuperar senha</a>
				</div>
			</form>
		</div>
	</div>
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
<script src="js/bootstrap.js"></script>
<script src="js/myjs/helper.js"></script>
<script src="js/myjs/singin.js"></script>

</body>
</html>