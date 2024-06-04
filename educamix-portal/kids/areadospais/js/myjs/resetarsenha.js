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
var verificaInfos = function(email, onError){
    var error = false;
    $.ajax({
        url:"php/cadastro.php?act=verificaLogin",
        type: "POST",
        data: {
            email: email
        },
        success: function(data){
            if(data == ''){
                alert("Email não Cadastrado!");
                location.reload();
            }
        }
    });
    if(!Regex.email.test(email)){
        onError('#email');
        error = true;
    }
    return error;
};
$(document).ready(function(){
    $('#resetarsenha').on('submit', function(e){
        var showError = $('#showError'),
            btnLogin = $('#btn');
        showError.html('');
        e.preventDefault();

        btnLogin.attr('disabled', 'disabled');
        var email = $('#email').val(),

            vI = verificaInfos(email, mostrarErro);

        if(!vI){
            $.ajax(
                "php/resetarsenha.php",
                {
                    type: "POST",
                    data: {
                        email: email
                    }
                })
                .done(function(data){
                    console.log(data);
                    var d = JSON.parse(data);
                    console.log("48: ", data);
                    switch(d.error){
                        case 0: alert("E-mail enviado com Sucesso!");
                            location.href = 'liberaracesso.php';
                            break;
                        case 1: mostrarErro('#email');
                            showError.html('Usuario não cadastrado.');
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