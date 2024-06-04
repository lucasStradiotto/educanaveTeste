$(document).ready(function(){
    $(".select-all").on('click', function(){
        var check = $(this).parent().parent().find('input[type=checkbox]');
        check.attr('checked', 'checked');
        check.trigger('change');
    });

    $(".unselect-all").on('click', function(){
        var check = $(this).parent().parent().find('input[type=checkbox]');
        check.removeAttr('checked');
        check.trigger('change');
    });

    $('.checkbox-jogos').on('change', function(){
        console.log('ok');
        var btn = $(this),
            check = btn.is(':checked'),
            lista = btn.data('id');

        btn.attr('disabled', 'disabled');
        loading(true);
        $.ajax(
            'php/jogos.php?act=atualizarList',
            {
                type:"POST",
                data:{
                    check:check,
                    lista:lista
                }
            })
            .done(function(data){
                console.log(data);
            })
            .fail(function(error){
                console.log(error);
                alert('Ocorreu um erro');
                if(check){
                    btn.removeAttr('checked');
                }else{
                    btn.attr('checked', 'checked');
                }
            })
            .always(function(){
                btn.removeAttr('disabled');
                loading(false);
            });
    });

    //================== ADD JOGO ==================
    $('#btn-add-jogo').on('click', function(){
        var nome = $('#nome-jogo').val();
        var url = $('#url-jogo').val();
        loading(true);

        if(url.toLowerCase().indexOf('play.google') == -1){
            alert("Link inválido, insira um link da google play");
        }else{
            $.ajax(
                'php/jogos.php?act=add',
                {
                    type:"POST",
                    data:{
                        nome: nome,
                        link: url,
                        tipo: "google"
                    }
                }
            )
                .done(function(data){
                    console.log(data);
                    var d = JSON.parse(data);
                    if(d.error == 0){
                        location.reload();
                    }else{
                        alert('Ocorreu um erro');
                    }
                })
                .fail(function(error){
                    console.log(error);
                })
                .always(function(){
                    loading(false);
                });
        }
    });
    //=================== REMOVE SITE ===================
    $('.btn-jogo-remove').on('click', function(){
        var id = this.dataset.id;
        loading(true);
        $.ajax(
            'php/jogos.php?act=remove',
            {
                type:"POST",
                data:{
                    id:id
                }
            }
        )
            .done(function(data){
                console.log(data);
                var d = JSON.parse(data);
                if(d.error == 0){
                    location.reload();
                }else{
                    alert('Ocorreu um erro');
                }
            })
            .fail(function(error){
                console.log(error);
            })
            .always(function(){
                loading(false);
            });
    });

});