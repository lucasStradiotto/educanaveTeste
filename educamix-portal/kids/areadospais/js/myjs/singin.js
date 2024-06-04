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
var verificaInfos = function(email, senha, onError){
    var error = false;
    if(!Regex.email.test(email)){
        onError('#email');
        error = true;
    }
    // if(senha.length < 6 || senha.length > 12){
    //     onError('#senha');
    //     error = true;
    // }
    return error;
};
$(document).ready(function(){
    $('#login').on('submit', function(e){
        var showError = $('#showError'),
            btnLogin = $('#btnLogin');
        showError.html('');
        e.preventDefault();

        btnLogin.attr('disabled', 'disabled');
        var email = $('#email').val(),
            senha = $('#senha').val(),

            vI = verificaInfos(email, senha, mostrarErro);

        if(!vI){
            $.ajax(
                "php/login.php?act=portal",
                {
                    type: "POST",
                    data: {
                        email: email,
                        senha: senha
                    }
                })
                .done(function(data){
                    var d = JSON.parse(data);
                    switch(d.error){
                        case 0: location.href = 'inicio.php';
                            break;
                        case 1: mostrarErro('#email');
                            showError.html('Usuario não cadastrado.');
                            break;
                        case 2: mostrarErro('#senha');
                            showError.html('Usuario ou senha incorretos.');
                            break;
                        case 3:
                            showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function(error){
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function(){
                    btnLogin.removeAttr('disabled');
                });
        }else{
            btnLogin.removeAttr('disabled');
        }
        return false;
    });
});