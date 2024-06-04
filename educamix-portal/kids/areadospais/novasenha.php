<?php
require_once('php/conexao.php');
?>
<!DOCTYPE html>
<html lang="en">
  
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
    <link href="css/pages/signin.css" rel="stylesheet" type="text/css">

</head>

<body>

    <div class="footerkids">
        <div class="inner">
            <div class="container clearfix">

                <div class="copyright">
                    <span class="copy">2022</span>
                    <a href="#">Educa NAVE</a> - Todos os direitos reservados
                </div>

            </div>
        </div>
    </div>


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
					
					<!-- <li class="">						
						<a href="signup.php" class="">
							Não tem uma conta?
						</a>
						
					</li> -->
					
					<li class="">						
						<a href="inicio.php" class="">
							<i class="icon-chevron-left"></i>
							Inicio
						</a>
						
					</li>
				</ul>
				
			</div><!--/.nav-collapse -->	
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->



<div class="account-container">
	
	<div class="content clearfix">
		
		<form action="#" method="post" id="novasenha">

			<h1>Cadastrar Nova Senha</h1>
            
            <p id="showError" style="color: red"></p>
			<?php
				$conn = new conecta();
				$chave = $_GET['chave'];
				$emailUsuario = $conn->getEmailUsuarioToken($_GET['chave']);
				$idUsuario = $emailUsuario[0]['idUsuario'];
			?>
				<input class="hidden" type="text" id="idUsuario" name="idUsuario" value="<?= $idUsuario ?>"/>
				<input class="hidden" type="text" id="chave" name="chave" value="<?= $chave ?>"/>
            
			<div class="login-fields">

				Digite a Nova Senha e Confirme.
				
                <div class="field">
					<label for="senha">Nova Senha:</label>
					<input type="password" maxlength="12" id="senha" name="senha" value="" placeholder="Nova Senha" class="login" />
				</div> <!-- /field -->

				<div class="field">
					<label for="senha2">Confirme a senha:</label>
					<input type="password" maxlength="12" id="senha2" name="senha2" value="" placeholder="Confirmar a senha" class="login" />
				</div> <!-- /field -->
				
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
				
				<!--<button class="button btn btn-success btn-large">Entrar</button>-->
                
                <input type="submit" class="button btn btn-success btn-large" value="Salvar" id="btn_salvar" >
				
			</div> <!-- .actions -->
            
		</form>
	</div> <!-- /content -->
	
</div> <!-- /account-container -->



<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/myjs/helper.js"></script>
<script src="js/myjs/novasenha.js"></script>

</body>

</html>
