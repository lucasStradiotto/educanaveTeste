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
 var verificaInfos = function(chave, onError){
    var error = false;
    if(chave == null){
        onError('#chave');
        error = true;
    }
    return error;
};
$(document).ready(function(){
    $('#confirmartoken').on('submit', function(e){
        var showError = $('#showError'),
            btnValToken = $('#btn_valida_token');
        showError.html('');
        e.preventDefault();

        btnValToken.attr('disabled', 'disabled');
        var chave = $('#chave').val(),

            vI = verificaInfos(chave, mostrarErro);

        if(!vI){
            $.ajax(
                "php/liberaracesso.php",
                {
                    type: "POST",
                    data: {
                        chave: chave
                    }
                })
                .done(function(data){
                    console.log(data);
                    var d = JSON.parse(data);
                    switch(d.error){
                        case 0: location.href = 'novasenha.php?chave='+chave;
                            break;
                        case 1: mostrarErro('#chave');
                            showError.html('Token Inválido.');
                            break;
                        case 3:
                            showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function(error){
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function(){
                    btnValToken.removeAttr('disabled');
                });
        }else{
            btnValToken.removeAttr('disabled');
        }
        return false;
    });
});
