<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="utf-8">
    <title>Cadastrar - Educa NAVE</title>
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
					<li class="">						
						<a href="index.php" class="">
							Já possui uma conta? Entre agora
						</a>
						
					</li>
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



<div class="account-container register">
	
	<div class="content clearfix">
		
		<form method="post" id="cadastro">
		
			<h1>Cadastre-se gratuitamente</h1>			
			<p id="showError" style="color: red"></p>
			<div class="login-fields">
				
				<div class="field">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" value="" placeholder="Email" class="login"/>
				</div> <!-- /field -->
                
				<div class="field">
					<label for="senha">Senha:</label>
					<input type="password" maxlength="12" id="senha" name="senha" value="" placeholder="Senha" class="login"/>
				</div> <!-- /field -->
				
				<div class="field">
					<label for="senha2">Confirme a senha:</label>
					<input type="password" maxlength="12" id="senha2" name="senha2" value="" placeholder="Confirmar a senha" class="login"/>
				</div> <!-- /field -->
                
				<div class="field">
					<label for="nome">Nome:</label>
					<input type="text" id="nome" name="nome" value="" placeholder="Nome" class="login" />
				</div> <!-- /field -->

				<div class="field">
					<label for="perfil">Perfil:</label>
					<select type="text" id="perfil" name="perfil" value="" class="login">
						<option value="">Selecione uma Opção</option>
						<option value="admin">Administrador</option>
						<option value="professor">Professor</option>
					</select>
				</div> <!-- /field -->
                
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
				
				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">
                        Aceito <a href="termos.php" target="_blank">os termos e condições.</a>
                    </label>
				</span>
									
				<!--<button class="button btn btn-primary btn-large" id="cadastrar">Cadastrar</button>-->
                <input type="submit" class="button btn btn-primary btn-large" id="cadastrar" value="Cadastrar" disabled>

			</div> <!-- .actions -->
			
		</form>
		
	</div> <!-- /content -->

    <!-- Text Under Box -->
    <div class="login-extra">
        Já possui uma conta? <a href="index.php">Entre com seu email e senha!</a>
    </div> <!-- /login-extra -->
</div> <!-- /account-container -->




<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/myjs/helper.js"></script>
<script src="js/myjs/singup.js"></script>

</body>

</html>
