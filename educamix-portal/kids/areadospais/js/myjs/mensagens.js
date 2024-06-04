$(document).ready(function(){

    $('.menus').on('click', function(){
        let allMenus = $('.menusSelecionados');
        allMenus.map(function(element, indice){
            let idImgSelecionado = indice.id.split('-');
            $('#'+indice.id).css('display', 'none');
            $('#'+idImgSelecionado[0]+'-').css('display', 'inline-block');
        });
        let idMenu = $(this).context.id;
        $(this).css('display', 'none');
        let idSelecionado = idMenu+'Selecionado';
        $('#'+idSelecionado).css('display', 'inline-block');
    });
    $('.menusSelecionados').on('click', function(){
        let idSelecionado = $(this).context.id;
        let idImg = idSelecionado.split('-');
        $(this).css('display', 'none');
        $('#'+idImg[0]+'-').css('display', 'inline-block');
    });

    $('#menuMensagem-').css('display', 'none');
    $('#menuMensagem-Selecionado').css('display', 'inline-block');

    $('.remove-msg').on('click', function(){
        event.stopPropagation();

        var id = this.dataset.id;
        loading(true);

        $.ajax(
            'https://www.educamix.com.br/kids/areadospais/php/config-mensagem.php?act=excluir',
            {
                type: 'POST',
                data: {
                    id: id
                }
            })
            .done(function(data){
                var data = JSON.parse(data);
                if(data.error == 0){
                    location.reload();
                }else{
                    alert('Ocorreu um erro, tente novamente mais tarde.');
                }
            })
            .fail(function(){
                alert('Ocorreu um erro, tente novamente mais tarde.');
            })
            .always(function(){
                loading(false);
            });
    });
});