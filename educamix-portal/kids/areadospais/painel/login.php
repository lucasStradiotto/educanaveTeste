<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="utf-8">
    <title>Entrar - Educamix Kids</title>
    <link rel="shortcut icon" href="../../images/favicon.ico">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
	<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />

	<link href="../css/font-awesome.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
	<link href="../css/style.css" rel="stylesheet" type="text/css">
	<link href="../css/pages/painellogin.css" rel="stylesheet" type="text/css">

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
			<a class="brand" href="../../index.html">
				Educamix Kids				
			</a>		
			<div class="nav-collapse">
				<ul class="nav pull-right">
					<li class="">						
						<a href="../inicio.php" class="">
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
		<form action="?op=logar" method="post">
			<h1>Administrador</h1>		
            <p id="showError" style="color: red"><?php echo $erro ?></p>
			<div class="login-fields">

				<div class="field">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" value="" placeholder="Email" class="login username-field" />
				</div> <!-- /field -->
				
				<div class="field">
					<label for="senha">Senha:</label>
					<input type="password" id="senha" name="senha" value="" placeholder="senha" class="login password-field"/>
				</div> <!-- /password -->
				
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
				
				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">Lembrar</label>
				</span>
									
				<!--<button class="button btn btn-success btn-large">Entrar</button>-->

                <input type="submit" class="button btn btn-success btn-large" value="Entrar" id="btnLogin">
				
			</div> <!-- .actions -->
		</form>
	</div> <!-- /content -->
</div> <!-- /account-container -->








<script src="../js/jquery-1.7.2.min.js"></script>
<script src="../js/bootstrap.js"></script>
<script src="../js/myjs/helper.js"></script>
<script src="../js/myjs/singin.js"></script>

</body>

</html>
