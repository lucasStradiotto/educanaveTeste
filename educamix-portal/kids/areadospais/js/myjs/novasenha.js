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
 var verificaInfos = function(senha, senha2, onError){
    var error = false;
    if(senha.length < 6 || senha.length > 12){
        onError('#senha');
        error = true;
    }
    if(senha != senha2 || senha2.length <6 || senha.length > 12){
        onError('#senha2');
        error = true;
    }
    return error;
};
$(document).ready(function(){
    $('#novasenha').on('submit', function(e){
        var showError = $('#showError'),
            btnSalvar = $('#btn_salvar');
        showError.html('');
        e.preventDefault();

        btnSalvar.attr('disabled', 'disabled');
        var idUsuario = $('#idUsuario').val(),
            senha = $('#senha').val(),
            senha2 = $('#senha2').val(),
            chave = $('#chave').val(),

            vI = verificaInfos(senha, senha2,  mostrarErro);
            console.log(idUsuario, senha, senha2);

        if(!vI){
            $.ajax(
                "php/novasenha.php",
                {
                    type: "POST",
                    data: {
                        idUsuario: idUsuario,
                        senha: senha,
                        senha2: senha2,
                        chave: chave
                    }
                })
                .done(function(data){
                    var d = JSON.parse(data);
                    switch(d.error){
                        case 0: 
                        alert("Senha Salva com Sucesso!");
                        location.href = 'index.php';
                            break;
                        case 1: mostrarErro('#chave');
                            showError.html('Digite uma Senha Válida.');
                            break;
                        case 3:
                            showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function(error){
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function(){
                    btnSalvar.removeAttr('disabled');
                });
            }else{
                btnSalvar.removeAttr('disabled');
            }
            return false;
        });
    });