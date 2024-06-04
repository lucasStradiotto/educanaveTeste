/**
 *
 */
var mostrarErro = function(elemento){
    var element = $(elemento);
    element.addClass('error');
    element.bind('click.error', function(){
        $(this).removeClass('error');
        $(this).unbind('.error');
    });
};
/**
 *
 */
var verificaCadastro = function(email, senha, senha2, nome, onError){
    var error = false;
    if(!Regex.email.test(email)){
        onError('#email');
        error = true;
    }
    if(senha.length < 6 || senha.length > 12){
        onError('#senha');
        error = true;
    }
    if(senha != senha2 || senha2.length <6 || senha.length > 12){
        onError('#senha2');
        error = true;
    }
    if(nome.length < 2){
        onError('#nome');
        error = true;
    }
    if($('#Field').is(':checked') == false){
        $('#showError').html('Voce não pode se cadastrar se não aceitar nossos termos.');
        onError('#Field');
        error = true;
    }
    return error;
};
$(document).ready(function(){
    $('#cadastro').on('submit', function(e){
        var showError = $('#showError'),
            btnCadastrar = $('#cadastrar');
        showError.html('');
        e.preventDefault();
        btnCadastrar.attr('disabled', 'disabled');
        var email = $('#email').val(),
            senha = $('#senha').val(),
            senha2 = $('#senha2').val(),
            nome = $('#nome').val(),
            perfil = $('#perfil option:selected').val(),

            vC = verificaCadastro(email, senha, senha2, nome, mostrarErro);

        if(!vC){
            $.ajax(
                "php/cadastro.php",
                {
                    type: "POST",
                    data: {
                        email: email,
                        senha: senha,
                        senha2: senha2,
                        nome: nome,
                        perfil: perfil,
                    }
                })
                .done(function(data){
		            var d = JSON.parse(data);
                        switch(d.error){
                            case 0:
                                alert('Usuário Cadastrado com Sucesso!');
                                location.href = 'index.php';
                                break;
                            case 1: mostrarErro('#email');
                                showError.html('Email inválido.');
                                break;
                            case 2: mostrarErro('#senha');
                                showError.html('Senha inválida.');
                                break;
                            case 3: mostrarErro('#senha2');
                                showError.html('Senhas não são iguais.');
                                break;
                            case 4: mostrarErro('#nome');
                                showError.html('Nome Inválido.');
                                break;
                            case 5:
                                showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                break;
                        }
                }).fail(function(error){
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function(){
                    btnCadastrar.removeAttr('disabled');
                });
        }else{
            btnCadastrar.removeAttr('disabled');
        }
        return false;
    });
});
