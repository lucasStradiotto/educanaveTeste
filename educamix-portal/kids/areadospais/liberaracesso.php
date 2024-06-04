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
		
		<form action="#" method="post" id="confirmartoken">

			<h1>Confirmar Token</h1>
            
            <p id="showError" style="color: red"></p>
            
			<div class="login-fields">

				Confirme o Token enviado no e-mail.

                <div class="field">
					<label for="chave">Token:</label>
					<input type="text" id="chave" name="chave" value="" placeholder="Token" />
				</div> <!-- /field -->
				
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
                
                <input type="submit" class="button btn btn-success btn-large" value="Validar" id="btn_valida_token" >
				
			</div> <!-- .actions -->
            
		</form>
	</div> <!-- /content -->
	
</div> <!-- /account-container -->



<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/myjs/helper.js"></script>
<script src="js/myjs/liberaracesso.js"></script>

</body>

</html>
