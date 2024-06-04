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
                                    $.ajax({
                                        url: "php/attmundoavatar.php?act=getAvatares",
                                        type: "POST",
                                        data: {
                                            id: value.avatar
                                        },
                                        success: function (data) {
                                            let dadosAvatares = JSON.parse(data);
                                            $(dadosAvatares).each(function (index, i){
                                                let cardAluno = '<a class="child childCard" id="cardChild' + item.id + '">' +
                                                '<i class="avatar-img" style="background:url(img/' + i.result[index].link + '/' + i.result[index].nome + '.png)"></i>' +
                                                value.nomeAluno +
                                                '</a>';
                                            $('#alunoRow').append(cardAluno);
                                            });
                                        }
                                    });
                                    
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

                    $.ajax({
                        url: "php/historico.php?act=getjogo1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow1').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow1').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow1').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow2').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow2').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow2').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow3').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow3').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow3').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow4').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow4').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow4').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow5').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow5').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow5').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow6').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow6').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow6').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow7').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow7').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow7').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow8').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow8').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow8').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogo9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRow9').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getebook9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#ebookRow9').append(cardHistorico);
                            });
                        }
                    });

                    $.ajax({
                        url: "php/historico.php?act=getjogorfid9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHistorico = JSON.parse(data);
                            $(dadosHistorico).each(function (index, value) {
                                let cardHistorico = `<i>`+ value.idTurma.length +`</i>`;
                                $('#jogoRfidRow9').append(cardHistorico);
                            });
                        }
                    });
                });
            });
        }
    });
});