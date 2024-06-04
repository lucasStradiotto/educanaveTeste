
$(document).ready(function(){

    let idProfSessao = $('#idProfSessao').val();
    $.ajax({
        url: "php/listarturma.php?act=listarturmaprofessor",
        type: "POST",
        data: {
            idProfSessao: idProfSessao
        },
        success: function (data) {
            let dadosTurma = JSON.parse(data);
            $(dadosTurma).each(function (index, item) {
                let alunos = '<div class="child span2 item" id="divTurma'+ item.id +'">' +
                    '<h2><i class="avatar-img" style="background:url(../images/group.jpg)"></i><button id="btnTurma' + item.id + '" class="btn btn-primary">' + item.nomeTurma + '</button></h2>' +
                    '</div>';
                $('#alunosTurma').append(alunos);
                let idTurma = item.id;
                $('#btnTurma' + idTurma).on('click', function () {
                    if ($('#alunoRow')) {
                        $('#alunoRow').empty();
                        $('.btn').removeClass('btn btn-danger');
                        $('.btn').data('clicked', false);
                        if ($('#btnTurma' + idTurma).data('clicked', true)) {
                            $(this).addClass('btn btn-danger');
                            $(this).removeClass('child');
                        }
                        $.ajax({
                            url: "php/listarturma.php?act=listar",
                            type: "POST",
                            data: {
                                idTurma: idTurma
                            },
                            success: function (data) {
                                let dadosAlunos = JSON.parse(data);
                                $(dadosAlunos).each(function (index, value) {
                                    let cardAluno = '<a class="child childCard" id="cardChild' + item.id + '">' +
                                        '<i class="avatar-img" style="background:url(img/avatar/' + value.sexo + '/' + value.avatar + '.png)"></i>' +
                                        value.nomeAluno +
                                        '</a>';
                                    $('#alunoRow').append(cardAluno);
                                });
                                $('.childCard').on('click', function(){
                                    if($(this).attr('style')){
                                        $(this).removeAttr('style');
                                    } else {
                                        $(this).css('background-color', 'red');
                                    }
                                });
                            }
                        });
                    }
                });
            });
        }
    });
    
    $('.mundo').on('click', function(e){
        e.stopPropagation();
        loading(true);
        var mundo = $(this).data('id');
        $.ajax(
            'php/attmundoavatar.php?act=mundo',
            {
                type:"POST",
                // async:false,
                data:{
                    child:id,
                    mundo:mundo
                }
            }
        )
            .done(function(){location.reload()
             })
            .fail(function(data){alert('Ocorreu um problema')})
            .always(function(){loading(false);});
    });


    $('.avatar').on('click', function(e){
        e.stopPropagation();
        loading(true);
        var avatar = $(this).data('id');
        $.ajax(
            'php/attmundoavatar.php?act=avatar',
            {
                type:"POST",
                // async:false,
                data:{
                    child:id,
                    avatar:avatar
                }
            }
        )
            .done(function(){location.reload()
            })
            .fail(function(data){alert('Ocorreu um problema')})
            .always(function(){loading(false);});
    });
});
