function negatePermissionMusic() {
    
}

var mostrarErro = function (elemento) {
    var element = $(elemento);
    element.addClass('error');
    element.bind('click.error', function () {
        $(this).removeClass('error');
        $(this).unbind('.error');
    });
};

/// Ambientes 1 ///

$('#formJogo1').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo1').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos1", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook1').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook1').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook1", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido1').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido1')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid1", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 1 ////

/// Ambientes 2 ///

$('#formJogo2').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo2').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos2", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook2').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook2').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook2", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido2').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido2')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid2", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 2 ////

/// Ambientes 3 ///

$('#formJogo3').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo3').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos3", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook3').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook3').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook3", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido3').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido3')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid3", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 3 ////

/// Ambientes 4 ///

$('#formJogo4').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo4').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos4", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook4').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook4').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook4", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido4').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido4')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid4", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 4 ////

/// Ambientes 5 ///

$('#formJogo5').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo5').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos5", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook5').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook5').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook5", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido5').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido5')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid5", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 5 ////

/// Ambientes 6 ///

$('#formJogo6').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo6').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos6", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook6').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook6').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook6", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido6').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido6')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid6", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 6 ////

/// Ambientes 7 ///

$('#formJogo7').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo7').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos7", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook7').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook7').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook7", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido7').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido7')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid7", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 7 ////

/// Ambientes 8 ///

$('#formJogo8').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo8').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos8", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook8').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook8').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook8", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido8').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido8')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid8", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 8 ////

/// Ambientes 9 ///

$('#formJogo9').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileJogo9').files[0]);

    $.ajax(
        "php/jogos.php?act=addJogos9", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formEbook9').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementById('fileEbook9').files[0]);

    $.ajax(
        "php/ebook.php?act=addEbook9", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

$('#formJogoHibrido9').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.load').css('display', 'flex');
    var data = new FormData();
    data.append('file', document.getElementsByName('fileJogoHibrido9')[0].files[0]);

    $.ajax(
        "php/jogorfid.php?act=addJogoRfid9", {
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                if(data == 0){
                    $('.load').css('display', 'none');
                    alert("Arquivo Adicionado com Sucesso!");
                    location.reload();
                } else if(data == 1){
                    alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                    location.reload();
                }
            }
        });
});

/// Fim Ambientes 9 ////

function setTimes() {
    playerCurrentTime.textContent = new Date(audioElement.currentTime * 1000)
    .toISOString()
    .substr(11, 8);
  playerDuration.textContent = new Date(audioElement.duration * 1000)
    .toISOString()
    .substr(11, 8);
}

function progressUpdate() {
    const percent = (audioElement.currentTime / audioElement.duration) * 100
  progressFilled.style.flexBasis = `${percent}%`;
}

function minutosParaHoras(minutos) {
    var horas = Math.floor(minutos / 60);
    var minutos = minutos % 60;
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    return horas + ":" + minutos;
}

function horasParaMinutos(horas) {
    var partes = horas.split(":");
    var horas = parseInt(partes[0]);
    var minutos = parseInt(partes[1]);
    return horas * 60 + minutos;
}

function atualizarHorarioDomingo(de, ate) {
    var entradaDomingo = minutosParaHoras(de);
    var saidaDomingo = minutosParaHoras(ate);
    $("#inputDeDomingo").val(entradaDomingo);
    $("#inputAteDomingo").val(saidaDomingo);
}

function atualizarHorarioSegunda(de, ate) {
    var entradaSegunda = minutosParaHoras(de);
    var saidaSegunda = minutosParaHoras(ate);
    $("#inputDeSegunda").val(entradaSegunda);
    $("#inputAteSegunda").val(saidaSegunda);
}

function atualizarHorarioTerca(de, ate) {
    var entradaTerca = minutosParaHoras(de);
    var saidaTerca = minutosParaHoras(ate);
    $("#inputDeTerça").val(entradaTerca);
    $("#inputAteTerça").val(saidaTerca);
}

function atualizarHorarioQuarta(de, ate) {
    var entradaQuarta = minutosParaHoras(de);
    var saidaQuarta = minutosParaHoras(ate);
    $("#inputDeQuarta").val(entradaQuarta);
    $("#inputAteQuarta").val(saidaQuarta);
}

function atualizarHorarioQuinta(de, ate) {
    var entradaQuinta = minutosParaHoras(de);
    var saidaQuinta = minutosParaHoras(ate);
    $("#inputDeQuinta").val(entradaQuinta);
    $("#inputAteQuinta").val(saidaQuinta);
}

function atualizarHorarioSexta(de, ate) {
    var entradaSexta = minutosParaHoras(de);
    var saidaSexta = minutosParaHoras(ate);
    $("#inputDeSexta").val(entradaSexta);
    $("#inputAteSexta").val(saidaSexta);
}

function atualizarHorarioSabado(de, ate) {
    var entradaSabado = minutosParaHoras(de);
    var saidaSabado = minutosParaHoras(ate);
    $("#inputDeSábado").val(entradaSabado);
    $("#inputAteSábado").val(saidaSabado);
}

$(document).ready(function () {
    $(this).scrollTop(0);
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

    $('#menuAtividades-').css('display', 'none');
    $('#menuAtividades-Selecionado').css('display', 'inline-block');

    let idProfSessao = $('#idProfSessao').val();
    $.ajax({
        url: "php/turmas.php?act=turmas",
        type: "POST",
        data: {
            codProfessor: idProfSessao
        }
    })
    .done(function(data){
        let turmasProf = JSON.parse(data);
        $(turmasProf.result).each(function(i, value){
            if(value.nomeTurma != "Sem Turma"){
                let turmaItem = `<div class="itemTurma" id="turma-`+ value.id +`">`+
                                        `<img src="assets/`+ value.iconeTurma +`.png" alt="`+ value.nomeTurma +`">`+
                                        `<label id="lblTurma-`+ value.id +`-`+value.nomeTurma+`">`+ 
                                            value.nomeTurma +
                                        `</label>`+
                                    `</div>`;
                $('#conteudoTurma').append(turmaItem);
    
                $('#turma-'+value.id).on('click', function(){
                    $('.selecaoQuadro').remove();
                    let quadroSelecionado = '<img src="assets/quadro-turma-selecionado.png" class="selecaoQuadro">';
                    $(this).append(quadroSelecionado);
                    let idTurma = value.id;
                    $('#btnMaisAluno').removeAttr('disabled');
                    $('#accordionHorario').css('display', 'flex');
                    $('#lblHorario').html("Horário "+value.nomeTurma);
                    $('#pesquisaAluno').removeAttr('disabled');
                    
                    /// Alunos Ambiente professor ///
    
                    $.ajax({
                        url: "php/turmas.php?act=alunos",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let alunosTurma = JSON.parse(data);
                        if(alunosTurma.result == ''){
                            $('#conteudoAluno').html('');
                            let turmaVazia = `<h1 id="turmaVazia">Essa turma está vazia</h1>`;
                            $('#conteudoAluno').append(turmaVazia);
                        } else {
                            $('#conteudoAluno').html('');
                            $(alunosTurma.result).each(function(i, value){
                                let alunoItem = `<div class="itemAluno">`+
                                                    `<img src="assets/`+ value.avatar +`.png" alt="aluno`+ value.avatar +`">`+
                                                    `<label id="lblAluno-`+ value.id +`">`+ value.nomeAluno +`</label>`+
                                                `</div>`;
                                $('#conteudoAluno').append(alunoItem);
    
                            });
                        }
                    });
    
                    /// Ambientes Professor ///
    
                    /// Jogos 1 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos1 = JSON.parse(data);
                        $('#jogosAmbiente1').html('');
                        if(jogos1.result == ''){
                            let jogo1Vazio = `<h1 id="jogo1Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente1').append(jogo1Vazio);
                        } else {
                            $(jogos1.result).each(function(i, value){
                                let gridJogosAmbiente1 = `<div id="gridJogosAmbiente1"></div>`;
                                $('#jogosAmbiente1').append(gridJogosAmbiente1);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo1Item = `<div class="itemJogo1">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 1" class="imgJogo-" id="Jogo1Icon">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos1Off" id="iconJogo1-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos1On" id="iconJogo1-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo1" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente1').append(jogo1Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo1-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo1-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo1-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo1-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo1-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos1",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo1-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo1-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo1-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos1",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo1-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo1-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 1 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks1 = JSON.parse(data);
                        $('#ebooksAmbiente1').html('');
                        if(ebooks1.result == ''){
                            let ebook1Vazio = `<h1 id="ebook1Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente1').append(ebook1Vazio);
                        } else {
                            $(ebooks1.result).each(function(i, value){
                                let gridEbooksAmbiente1 = `<div id="gridEbooksAmbiente1"></div>`;
                                $('#ebooksAmbiente1').append(gridEbooksAmbiente1);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook1Item = `<div class="itemEbook1">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 1" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks1Off" id="iconEbook1-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks1On" id="iconEbook1-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook1" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente1').append(ebook1Item);
                                
                                if(value.ativo == 'true'){
                                    $('#iconEbook1-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook1-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook1-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook1-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook1-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks1",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook1-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook1-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook1-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks1",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook1-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook1-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 1 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get1",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid1 = JSON.parse(data);
                        $('#hibridosAmbiente1').html('');
                        if(jogoRfid1.result == ''){
                            let jogoRfid1Vazio = `<h1 id="jogoRfid1Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente1').append(jogoRfid1Vazio);
                        } else {
                            $(jogoRfid1.result).each(function(i, value){
                                let gridJogoHibridoAmbiente1 = `<div id="gridJogoHibridoAmbiente1"></div>`;
                                $('#hibridosAmbiente1').append(gridJogoHibridoAmbiente1);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid1Item = `<div class="itemJogoHibrido1">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 1" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido1Off" id="iconHibrido1-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido1On" id="iconHibrido1-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido1" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente1').append(jogoRfid1Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido1-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido1-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido1-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido1-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido1-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido1",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido1-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido1-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido1-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido1 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido1",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido1
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido1-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido1-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 2 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos2 = JSON.parse(data);
                        $('#jogosAmbiente2').html('');
                        if(jogos2.result == ''){
                            let jogo2Vazio = `<h1 id="jogo2Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente2').append(jogo2Vazio);
                        } else {
                            $(jogos2.result).each(function(i, value){
                                let gridJogosAmbiente2 = `<div id="gridJogosAmbiente2"></div>`;
                                $('#jogosAmbiente2').append(gridJogosAmbiente2);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo2Item = `<div class="itemJogo2">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 2" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos2Off" id="iconJogo2-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos2On" id="iconJogo2-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo2" class="lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente2').append(jogo2Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo2-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo2-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo2-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo2-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo2-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos2",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo2-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo2-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo2-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos2",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo2-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo2-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 2 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks2 = JSON.parse(data);
                        $('#ebooksAmbiente2').html('');
                        if(ebooks2.result == ''){
                            let ebook2Vazio = `<h1 id="ebook2Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente2').append(ebook2Vazio);
                        } else {
                            $(ebooks2.result).each(function(i, value){
                                let gridEbooksAmbiente2 = `<div id="gridEbooksAmbiente2"></div>`;
                                $('#ebooksAmbiente2').append(gridEbooksAmbiente2);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook2Item = `<div class="itemEbook2">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 2" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks2Off" id="iconEbook2-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks2On" id="iconEbook2-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook2" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente2').append(ebook2Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook2-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook2-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook2-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook2-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook2-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks2",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook2-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook2-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook2-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks2",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook2-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook2-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 2 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get2",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid2 = JSON.parse(data);
                        $('#hibridosAmbiente2').html('');
                        if(jogoRfid2.result == ''){
                            let jogoRfid2Vazio = `<h1 id="jogoRfid2Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente2').append(jogoRfid2Vazio);
                        } else {
                            $(jogoRfid2.result).each(function(i, value){
                                let gridJogoHibridoAmbiente2 = `<div id="gridJogoHibridoAmbiente2"></div>`;
                                $('#hibridosAmbiente2').append(gridJogoHibridoAmbiente2);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid2Item = `<div class="itemJogoHibrido2">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 2" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido2Off" id="iconHibrido2-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido2On" id="iconHibrido2-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido2" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente2').append(jogoRfid2Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido2-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido2-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido2-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido2-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido2-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido2",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido2-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido2-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido2-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido2 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido2",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido2
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido2-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido2-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 3 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos3 = JSON.parse(data);
                        $('#jogosAmbiente3').html('');
                        if(jogos3.result == ''){
                            let jogo3Vazio = `<h1 id="jogo3Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente3').append(jogo3Vazio);
                        } else {
                            $(jogos3.result).each(function(i, value){
                                let gridJogosAmbiente3 = `<div id="gridJogosAmbiente3"></div>`;
                                $('#jogosAmbiente3').append(gridJogosAmbiente3);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo3Item = `<div class="itemJogo3">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 3" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos3Off" id="iconJogo3-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos3On" id="iconJogo3-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo3" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente3').append(jogo3Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo3-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo3-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo3-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo3-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo3-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos3",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo3-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo3-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo3-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos3",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo3-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo3-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 3 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks3 = JSON.parse(data);
                        $('#ebooksAmbiente3').html('');
                        if(ebooks3.result == ''){
                            let ebook3Vazio = `<h1 id="ebook3Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente3').append(ebook3Vazio);
                        } else {
                            $(ebooks3.result).each(function(i, value){
                                let gridEbooksAmbiente3 = `<div id="gridEbooksAmbiente3"></div>`;
                                $('#ebooksAmbiente3').append(gridEbooksAmbiente3);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook3Item = `<div class="itemEbook3">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 3" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks3Off" id="iconEbook3-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks3On" id="iconEbook3-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook3" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente3').append(ebook3Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook3-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook3-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook3-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook3-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook3-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks3",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook3-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook3-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook3-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks3",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook3-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook3-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 3 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get3",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid3 = JSON.parse(data);
                        $('#hibridosAmbiente3').html('');
                        if(jogoRfid3.result == ''){
                            let jogoRfid3Vazio = `<h1 id="jogoRfid3Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente3').append(jogoRfid3Vazio);
                        } else {
                            $(jogoRfid3.result).each(function(i, value){
                                let gridJogoHibridoAmbiente3 = `<div id="gridJogoHibridoAmbiente3"></div>`;
                                $('#hibridosAmbiente3').append(gridJogoHibridoAmbiente3);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid3Item = `<div class="itemJogoHibrido3">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 3" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido3Off" id="iconHibrido3-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido3On" id="iconHibrido3-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido3" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente3').append(jogoRfid3Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido3-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido3-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido3-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido3-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido3-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido3",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido3-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido3-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido3-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido3 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido3",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido3
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido3-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido3-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 4 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos4 = JSON.parse(data);
                        $('#jogosAmbiente4').html('');
                        if(jogos4.result == ''){
                            let jogo4Vazio = `<h1 id="jogo4Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente4').append(jogo4Vazio);
                        } else {
                            $(jogos4.result).each(function(i, value){
                                let gridJogosAmbiente4 = `<div id="gridJogosAmbiente4"></div>`;
                                $('#jogosAmbiente4').append(gridJogosAmbiente4);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo4Item = `<div class="itemJogo4">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 4" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos4Off" id="iconJogo4-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos4On" id="iconJogo4-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo4" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente4').append(jogo4Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo4-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo4-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo4-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo4-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo4-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos4",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo4-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo4-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo4-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos4",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo4-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo4-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 4 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks4 = JSON.parse(data);
                        $('#ebooksAmbiente4').html('');
                        if(ebooks4.result == ''){
                            let ebook4Vazio = `<h1 id="ebook4Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente4').append(ebook4Vazio);
                        } else {
                            $(ebooks4.result).each(function(i, value){
                                let gridEbooksAmbiente4 = `<div id="gridEbooksAmbiente4"></div>`;
                                $('#ebooksAmbiente4').append(gridEbooksAmbiente4);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook4Item = `<div class="itemEbook4">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 4" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks4Off" id="iconEbook4-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks4On" id="iconEbook4-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook4" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente4').append(ebook4Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook4-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook4-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook4-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook4-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook4-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks4",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook4-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook4-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook4-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks4",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook4-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook4-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 4 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get4",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid4 = JSON.parse(data);
                        $('#hibridosAmbiente4').html('');
                        if(jogoRfid4.result == ''){
                            let jogoRfid4Vazio = `<h1 id="jogoRfid4Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente4').append(jogoRfid4Vazio);
                        } else {
                            $(jogoRfid4.result).each(function(i, value){
                                let gridJogoHibridoAmbiente4 = `<div id="gridJogoHibridoAmbiente4"></div>`;
                                $('#hibridosAmbiente4').append(gridJogoHibridoAmbiente4);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid4Item = `<div class="itemJogoHibrido4">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 4" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido4Off" id="iconHibrido4-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido4On" id="iconHibrido4-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido4" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente4').append(jogoRfid4Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido4-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido4-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido4-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido4-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido4-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido4",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido4-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido4-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido4-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido4 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido4",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido4
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido4-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido4-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 5 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos5 = JSON.parse(data);
                        $('#jogosAmbiente5').html('');
                        if(jogos5.result == ''){
                            let jogo5Vazio = `<h1 id="jogo5Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente5').append(jogo5Vazio);
                        } else {
                            $(jogos5.result).each(function(i, value){
                                let gridJogosAmbiente5 = `<div id="gridJogosAmbiente5"></div>`;
                                $('#jogosAmbiente5').append(gridJogosAmbiente5);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo5Item = `<div class="itemJogo5">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 5" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos5Off" id="iconJogo5-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos5On" id="iconJogo5-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo5" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente5').append(jogo5Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo5-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo5-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo5-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo5-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo5-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos5",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo5-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo5-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo5-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos5",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo5-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo5-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 5 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks5 = JSON.parse(data);
                        $('#ebooksAmbiente5').html('');
                        if(ebooks5.result == ''){
                            let ebook5Vazio = `<h1 id="ebook5Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente5').append(ebook5Vazio);
                        } else {
                            $(ebooks5.result).each(function(i, value){
                                let gridEbooksAmbiente5 = `<div id="gridEbooksAmbiente5"></div>`;
                                $('#ebooksAmbiente5').append(gridEbooksAmbiente5);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook5Item = `<div class="itemEbook5">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 5" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks5Off" id="iconEbook5-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks5On" id="iconEbook5-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook5" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente5').append(ebook5Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook5-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook5-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook5-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook5-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook5-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks5",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook5-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook5-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook5-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks5",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook5-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook5-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 5 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get5",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid5 = JSON.parse(data);
                        $('#hibridosAmbiente5').html('');
                        if(jogoRfid5.result == ''){
                            let jogoRfid5Vazio = `<h1 id="jogoRfid5Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente5').append(jogoRfid5Vazio);
                        } else {
                            $(jogoRfid5.result).each(function(i, value){
                                let gridJogoHibridoAmbiente5 = `<div id="gridJogoHibridoAmbiente5"></div>`;
                                $('#hibridosAmbiente5').append(gridJogoHibridoAmbiente5);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid5Item = `<div class="itemJogoHibrido5">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 5" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido5Off" id="iconHibrido5-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido5On" id="iconHibrido5-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido5" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente5').append(jogoRfid5Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido5-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido5-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido5-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido5-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido5-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido5",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido5-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido5-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido5-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido5 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido5",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido5
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido5-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido5-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 6 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos6 = JSON.parse(data);
                        $('#jogosAmbiente6').html('');
                        if(jogos6.result == ''){
                            let jogo6Vazio = `<h1 id="jogo6Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente6').append(jogo6Vazio);
                        } else {
                            $(jogos6.result).each(function(i, value){
                                let gridJogosAmbiente6 = `<div id="gridJogosAmbiente6"></div>`;
                                $('#jogosAmbiente6').append(gridJogosAmbiente6);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo6Item = `<div class="itemJogo6">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 6" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos6Off" id="iconJogo6-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos6On" id="iconJogo6-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo6" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente6').append(jogo6Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo6-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo6-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo6-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo6-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo6-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos6",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo6-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo6-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo6-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos6",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo6-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo6-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 6 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks6 = JSON.parse(data);
                        $('#ebooksAmbiente6').html('');
                        if(ebooks6.result == ''){
                            let ebook6Vazio = `<h1 id="ebook6Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente6').append(ebook6Vazio);
                        } else {
                            $(ebooks6.result).each(function(i, value){
                                let gridEbooksAmbiente6 = `<div id="gridEbooksAmbiente6"></div>`;
                                $('#ebooksAmbiente6').append(gridEbooksAmbiente6);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook6Item = `<div class="itemEbook6">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 6" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks6Off" id="iconEbook6-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks6On" id="iconEbook6-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook6" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente6').append(ebook6Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook6-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook6-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook6-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook6-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook6-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks6",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook6-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook6-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook6-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks6",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook6-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook6-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 6 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get6",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid6 = JSON.parse(data);
                        $('#hibridosAmbiente6').html('');
                        if(jogoRfid6.result == ''){
                            let jogoRfid6Vazio = `<h1 id="jogoRfid6Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente6').append(jogoRfid6Vazio);
                        } else {
                            $(jogoRfid6.result).each(function(i, value){
                                let gridJogoHibridoAmbiente6 = `<div id="gridJogoHibridoAmbiente6"></div>`;
                                $('#hibridosAmbiente6').append(gridJogoHibridoAmbiente6);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid6Item = `<div class="itemJogoHibrido6">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 6" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido6Off" id="iconHibrido6-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido6On" id="iconHibrido6-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido6" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente6').append(jogoRfid6Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido6-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido6-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido6-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido6-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido6-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido6",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido6-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido6-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido6-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido6 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido6",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido6
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido6-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido6-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 7 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos7 = JSON.parse(data);
                        $('#jogosAmbiente7').html('');
                        if(jogos7.result == ''){
                            let jogo7Vazio = `<h1 id="jogo7Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente7').append(jogo7Vazio);
                        } else {
                            $(jogos7.result).each(function(i, value){
                                let gridJogosAmbiente7 = `<div id="gridJogosAmbiente7"></div>`;
                                $('#jogosAmbiente7').append(gridJogosAmbiente7);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo7Item = `<div class="itemJogo7">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 7" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos7Off" id="iconJogo7-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos7On" id="iconJogo7-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo7" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente7').append(jogo7Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo7-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo7-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo7-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo7-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo7-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos7",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo7-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo7-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo7-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos7",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo7-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo7-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 7 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks7 = JSON.parse(data);
                        $('#ebooksAmbiente7').html('');
                        if(ebooks7.result == ''){
                            let ebook7Vazio = `<h1 id="ebook7Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente7').append(ebook7Vazio);
                        } else {
                            $(ebooks7.result).each(function(i, value){
                                let gridEbooksAmbiente7 = `<div id="gridEbooksAmbiente7"></div>`;
                                $('#ebooksAmbiente7').append(gridEbooksAmbiente7);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook7Item = `<div class="itemEbook7">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 7" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks7Off" id="iconEbook7-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks7On" id="iconEbook7-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook7" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente7').append(ebook7Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook7-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook7-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook7-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook7-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook7-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks7",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook7-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook7-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook7-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks7",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook7-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook7-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 7 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get7",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid7 = JSON.parse(data);
                        $('#hibridosAmbiente7').html('');
                        if(jogoRfid7.result == ''){
                            let jogoRfid7Vazio = `<h1 id="jogoRfid7Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente7').append(jogoRfid7Vazio);
                        } else {
                            $(jogoRfid7.result).each(function(i, value){
                                let gridJogoHibridoAmbiente7 = `<div id="gridJogoHibridoAmbiente7"></div>`;
                                $('#hibridosAmbiente7').append(gridJogoHibridoAmbiente7);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid7Item = `<div class="itemJogoHibrido7">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 7" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido7Off" id="iconHibrido7-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido7On" id="iconHibrido7-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido7" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente7').append(jogoRfid7Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido7-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido7-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido7-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido7-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido7-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido7",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido7-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido7-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido7-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido7 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido7",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido7
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido7-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido7-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 8 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos8 = JSON.parse(data);
                        $('#jogosAmbiente8').html('');
                        if(jogos8.result == ''){
                            let jogo8Vazio = `<h1 id="jogo8Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente8').append(jogo8Vazio);
                        } else {
                            $(jogos8.result).each(function(i, value){
                                let gridJogosAmbiente8 = `<div id="gridJogosAmbiente8"></div>`;
                                $('#jogosAmbiente8').append(gridJogosAmbiente8);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo8Item = `<div class="itemJogo8">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 8" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos8Off" id="iconJogo8-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos8On" id="iconJogo8-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo8" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente8').append(jogo8Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo8-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo8-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo8-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo8-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo8-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos8",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo8-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo8-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo8-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos8",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo8-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo8-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 8 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks8 = JSON.parse(data);
                        $('#ebooksAmbiente8').html('');
                        if(ebooks8.result == ''){
                            let ebook8Vazio = `<h1 id="ebook8Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente8').append(ebook8Vazio);
                        } else {
                            $(ebooks8.result).each(function(i, value){
                                let gridEbooksAmbiente8 = `<div id="gridEbooksAmbiente8"></div>`;
                                $('#ebooksAmbiente8').append(gridEbooksAmbiente8);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook8Item = `<div class="itemEbook8">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 8" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks8Off" id="iconEbook8-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks8On" id="iconEbook8-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook8" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente8').append(ebook8Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook8-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook8-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook8-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook8-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook8-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks8",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook8-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook8-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook8-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks8",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook8-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook8-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 8 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get8",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid8 = JSON.parse(data);
                        $('#hibridosAmbiente8').html('');
                        if(jogoRfid8.result == ''){
                            let jogoRfid8Vazio = `<h1 id="jogoRfid8Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente8').append(jogoRfid8Vazio);
                        } else {
                            $(jogoRfid8.result).each(function(i, value){
                                let gridJogoHibridoAmbiente8 = `<div id="gridJogoHibridoAmbiente8"></div>`;
                                $('#hibridosAmbiente8').append(gridJogoHibridoAmbiente8);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid8Item = `<div class="itemJogoHibrido8">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 8" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido8Off" id="iconHibrido8-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido8On" id="iconHibrido8-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido8" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente8').append(jogoRfid8Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido8-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido8-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido8-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido8-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido8-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido8",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido8-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido8-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido8-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido8 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido8",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido8
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido8-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido8-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Jogos 9 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogos.php?act=get9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogos9 = JSON.parse(data);
                        $('#jogosAmbiente9').html('');
                        if(jogos9.result == ''){
                            let jogo9Vazio = `<h1 id="jogo9Vazio">Ainda não há Jogos no Ambiente</h1>`;
                            $('#jogosAmbiente9').append(jogo9Vazio);
                        } else {
                            $(jogos9.result).each(function(i, value){
                                let gridJogosAmbiente9 = `<div id="gridJogosAmbiente9"></div>`;
                                $('#jogosAmbiente9').append(gridJogosAmbiente9);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogo9Item = `<div class="itemJogo9">`+
                                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 9" class="imgJogo-">`+
                                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionJogos9Off" id="iconJogo9-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionJogos9On" id="iconJogo9-`+value.id+`-Green">`+
                                                    `<label for="permissionJogo9" class="lblJogo-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridJogosAmbiente9').append(jogo9Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconJogo9-'+value.id+'-Red').css('display', 'none');
                                    $('#iconJogo9-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconJogo9-'+value.id+'-Green').css('display', 'none');
                                    $('#iconJogo9-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconJogo9-'+value.id+'-Green').on('click',function(){
                                    var jogoId = value.id;
                                    var iconJogo9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=desablePermissionJogos9",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo9-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconJogo9-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconJogo9-'+value.id+'-Red').on('click', function(){
                                    var jogoId = value.id;
                                    var iconJogo9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogos.php?act=enablePermissionJogos9",
                                        type: "POST",
                                        data: {
                                            id: jogoId,
                                            check: iconJogo9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconJogo9-'+value.id+'-Red').css('display', 'none');
                                            $('#iconJogo9-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Ebooks 9 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/ebook.php?act=get9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let ebooks9 = JSON.parse(data);
                        $('#ebooksAmbiente9').html('');
                        if(ebooks9.result == ''){
                            let ebook9Vazio = `<h1 id="ebook9Vazio">Ainda não há Ebooks no Ambiente</h1>`;
                            $('#ebooksAmbiente9').append(ebook9Vazio);
                        } else {
                            $(ebooks9.result).each(function(i, value){
                                let gridEbooksAmbiente9 = `<div id="gridEbooksAmbiente9"></div>`;
                                $('#ebooksAmbiente9').append(gridEbooksAmbiente9);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let ebook9Item = `<div class="itemEbook9">`+
                                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 9" class="imgEbook-">`+
                                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionEbooks9Off" id="iconEbook9-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionEbooks9On" id="iconEbook9-`+value.id+`-Green">`+
                                                    `<label for="permissionEbook9" class="lblEbook-`+value.nome+` ">`+ nome +`</label>`+
                                                `</div>`;
                                $('#gridEbooksAmbiente9').append(ebook9Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconEbook9-'+value.id+'-Red').css('display', 'none');
                                    $('#iconEbook9-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconEbook9-'+value.id+'-Green').css('display', 'none');
                                    $('#iconEbook9-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconEbook9-'+value.id+'-Green').on('click',function(){
                                    var ebookId = value.id;
                                    var iconEbook9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=desablePermissionEbooks9",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook9-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconEbook9-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconEbook9-'+value.id+'-Red').on('click', function(){
                                    var ebookId = value.id;
                                    var iconEbook9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/ebook.php?act=enablePermissionEbooks9",
                                        type: "POST",
                                        data: {
                                            id: ebookId,
                                            check: iconEbook9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconEbook9-'+value.id+'-Red').css('display', 'none');
                                            $('#iconEbook9-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// JOGOS RFID 9 Ambiente Professor ///
    
                    $.ajax({
                        url: "php/jogorfid.php?act=get9",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let jogoRfid9 = JSON.parse(data);
                        $('#hibridosAmbiente9').html('');
                        if(jogoRfid9.result == ''){
                            let jogoRfid9Vazio = `<h1 id="jogoRfid9Vazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
                            $('#hibridosAmbiente9').append(jogoRfid9Vazio);
                        } else {
                            $(jogoRfid9.result).each(function(i, value){
                                let gridJogoHibridoAmbiente9 = `<div id="gridJogoHibridoAmbiente9"></div>`;
                                $('#hibridosAmbiente9').append(gridJogoHibridoAmbiente9);
                                let nome = value.nome.replace(/[-_]+/g, ' ');
                                let jogoRfid9Item = `<div class="itemJogoHibrido9">`+
                                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="Jogo Ambiente 9" class="imgJogoHibrido-">`+
                                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                                    `<img src="assets/off.png" alt="On/Off" class="permissionConteudo permissionHibrido9Off" id="iconHibrido9-`+value.id+`-Red">`+
                                                    `<img src="assets/on.png" alt="On/Off" class="permissionConteudo permissionHibrido9On" id="iconHibrido9-`+value.id+`-Green">`+
                                                    `<label for="permissionJogoHibrido9" class="lblJogoHibrido-`+value.nome+` ">`+ nome +`</label>`+
                                                    `</div>`;
                                $('#gridJogoHibridoAmbiente9').append(jogoRfid9Item);
    
                                if(value.ativo == 'true'){
                                    $('#iconHibrido9-'+value.id+'-Red').css('display', 'none');
                                    $('#iconHibrido9-'+value.id+'-Green').css('display', 'block');
                                } else if(value.ativo == 'false'){
                                    $('#iconHibrido9-'+value.id+'-Green').css('display', 'none');
                                    $('#iconHibrido9-'+value.id+'-Red').css('display', 'block');
                                }
    
                                $('#iconHibrido9-'+value.id+'-Green').on('click',function(){
                                    var hibridoId = value.id;
                                    var iconHibrido9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=desablePermissionHibrido9",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido9-'+value.id+'-Green').css('display', 'none');                              
                                            $('#iconHibrido9-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#iconHibrido9-'+value.id+'-Red').on('click', function(){
                                    var hibridoId = value.id;
                                    var iconHibrido9 = value.ativo;
    
                                    $.ajax({
                                        url: "php/jogorfid.php?act=enablePermissionHibrido9",
                                        type: "POST",
                                        data: {
                                            id: hibridoId,
                                            check: iconHibrido9
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert('Erro!');
                                            location.reload();
                                        } else if(data == 0){
                                            $('#iconHibrido9-'+value.id+'-Red').css('display', 'none');
                                            $('#iconHibrido9-'+value.id+'-Green').css('display', 'block');                               
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Músicas Ambiente Professor ///
    
                    $.ajax({
                        url: "php/musicas.php?act=get",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let musicas = JSON.parse(data);
                        if(musicas.result == ''){
                            $('#conteudoMusicas').html('');
                            let musicasVazio = `<h1 id="musicasVazio">Ainda não há Músicas no Ambiente</h1>`;
                            $('#conteudoMusicas').append(musicasVazio);
                        } else {
                            $('#conteudoMusicas').html('');
                            $(musicas.result).each(function(i, value){
                                
                                let extension = value.nome.split('.');
                                let itemMusic = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                                                    `<img src="assets/off.png" alt="Permission" id="checkMusic-`+value.id+`-Red" class="checkMusicaRed">`+
                                                    `<img src="assets/on.png" alt="Permission" id="checkMusic-`+value.id+`-Green" class="checkMusicaGreen">`+
                                                    `<audio controls>`+
                                                        `<source src="`+value.playlist+`/`+value.nome+`" type="audio/`+extension[1]+`">`+
                                                    `</audio>`+
                                                    `<label class="">`+extension[0]+`</label>`+
                                                `</div>`;
                                $('#conteudoMusicas').append(itemMusic);
    
                                if(value.ativo == 'false'){
                                    $('#checkMusic-'+value.id+'-Green').css('display', 'none');
                                    $('#checkMusic-'+value.id+'-Red').css('display', 'block');
                                } else if(value.ativo == 'true'){
                                    $('#checkMusic-'+value.id+'-Red').css('display', 'none');
                                    $('#checkMusic-'+value.id+'-Green').css('display', 'block');
                                }
    
                                $('#checkMusic-'+value.id+'-Red').on('click', function(){
    
                                    let checkMusic = 'true';
                                    $.ajax({
                                        url: "php/musicas.php?act=permissionMusic",
                                        type: "POST",
                                        data: {
                                            checkMusic: checkMusic,
                                            idMusic: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert("Erro!");
                                            location.reload();
                                        } else if(data == 0){
                                            $('#checkMusic-'+value.id+'-Red').css('display', 'none');
                                            $('#checkMusic-'+value.id+'-Green').css('display', 'block');
                                        }
                                    });
                                });
    
                                $('#checkMusic-'+value.id+'-Green').on('click', function(){
    
                                    let checkMusic = 'false';
                                    $.ajax({
                                        url: "php/musicas.php?act=permissionMusic",
                                        type: "POST",
                                        data: {
                                            checkMusic: checkMusic,
                                            idMusic: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 1){
                                            alert("Erro!");
                                            location.reload();
                                        } else if(data == 0){
                                            $('#checkMusic-'+value.id+'-Green').css('display', 'none');
                                            $('#checkMusic-'+value.id+'-Red').css('display', 'block');
                                        }
                                    });
                                });
    
                            });
                        }
                    });
    
                    /// Vídeos Ambiente Professor ///
    
                    $.ajax({
                        url: "php/videos.php?act=get",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let videos = JSON.parse(data);
                        if(videos.result == ''){
                            $('#conteudoVideos').html('');
                            let videosVazio = `<h1 id="videosVazio">Ainda não há Videos no Ambiente</h1>`;
                            $('#conteudoVideos').append(videosVazio);
                        } else {
                            $('#conteudoVideos').html('');
                            $(videos.result).each(function(i, value){
                                let extension = value.nome_video.split('.');
                                let nome = value.nome_video.split('.');
                                let videosItem = `<div class="itemVideo">`+
                                                    `<video width="250" height="200" controls>`+
                                                        `<source src="`+ value.link +`/`+ value.nome_video +`" type="video/ogg">`+
                                                    `</video>`+
                                                    `<label class="tituloVideo">`+nome[0]+`</label>`+
                                                    `<img src="assets/off.png" alt="Video" id="video-`+value.id+`-Red" class="checkVideoRed">`+
                                                    `<img src="assets/on.png" alt="Video" id="video-`+value.id+`-Green" class="checkVideoGreen">`+
                                                `</div>`;
                                $('#conteudoVideos').append(videosItem);
    
                                if(value.ativo == 'false'){
                                    $('#video-'+value.id+'-Green').css('display', 'none');
                                    $('#video-'+value.id+'-Red').css('display', 'block');
                                } else if(value.ativo == 'true'){
                                    $('#video-'+value.id+'-Red').css('display', 'none');
                                    $('#video-'+value.id+'-Green').css('display', 'block');
                                }
    
                                $('#video-'+ value.id + '-Red').on('click', function(){
    
                                    let permissinoVideo = 'true';
                                    $.ajax({
                                        url: "php/videos.php?act=permissionVideo",
                                        type: "POST",
                                        data: {
                                            checkVideo: permissinoVideo,
                                            videoId: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 0){
                                            $('#video-'+value.id+'-Red').css('display', 'none');
                                            $('#video-'+value.id+'-Green').css('display', 'block');
                                        } else {
                                            alert("Erro!");
                                            location.reload();
                                        }
                                    });
                                });
    
                                $('#video-'+ value.id + '-Green').on('click', function(){
                                    let permissinoVideo = 'false';
                                    $.ajax({
                                        url: "php/videos.php?act=permissionVideo",
                                        type: "POST",
                                        data: {
                                            checkVideo: permissinoVideo,
                                            videoId: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 0){
                                            $('#video-'+value.id+'-Green').css('display', 'none');
                                            $('#video-'+value.id+'-Red').css('display', 'block');
                                        } else {
                                            alert("Erro!");
                                            location.reload();
                                        }
                                    });
                                });
                            });
                        }
                    });
    
                    /// Sites Ambiente Professor ///
    
                    $.ajax({
                        url: "php/site.php?act=get",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let sites = JSON.parse(data);
                        if(sites.result == ''){
                            $('#conteudoSites').html('');
                            let sitesVazio = `<h1 id="sitesVazio">Ainda não há Sites no Ambiente</h1>`;
                            $('#conteudoSites').append(sitesVazio);
                        } else {
                            $('#conteudoSites').html('');
                            $(sites.result).each(function(i, value){
                                let itemSite = `<div class="itemSite" id="site-`+value.id+`">`+
                                                    `<a href="`+value.dominio+`" target="_blank" class="linkSite">`+
                                                        `<img src="assets/browser.png" alt="Browser" class="pagIcon">`+
                                                        `<label class="lblSite">`+value.nome+`</label>`+
                                                    `</a>`+
                                                    `<img src="assets/off.png" id="site-`+value.id+`-Red" class="checkSiteRed">`+
                                                    `<img src="assets/on.png" id="site-`+value.id+`-Green" class="checkSiteGreen">`+
                                                `</div>`;
                                $('#conteudoSites').append(itemSite);
    
                                if(value.ativo == 'false'){
                                    $('#site-'+value.id+'-Green').css('display', 'none');
                                    $('#site-'+value.id+'-Red').css('display', 'block');
                                } else if(value.ativo == 'true'){
                                    $('#site-'+value.id+'-Red').css('display', 'none');
                                    $('#site-'+value.id+'-Green').css('display', 'block');
                                }
    
                                $('#site-'+value.id+'-Red').on('click', function(){
                                    let permissionSite = 'true';
    
                                    $.ajax({
                                        url: "php/site.php?act=permissionSite",
                                        type: "POST",
                                        data: {
                                            checkSite: permissionSite,
                                            siteId: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 0){
                                            $('#site-'+value.id+'-Red').css('display', 'none');
                                            $('#site-'+value.id+'-Green').css('display', 'block');
                                        } else {
                                            alert('Erro!');
                                            location.reload();
                                        }
                                    });
                                });
    
                                $('#site-'+value.id+'-Green').on('click', function(){
                                    let permissionSite = 'false';
    
                                    $.ajax({
                                        url: "php/site.php?act=permissionSite",
                                        type: "POST",
                                        data: {
                                            checkSite: permissionSite,
                                            siteId: value.id
                                        }
                                    })
                                    .done(function(data){
                                        if(data == 0){
                                            $('#site-'+value.id+'-Green').css('display', 'none');
                                            $('#site-'+value.id+'-Red').css('display', 'block');
                                        } else {
                                            alert('Erro!');
                                            location.reload();
                                        }
                                    });
                                });
    
                            });
                        }
                    });
    
                    /// Todas Permission Jogos Ambiente Professor ///
    
                    $('#checkPositiveJogo1').on('click', function(){
                        $('.permissionJogos1Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos1",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo1').on('click', function(){
                        $('.permissionJogos1On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos1",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo2').on('click', function(){
                        $('.permissionJogos2Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos2",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo2').on('click', function(){
                        $('.permissionJogos2On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos2",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo3').on('click', function(){
                        $('.permissionJogos3Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos3",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo3').on('click', function(){
                        $('.permissionJogos3On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos3",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo4').on('click', function(){
                        $('.permissionJogos4Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos4",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo4').on('click', function(){
                        $('.permissionJogos4On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos4",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo5').on('click', function(){
                        $('.permissionJogos5Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos5",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo5').on('click', function(){
                        $('.permissionJogos5On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos5",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo6').on('click', function(){
                        $('.permissionJogos6Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos6",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo6').on('click', function(){
                        $('.permissionJogos6On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos6",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo7').on('click', function(){
                        $('.permissionJogos7Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos7",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo7').on('click', function(){
                        $('.permissionJogos7On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos7",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo8').on('click', function(){
                        $('.permissionJogos8Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos8",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo8').on('click', function(){
                        $('.permissionJogos8On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos8",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkPositiveJogo9').on('click', function(){
                        $('.permissionJogos9Off').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=enablePermissionJogos9",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeJogo9').on('click', function(){
                        $('.permissionJogos9On').each(function(i, value){
                            let jogoDataId = this.id;
                            let jogoId = jogoDataId.split('-');
                            let idJogo = jogoId[1];
                            $.ajax({
                                url: "php/jogos.php?act=desablePermissionJogos9",
                                type: "POST",
                                data: {
                                    id: idJogo
                                }
                            })
                            .done(function(data){
                                if(data == '0'){
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Green').css('display', 'none');
                                    $('#'+jogoId[0]+'-'+jogoId[1]+'-Red').css('display', 'block');
                                } else {
                                    alert("Error!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    /// Todas Permission Ebooks Ambiente Professor ///
    
                    $('#checkPositiveEbooks1').on('click', function () {
                        $('.permissionEbooks1Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks1",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks1').on('click', function () {
                        $('.permissionEbooks1On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks1",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks2').on('click', function () {
                        $('.permissionEbooks2Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks2",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks2').on('click', function () {
                        $('.permissionEbooks2On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks2",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks3').on('click', function () {
                        $('.permissionEbooks3Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks3",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks3').on('click', function () {
                        $('.permissionEbooks3On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks3",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks4').on('click', function () {
                        $('.permissionEbooks4Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks4",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks4').on('click', function () {
                        $('.permissionEbooks4On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks4",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks5').on('click', function () {
                        $('.permissionEbooks5Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks5",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks5').on('click', function () {
                        $('.permissionEbooks5On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks5",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks6').on('click', function () {
                        $('.permissionEbooks6Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks6",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks6').on('click', function () {
                        $('.permissionEbooks6On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks6",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks7').on('click', function () {
                        $('.permissionEbooks7Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks7",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks7').on('click', function () {
                        $('.permissionEbooks7On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks7",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks8').on('click', function () {
                        $('.permissionEbooks8Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks8",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks8').on('click', function () {
                        $('.permissionEbooks8On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks8",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveEbooks9').on('click', function () {
                        $('.permissionEbooks9Off').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=enablePermissionEbooks9",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeEbooks9').on('click', function () {
                        $('.permissionEbooks9On').each(function (i, value) {
                            let ebookDataId = this.id;
                            let ebookId = ebookDataId.split('-');
                            let idEbook = ebookId[1];
                            $.ajax({
                                url: "php/ebook.php?act=desablePermissionEbooks9",
                                type: "POST",
                                data: {
                                    id: idEbook
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Green').css('display', 'none');
                                        $('#' + ebookId[0] + '-' + ebookId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
    
                    /// Todas Permission Jogos Hibridos  Ambiente Professor ///
    
                    $('#checkPositiveJogoHibrido1').on('click', function () {
                        $('.permissionHibrido1Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido1",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido1').on('click', function () {
                        $('.permissionHibrido1On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido1",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido2').on('click', function () {
                        $('.permissionHibrido2Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido2",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido2').on('click', function () {
                        $('.permissionHibrido2On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido2",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido3').on('click', function () {
                        $('.permissionHibrido3Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido3",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido3').on('click', function () {
                        $('.permissionHibrido3On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido3",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido4').on('click', function () {
                        $('.permissionHibrido4Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido4",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido4').on('click', function () {
                        $('.permissionHibrido4On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido4",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido5').on('click', function () {
                        $('.permissionHibrido5Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido5",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido5').on('click', function () {
                        $('.permissionHibrido5On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido5",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido6').on('click', function () {
                        $('.permissionHibrido6Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido6",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido6').on('click', function () {
                        $('.permissionHibrido6On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido6",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido7').on('click', function () {
                        $('.permissionHibrido7Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido7",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido7').on('click', function () {
                        $('.permissionHibrido7On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido7",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido8').on('click', function () {
                        $('.permissionHibrido8Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido8",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido8').on('click', function () {
                        $('.permissionHibrido8On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido8",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkPositiveJogoHibrido9').on('click', function () {
                        $('.permissionHibrido9Off').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=enablePermissionHibrido9",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
                    
                    $('#checkNegativeJogoHibrido9').on('click', function () {
                        $('.permissionHibrido9On').each(function (i, value) {
                            let hibridoDataId = this.id;
                            let hibridoId = hibridoDataId.split('-');
                            let idHibrido = hibridoId[1];
                            $.ajax({
                                url: "php/jogorfid.php?act=desablePermissionHibrido9",
                                type: "POST",
                                data: {
                                    id: idHibrido
                                }
                            })
                                .done(function (data) {
                                    if (data == '0') {
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Green').css('display', 'none');
                                        $('#' + hibridoId[0] + '-' + hibridoId[1] + '-Red').css('display', 'block');
                                    } else {
                                        alert("Error!");
                                        location.reload();
                                    }
                                });
                        });
                    });
    
    
                    /// Todas Permissões Músicas ///
    
                    $('#checkPositiveMusicas').on('click', function(){
                        $('.checkMusicaRed').each(function(i, value){
                            let musicaDataId = this.id;
                            let musicaId = musicaDataId.split('-');
                            let idMusica = musicaId[1];
                            let permissionMusic = 'true';
                            $.ajax({
                                url: "php/musicas.php?act=permissionMusic",
                                type: "POST",
                                data: {
                                    idMusic: idMusica,
                                    checkMusic: permissionMusic
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ musicaId[0] + '-' + musicaId[1] + '-Red').css('display', 'none');
                                    $('#'+ musicaId[0] + '-' + musicaId[1] + '-Green').css('display', 'block');
                                } else {
                                    alert("Erro!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeMusicas').on('click', function(){
                        $('.checkMusicaGreen').each(function(i, value){
                            let musicaDataId = this.id;
                            let musicaId = musicaDataId.split('-');
                            let idMusica = musicaId[1];
                            let permissionMusic = 'false';
                            $.ajax({
                                url: "php/musicas.php?act=permissionMusic",
                                type: "POST",
                                data: {
                                    idMusic: idMusica,
                                    checkMusic: permissionMusic
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ musicaId[0] + '-' + musicaId[1] + '-Green').css('display', 'none');
                                    $('#'+ musicaId[0] + '-' + musicaId[1] + '-Red').css('display', 'block');
                                } else {
                                    alert("Erro!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    /// Todas Permissões Vídeos ///
    
                    $('#checkPositiveVideos').on('click', function(){
                        $('.checkVideoRed').each(function(i, value){
                            let videoDataId = this.id;
                            let videoId = videoDataId.split('-');
                            let idVideo = videoId[1];
                            let permissionVideo = 'true';
                            $.ajax({
                                url: "php/videos.php?act=permissionVideo",
                                type:"POST",
                                data: {
                                    videoId: idVideo,
                                    checkVideo: permissionVideo
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ videoId[0] + '-' + videoId[1] + '-Red').css('display', 'none');
                                    $('#'+ videoId[0] + '-' + videoId[1] + '-Green').css('display', 'block');
                                } else {
                                    alert("Erro!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeVideos').on('click', function(){
                        $('.checkVideoGreen').each(function(i, value){
                            let videoDataId = this.id;
                            let videoId = videoDataId.split('-');
                            let idVideo = videoId[1];
                            let permissionVideo = 'false';
                            $.ajax({
                                url: "php/videos.php?act=permissionVideo",
                                type:"POST",
                                data: {
                                    videoId: idVideo,
                                    checkVideo: permissionVideo
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ videoId[0] + '-' + videoId[1] + '-Green').css('display', 'none');
                                    $('#'+ videoId[0] + '-' + videoId[1] + '-Red').css('display', 'block');
                                } else {
                                    alert("Erro!");
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    /// Todas Permissões Sites ///
    
                    $('#checkPositiveSites').on('click', function(){
                        $('.checkSiteRed').each(function(i, value){
                            let siteDataId = this.id;
                            let siteId = siteDataId.split('-');
                            let idSite = siteId[1];
                            let permissionSite = 'true';
                            $.ajax({
                                url: "php/site.php?  act=permissionSite",
                                type: "POST",
                                data: {
                                    siteId: idSite,
                                    checkSite: permissionSite
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ siteId[0] + '-' + siteId[1] + '-Red').css('display', 'none');
                                    $('#'+ siteId[0] + '-' + siteId[1] + '-Green').css('display', 'block');
                                } else {
                                    alert('Erro!');
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    $('#checkNegativeSites').on('click', function(){
                        $('.checkSiteGreen').each(function(i, value){
                            let siteDataId = this.id;
                            let siteId = siteDataId.split('-');
                            let idSite = siteId[1];
                            let permissionSite = 'false';
                            $.ajax({
                                url: "php/site.php?  act=permissionSite",
                                type: "POST",
                                data: {
                                    siteId: idSite,
                                    checkSite: permissionSite
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    $('#'+ siteId[0] + '-' + siteId[1] + '-Green').css('display', 'none');
                                    $('#'+ siteId[0] + '-' + siteId[1] + '-Red').css('display', 'block');
                                } else {
                                    alert('Erro!');
                                    location.reload();
                                }
                            });
                        });
                    });
    
                    /// Horario de Uso
                    
                    $.ajax({
                        url: "php/horas.php",
                        type: "POST",
                        data: {
                            idTurma: idTurma
                        }
                    })
                    .done(function(data){
                        let dadosHoras = JSON.parse(data);
                        if(dadosHoras.result == ''){
                            $('#sliderDomingo').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioDomingo(de, ate);
                                }
                            });
                            $('#sliderSegunda').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioSegunda(de, ate);
                                }
                            });
                            $('#sliderTerça').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioTerca(de, ate);
                                }
                            });
                            $('#sliderQuarta').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioQuarta(de, ate);
                                }
                            });
                            $('#sliderQuinta').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioQuinta(de, ate);
                                }
                            });
                            $('#sliderSexta').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioSexta(de, ate);
                                }
                            });
                            $('#sliderSábado').slider({
                                range: true,
                                min: 360,
                                max: 1440,
                                step: 15,
                                values: [480, 1080],
                                slide: function(event, ui){
                                    let de = ui.values[0];
                                    let ate = ui.values[1];
                                    atualizarHorarioSabado(de, ate);
                                }
                            });
                        } else {
                            $(dadosHoras.result).each(function(i, value){
                                console.log(value);
                                var weekDay = value.dia;
                                var dia = weekDay.split("-");
                                var deHoras = value.de / 60;
                                var ateHoras = value.ate / 60;
                                var de = deHoras.toFixed(2).toString().replace(".", ":");
                                var ate = ateHoras.toFixed(2).toString().replace(".", ":");
                                console.log(dia[0], de, ate);
        
                                $('#slider'+dia[0]).slider({
                                    range: true,
                                    min: 360,
                                    max: 1440,
                                    step: 15,
                                    values: [value.de, value.ate]
                                });
                                $('#inputDe'+dia[0]).val(de);
                                $('#inputAte'+dia[0]).val(ate);
                            });
                        }
                    });

                    $('#sliderDomingo').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioDomingo(de, ate);
                        }
                    });

                    $("#inputDeDomingo, #inputAteDomingo").on("change", function() { 
                        var entrada = $("#inputDeDomingo").val(); 
                        var saida = $("#inputAteDomingo").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderDomingo").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });

                    $('#sliderSegunda').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioSegunda(de, ate);
                        }
                    });
                    
                    $("#inputDeSegunda, #inputAteSegunda").on("change", function() { 
                        var entrada = $("#inputDeSegunda").val(); 
                        var saida = $("#inputAteSegunda").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderSegunda").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });
    
                    $('#sliderTerça').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioTerca(de, ate);
                        }
                    });
                    
                    $("#inputDeTerça, #inputAteTerça").on("change", function() { 
                        var entrada = $("#inputDeTerça").val(); 
                        var saida = $("#inputAteTerça").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderTerça").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });
    
                    $('#sliderQuarta').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioQuarta(de, ate);
                        }
                    });
                    
                    $("#inputDeQuarta, #inputAteQuarta").on("change", function() { 
                        var entrada = $("#inputDeQuarta").val(); 
                        var saida = $("#inputAteQuarta").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderQuarta").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });
    
                    $('#sliderQuinta').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioQuinta(de, ate);
                        }
                    });
                    
                    $("#inputDeQuinta, #inputAteQuinta").on("change", function() { 
                        var entrada = $("#inputDeQuinta").val(); 
                        var saida = $("#inputAteQuinta").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderQuinta").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });
    
                    $('#sliderSexta').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioSexta(de, ate);
                        }
                    });
                    
                    $("#inputDeSexta, #inputAteSexta").on("change", function() { 
                        var entrada = $("#inputDeSexta").val(); 
                        var saida = $("#inputAteSexta").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderSexta").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario(); 
                            }
                        }
                    });
    
                    $('#sliderSábado').slider({
                        range: true,
                        min: 360,
                        max: 1440,
                        step: 15,
                        values: [480, 1080],
                        slide: function(event, ui){
                            let de = ui.values[0];
                            let ate = ui.values[1];
                            atualizarHorarioSabado(de, ate);
                        }
                    });
                    
                    $("#inputDeSábado, #inputAteSábado").on("change", function() { 
                        var entrada = $("#inputDeSábado").val(); 
                        var saida = $("#inputAteSábado").val();
                        if (entrada && saida) { 
                            var entradaMinutos = horasParaMinutos(entrada); 
                            var saidaMinutos = horasParaMinutos(saida); 
                            if (entradaMinutos < saidaMinutos) { 
                                $("#sliderSábado").slider("values", [entradaMinutos, saidaMinutos]); 
                                atualizarHorario();
                            }
                        }
                    });
    
                    $('.btnAtualizarHoras').on('click', function(){
                        let diaDomingo = [$('#inputDeDomingo').val(), $('#inputAteDomingo').val()];
                        let diaSegunda = [$('#inputDeSegunda').val(), $('#inputAteSegunda').val()];
                        let diaTerca = [$('#inputDeTerça').val(), $('#inputAteTerça').val()];
                        let diaQuarta = [$('#inputDeQuarta').val(), $('#inputAteQuarta').val()];
                        let diaQuinta = [$('#inputDeQuinta').val(), $('#inputAteQuinta').val()];
                        let diaSexta = [$('#inputDeSexta').val(), $('#inputAteSexta').val()];
                        let diaSabado = [$('#inputDeSábado').val(), $('#inputAteSábado').val()];
                        let turmaId = idTurma;
    
                        $.ajax({
                            url: "php/atualizarhoras.php",
                            type: "POST",
                            data: {
                                domingo: diaDomingo,
                                segunda: diaSegunda,
                                terca: diaTerca,
                                quarta: diaQuarta,
                                quinta: diaQuinta,
                                sexta: diaSexta,
                                sabado: diaSabado,
                                idTurma: turmaId
                            }
                        })
                        .done(function(data){
                            if(data == 0){
                                alert("Sucesso! Horário de Uso da Mesa Cadastrado!");
                                location.reload();
                            } else if(data == 1){
                                alert("Erro no horário de Domingo. A hora de Início não pode ser menor que a hora fim.");
                            } else if(data == 2){
                                alert("Erro no horário de Segunda. A hora de Início não pode ser menor que a hora fim.");
                            } else if(data == 3){
                                alert("Erro no horário de Terca. A hora de Início não pode ser menor que a hora fim.");
                            }  else if(data == 4){
                                alert("Erro no horário de Quarta. A hora de Início não pode ser menor que a hora fim.");
                            }  else if(data == 5){
                                alert("Erro no horário de Quinta. A hora de Início não pode ser menor que a hora fim.");
                            } else if(data == 6){
                                alert("Erro no horário de Sexta. A hora de Início não pode ser menor que a hora fim.");
                            } else if(data == 7){
                                alert("Erro no  horário de Sabado. A hora de Início não pode ser menor que a hora fim.");
                            }
                        });
                    });
    
                    ///Fim do Horario de Uso
                });
            }

        });
    });

    $('#pesquisaAluno').on('change', function(){
        let getSearch = this.value;
        let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.innerHTML;
        // let nomeTurmaEdited = nomeDaTurma.split('-');
        $.ajax({
            url: "php/turmas.php?act=pesquisa",
            type: "POST",
            data: {
                pesquisa: getSearch,
                nomeTurma: nomeDaTurma
            }
        })
        .done(function(data){
            let dadosPesquisa = JSON.parse(data);
            if(dadosPesquisa == ''){
                alert("Nenhum aluno com esse nome cadastrado.");
            } else {
               $('#conteudoAluno').html('');
               $(dadosPesquisa).each(function(i, value){
                    let dadosAlunoPesquisados = `<div class="itemAluno" id="Aluno-`+value.id+`">`+
                                                    `<img src="assets/`+value.avatar+`.png" alt="aluno`+value.avatar+`">`+
                                                    `<label id="lblAluno-`+value.id+`">`+value.nomeAluno+`</label>`+
                                                `</div>`;
                    $('#conteudoAluno').append(dadosAlunoPesquisados);
               });
            }
        });
    });

    $('#pesquisaMusicas').on('change', function(){
        let getSearch = this.value;
        let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
        let nomeTurmaEdited = nomeDaTurma.split('-');

        $.ajax({
            url: "php/musicas.php?act=pesquisa",
            type: "POST",
            data: {
                pesquisa: getSearch,
                idTurma: nomeTurmaEdited[1]
            }
        })
        .done(function(data){
            let dadosPesquisa = JSON.parse(data);
            if(dadosPesquisa == ''){
                alert("Nenhuma Música cadastrada com o nome pesquisado.");
            } else {
                $('#conteudoMusicas').html('');
                $(dadosPesquisa).each(function(i, value){
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let extension = nome.split('.');
                    let dadosPesquuisados = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                                                `<img src="assets/off.png" alt="Permission" id="checkMusic-`+value.id+`-Red" class="checkMusicaRed">`+
                                                `<img src="assets/on.png" alt="Permission" id="checkMusic-`+value.id+`-Green" class="checkMusicaGreen">`+
                                                `<audio controls>`+
                                                    `<source src="`+value.playlist+`/`+value.nome+`" type="audio/`+extension[1]+`">`+
                                                `</audio>`+
                                                `<label class="">`+extension[0]+`</label>`+
                                            `</div>`;
                    $('#conteudoMusicas').append(dadosPesquuisados);

                    if(value.ativo == 'false'){
                        $('#checkMusic-'+value.id+'-Green').css('display', 'none');
                        $('#checkMusic-'+value.id+'-Red').css('display', 'block');
                    } else if(value.ativo == 'true'){
                        $('#checkMusic-'+value.id+'-Red').css('display', 'none');
                        $('#checkMusic-'+value.id+'-Green').css('display', 'block');
                    }

                    $('#checkMusic-'+value.id+'-Red').on('click', function(){

                        let checkMusic = 'true';
                        $.ajax({
                            url: "php/musicas.php?act=permissionMusic",
                            type: "POST",
                            data: {
                                checkMusic: checkMusic,
                                idMusic: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 1){
                                alert("Erro!");
                                location.reload();
                            } else if(data == 0){
                                $('#checkMusic-'+value.id+'-Red').css('display', 'none');
                                $('#checkMusic-'+value.id+'-Green').css('display', 'block');
                            }
                        });
                    });

                    $('#checkMusic-'+value.id+'-Green').on('click', function(){

                        let checkMusic = 'false';
                        $.ajax({
                            url: "php/musicas.php?act=permissionMusic",
                            type: "POST",
                            data: {
                                checkMusic: checkMusic,
                                idMusic: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 1){
                                alert("Erro!");
                                location.reload();
                            } else if(data == 0){
                                $('#checkMusic-'+value.id+'-Green').css('display', 'none');
                                $('#checkMusic-'+value.id+'-Red').css('display', 'block');
                            }
                        });
                    });
                });
            }
        });
    });

    $('#pesquisaVideos').on('change', function(){
        let getSearch = this.value;
        let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
        let nomeTurmaEdited = nomeDaTurma.split('-');

        $.ajax({
            url: "php/videos.php?act=pesquisa",
            type: "POST",
            data: {
                pesquisa: getSearch,
                idTurma: nomeTurmaEdited[1]
            }
        })
        .done(function(data){
            let dadosPesquisa = JSON.parse(data);
            if(dadosPesquisa == ''){
                alert("Nenhuma video cadastrado   com o  nome pesquisado.");
            } else {
                $('#conteudoVideos').html('');
                $(dadosPesquisa).each(function(i, value){
                    let extension = value.nome_video.split('.');
                    let nome = value.nome_video.split('.');
                    let videosItem = `<div class="itemVideo">`+
                                        `<video width="250" height="200" controls>`+
                                            `<source src="`+ value.link +`/`+ value.nome_video +`" type="video/ogg">`+
                                        `</video>`+
                                        `<label class="tituloVideo">`+nome[0]+`</label>`+
                                        `<img src="assets/off.png" alt="Video" id="video-`+value.id+`-Red" class="checkVideoRed">`+
                                        `<img src="assets/on.png" alt="Video" id="video-`+value.id+`-Green" class="checkVideoGreen">`+
                                    `</div>`;
                    $('#conteudoVideos').append(videosItem);

                    if(value.ativo == 'false'){
                        $('#video-'+value.id+'-Green').css('display', 'none');
                        $('#video-'+value.id+'-Red').css('display', 'block');
                    } else if(value.ativo == 'true'){
                        $('#video-'+value.id+'-Red').css('display', 'none');
                        $('#video-'+value.id+'-Green').css('display', 'block');
                    }

                    $('#video-'+ value.id + '-Red').on('click', function(){

                        let permissinoVideo = 'true';
                        $.ajax({
                            url: "php/videos.php?act=permissionVideo",
                            type: "POST",
                            data: {
                                checkVideo: permissinoVideo,
                                videoId: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 0){
                                $('#video-'+value.id+'-Red').css('display', 'none');
                                $('#video-'+value.id+'-Green').css('display', 'block');
                            } else {
                                alert("Erro!");
                                location.reload();
                            }
                        });
                    });

                    $('#video-'+ value.id + '-Green').on('click', function(){
                        let permissinoVideo = 'false';
                        $.ajax({
                            url: "php/videos.php?act=permissionVideo",
                            type: "POST",
                            data: {
                                checkVideo: permissinoVideo,
                                videoId: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 0){
                                $('#video-'+value.id+'-Green').css('display', 'none');
                                $('#video-'+value.id+'-Red').css('display', 'block');
                            } else {
                                alert("Erro!");
                                location.reload();
                            }
                        });
                    });

                });
            }
        })
    });

    $('#pesquisaSites').on('change', function(){
        let getSearch = this.value;
        let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
        let nomeTurmaEdited = nomeDaTurma.split('-');

        $.ajax({
            url: "php/site.php?act=pesquisa",
            type: "POST",
            data: {
                pesquisa: getSearch,
                idTurma: nomeTurmaEdited[1]
            }
        })
        .done(function(data){
            let dadosPesquisa = JSON.parse(data);
            if(dadosPesquisa == ''){
                alert("Nenhum site cadastrado com o nome pesquisado.");
            } else {
                $('#conteudoSites').html('');
                $(dadosPesquisa).each(function(i, value){
                    let itemSite = `<div class="itemSite" id="site-`+value.id+`">`+
                                        `<a href="`+value.dominio+`" target="_blank" class="linkSite">`+
                                            `<img src="assets/browser.png" alt="Browser" class="pagIcon">`+
                                            `<label class="lblSite">`+value.nome+`</label>`+
                                        `</a>`+
                                        `<img src="assets/off.png" id="site-`+value.id+`-Red" class="checkSiteRed">`+
                                        `<img src="assets/on.png" id="site-`+value.id+`-Green" class="checkSiteGreen">`+
                                    `</div>`;
                    $('#conteudoSites').append(itemSite);

                    if(value.ativo == 'false'){
                        $('#site-'+value.id+'-Green').css('display', 'none');
                        $('#site-'+value.id+'-Red').css('display', 'block');
                    } else if(value.ativo == 'true'){
                        $('#site-'+value.id+'-Red').css('display', 'none');
                        $('#site-'+value.id+'-Green').css('display', 'block');
                    }

                    $('#site-'+value.id+'-Red').on('click', function(){
                        let permissionSite = 'true';

                        $.ajax({
                            url: "php/site.php?act=permissionSite",
                            type: "POST",
                            data: {
                                checkSite: permissionSite,
                                siteId: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 0){
                                $('#site-'+value.id+'-Red').css('display', 'none');
                                $('#site-'+value.id+'-Green').css('display', 'block');
                            } else {
                                alert('Erro!');
                                location.reload();
                            }
                        });
                    });

                    $('#site-'+value.id+'-Green').on('click', function(){
                        let permissionSite = 'false';

                        $.ajax({
                            url: "php/site.php?act=permissionSite",
                            type: "POST",
                            data: {
                                checkSite: permissionSite,
                                siteId: value.id
                            }
                        })
                        .done(function(data){
                            if(data == 0){
                                $('#site-'+value.id+'-Green').css('display', 'none');
                                $('#site-'+value.id+'-Red').css('display', 'block');
                            } else {
                                alert('Erro!');
                                location.reload();
                            }
                        });
                    });
                });
            }
        });
    });
    
    // Ambientes Admin

    /// Ambiente 1 ///

    var semTurma = 1;

    $.ajax({
        url: "php/jogos.php?act=get1",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos1 = JSON.parse(data);
        if(jogos1.result == ''){
            $('#JogosAmbientes1Admin').html('');
            let jogo1AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes1Admin').append(jogo1AdminVazio);
        } else {
            $('#JogosAmbientes1Admin').css('display', 'none');
            $('#gridJogosAmbiente1Admin').css('display', 'grid');
            $(jogos1.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo1Item = `<div class="itemJogo1">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 1" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo1-`+value.id+`">`+
                                    `<label for="permissionJogo1" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente1Admin').append(jogo1Item);

                $('#btnDelJogo1-'+value.id).on('click', function(){
                    let idItem = value.id;

                    $.ajax({
                        url: "php/jogos.php?act=removeJogo1",
                        type: "POST",
                        data: {
                            idRemoveJogo1: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });

            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get1",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook1 = JSON.parse(data);
        $('#EbooksAmbientes1Admin').html('');
        if(ebook1.result == ''){
            let ebook1AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes1Admin').append(ebook1AdminVazio);
        } else {
            $('#EbooksAmbientes1Admin').css('display', 'none');
            $('#gridEbooksAmbiente1Admin').css('display', 'grid');
            $(ebook1.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook1Item = `<div class="itemEbook1">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 1" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook1-`+value.id+`">`+
                                    `<label for="permissionEbook1" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente1Admin').append(ebook1Item);

                $('#btnDelEbook1-'+value.id).on('click', function(){
                    let idItem = value.id;

                    $.ajax({
                        url: "php/ebook.php?act=removeEbook1",
                        type: "POST",
                        data: {
                            idRemoveEbook1: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get1",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido1 = JSON.parse(data);
        if(hibrido1.result == ''){
            $('#JogoHibridoAmbientes1Admin').html('');
            let hibrido1AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes1Admin').append(hibrido1AdminVazio);
        } else {
            $('#JogoHibridoAmbientes1Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente1Admin').css('display', 'grid');
            $(hibrido1.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido1Item = `<div class="itemJogoHibrido1">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 1" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido1-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido1" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente1Admin').append(hibrido1Item);

                $('#btnDelHibrido1-'+value.id).on('click', function(){
                    let idItem = value.id;

                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid1",
                        type: "POST",
                        data: {
                            idRemoveJogorfid1: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 2 ///

    $.ajax({
        url: "php/jogos.php?act=get2",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos2 = JSON.parse(data);
        if(jogos2.result == ''){
            $('#JogosAmbientes2Admin').html('');
            let jogo2AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes2Admin').append(jogo2AdminVazio);
        } else {
            $('#JogosAmbientes2Admin').css('display', 'none');
            $('#gridJogosAmbiente2Admin').css('display', 'grid');
            $(jogos2.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo2Item = `<div class="itemJogo2">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 2" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo2-`+value.id+`">`+
                                    `<label for="permissionJogo2" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente2Admin').append(jogo2Item);

                $('#btnDelJogo2-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo2",
                        type: "POST",
                        data: {
                            idRemoveJogo2: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get2",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook2 = JSON.parse(data);
        if(ebook2.result == ''){
            $('#EbooksAmbientes2Admin').html('');
            let ebook2AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes2Admin').append(ebook2AdminVazio);
        } else {
            $('#EbooksAmbientes2Admin').css('display', 'none');
            $('#gridEbooksAmbiente2Admin').css('display', 'grid');
            $(ebook2.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook2Item = `<div class="itemEbook2">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 2" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook2-`+value.id+`">`+
                                    `<label for="permissionEbook2" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente2Admin').append(ebook2Item);

                $('#btnDelEbook2-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook2",
                        type: "POST",
                        data: {
                            idRemoveEbook2: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get2",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido2 = JSON.parse(data);
        if(hibrido2.result == ''){
            $('#JogoHibridoAmbientes2Admin').html('');
            let hibrido2AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes2Admin').append(hibrido2AdminVazio);
        } else {
            $('#JogoHibridoAmbientes2Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente2Admin').css('display', 'grid');
            $(hibrido2.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido2Item = `<div class="itemJogoHibrido2">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 2" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido2-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido2" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente2Admin').append(hibrido2Item);

                $('#btnDelHibrido2-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid2",
                        type: "POST",
                        data: {
                            idRemoveJogorfid2: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 3 ///

    $.ajax({
        url: "php/jogos.php?act=get3",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos3 = JSON.parse(data);
        if(jogos3.result == ''){
            $('#JogosAmbientes3Admin').html('');
            let jogo3AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes3Admin').append(jogo3AdminVazio);
        } else {
            $('#JogosAmbientes3Admin').css('display', 'none');
            $('#gridJogosAmbiente3Admin').css('display', 'grid');
            $(jogos3.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo3Item = `<div class="itemJogo3">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 3" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo3-`+value.id+`">`+
                                    `<label for="permissionJogo3" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente3Admin').append(jogo3Item);

                $('#btnDelJogo3-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo3",
                        type: "POST",
                        data: {
                            idRemoveJogo3: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get3",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook3 = JSON.parse(data);
        if(ebook3.result == ''){
            $('#EbooksAmbientes3Admin').html('');
            let ebook3AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes3Admin').append(ebook3AdminVazio);
        } else {
            $('#EbooksAmbientes3Admin').css('display', 'none');
            $('#gridEbooksAmbiente3Admin').css('display', 'grid');
            $(ebook3.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook3Item = `<div class="itemEbook3">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 3" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook3-`+value.id+`">`+
                                    `<label for="permissionEbook3" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente3Admin').append(ebook3Item);

                $('#btnDelEbook3-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook3",
                        type: "POST",
                        data: {
                            idRemoveEbook3: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get3",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido3 = JSON.parse(data);
        if(hibrido3.result == ''){
            $('#JogoHibridoAmbientes3Admin').html('');
            let hibrido3AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes3Admin').append(hibrido3AdminVazio);
        } else {
            $('#JogoHibridoAmbientes3Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente3Admin').css('display', 'grid');
            $(hibrido3.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido3Item = `<div class="itemJogoHibrido3">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 3" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido3-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido3" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente3Admin').append(hibrido3Item);

                $('#btnDelHibrido3-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid3",
                        type: "POST",
                        data: {
                            idRemoveJogorfid3: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 4 ///

    $.ajax({
        url: "php/jogos.php?act=get4",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos4 = JSON.parse(data);
        if(jogos4.result == ''){
            $('#JogosAmbientes4Admin').html('');
            let jogo4AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes4Admin').append(jogo4AdminVazio);
        } else {
            $('#JogosAmbientes4Admin').css('display', 'none');
            $('#gridJogosAmbiente4Admin').css('display', 'grid');
            $(jogos4.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo4Item = `<div class="itemJogo4">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 4" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo4-`+value.id+`">`+ 
                                    `<label for="permissionJogo4" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente4Admin').append(jogo4Item);

                $('#btnDelJogo4-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo4",
                        type: "POST",
                        data: {
                            idRemoveJogo4: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get4",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook4 = JSON.parse(data);
        if(ebook4.result == ''){
            $('#EbooksAmbientes4Admin').html('');
            let ebook4AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes4Admin').append(ebook4AdminVazio);
        } else {
            $('#EbooksAmbientes4Admin').css('display', 'none');
            $('#gridEbooksAmbiente4Admin').css('display', 'grid');
            $(ebook4.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook4Item = `<div class="itemEbook4">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 4" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook4-`+value.id+`">`+
                                    `<label for="permissionEbook4" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente4Admin').append(ebook4Item);

                $('#btnDelEbook4-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook4",
                        type: "POST",
                        data: {
                            idRemoveEbook4: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get4",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido4 = JSON.parse(data);
        if(hibrido4.result == ''){
            $('#JogoHibridoAmbientes4Admin').html('');
            let hibrido4AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes4Admin').append(hibrido4AdminVazio);
        } else {
            $('#JogoHibridoAmbientes4Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente4Admin').css('display', 'grid');
            $(hibrido4.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido4Item = `<div class="itemJogoHibrido4">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 4" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido4-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido4" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente4Admin').append(hibrido4Item);

                $('#btnDelHibrido4-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid4",
                        type: "POST",
                        data: {
                            idRemoveJogorfid4: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 5 ///
    
    $.ajax({
        url: "php/jogos.php?act=get5",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos5 = JSON.parse(data);
        if(jogos5.result == ''){
            $('#JogosAmbientes5Admin').html('');
            let jogo5AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes5Admin').append(jogo5AdminVazio);
        } else {
            $('#JogosAmbientes5Admin').css('display', 'none');
            $('#gridJogosAmbiente5Admin').css('display', 'grid');
            $(jogos5.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo5Item = `<div class="itemJogo5">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 5" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo5-`+value.id+`">`+
                                    `<label for="permissionJogo5" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente5Admin').append(jogo5Item);

                $('#btnDelJogo5-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo5",
                        type: "POST",
                        data: {
                            idRemoveJogo5: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get5",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook5 = JSON.parse(data);
        if(ebook5.result == ''){
            $('#EbooksAmbientes5Admin').html('');
            let ebook5AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes5Admin').append(ebook5AdminVazio);
        } else {
            $('#EbooksAmbientes5Admin').css('display', 'none');
            $('#gridEbooksAmbiente5Admin').css('display', 'grid');
            $(ebook5.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook5Item = `<div class="itemEbook5">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 5" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook5-`+value.id+`">`+
                                    `<label for="permissionEbook5" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente5Admin').append(ebook5Item);

                $('#btnDelEbook5-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook5",
                        type: "POST",
                        data: {
                            idRemoveEbook5: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get5",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido5 = JSON.parse(data);
        if(hibrido5.result == ''){
            $('#JogoHibridoAmbientes5Admin').html('');
            let hibrido5AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes5Admin').append(hibrido5AdminVazio);
        } else {
            $('#JogoHibridoAmbientes5Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente5Admin').css('display', 'grid');
            $(hibrido5.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido5Item = `<div class="itemJogoHibrido5">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 5" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido5-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido5" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente5Admin').append(hibrido5Item);

                $('#btnDelHibrido5-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid5",
                        type: "POST",
                        data: {
                            idRemoveJogorfid5: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 6 ///

    $.ajax({
        url: "php/jogos.php?act=get6",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos6 = JSON.parse(data);
        if(jogos6.result == ''){
            $('#JogosAmbientes6Admin').html('');
            let jogo6AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes6Admin').append(jogo6AdminVazio);
        } else {
            $('#JogosAmbientes6Admin').css('display', 'none');
            $('#gridJogosAmbiente6Admin').css('display', 'grid');
            $(jogos6.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo6Item = `<div class="itemJogo6">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 6" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo6-`+value.id+`">`+
                                    `<label for="permissionJogo6" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente6Admin').append(jogo6Item);

                $('#btnDelJogo6-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo6",
                        type: "POST",
                        data: {
                            idRemoveJogo6: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get6",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook6 = JSON.parse(data);
        if(ebook6.result == ''){
            $('#EbooksAmbientes6Admin').html('');
            let ebook6AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes6Admin').append(ebook6AdminVazio);
        } else {
            $('#EbooksAmbientes6Admin').css('display', 'none');
            $('#gridEbooksAmbiente6Admin').css('display', 'grid');
            $(ebook6.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook6Item = `<div class="itemEbook6">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 6" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook6-`+value.id+`">`+
                                    `<label for="permissionEbook6" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente6Admin').append(ebook6Item);

                $('#btnDelEbook6-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook6",
                        type: "POST",
                        data: {
                            idRemoveEbook6: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get6",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido6 = JSON.parse(data);
        if(hibrido6.result == ''){
            $('#JogoHibridoAmbientes6Admin').html('');
            let hibrido6AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes6Admin').append(hibrido6AdminVazio);
        } else {
            $('#JogoHibridoAmbientes6Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente6Admin').css('display', 'grid');
            $(hibrido6.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido6Item = `<div class="itemJogoHibrido6">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 6" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido6-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido6" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente6Admin').append(hibrido6Item);

                $('#btnDelHibrido6-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid6",
                        type: "POST",
                        data: {
                            idRemoveJogorfid6: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 7 ///

    $.ajax({
        url: "php/jogos.php?act=get7",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos7 = JSON.parse(data);
        if(jogos7.result == ''){
            $('#JogosAmbientes7Admin').html('');
            let jogo7AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes7Admin').append(jogo7AdminVazio);
        } else {
            $('#JogosAmbientes7Admin').css('display', 'none');
            $('#gridJogosAmbiente7Admin').css('display', 'grid');
            $(jogos7.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo7Item = `<div class="itemJogo7">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 7" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo7-`+value.id+`">`+
                                    `<label for="permissionJogo7" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente7Admin').append(jogo7Item);

                $('#btnDelJogo7-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo7",
                        type: "POST",
                        data: {
                            idRemoveJogo7: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get7",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook7 = JSON.parse(data);
        if(ebook7.result == ''){
            $('#EbooksAmbientes7Admin').html('');
            let ebook7AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes7Admin').append(ebook7AdminVazio);
        } else {
            $('#EbooksAmbientes7Admin').css('display', 'none');
            $('#gridEbooksAmbiente7Admin').css('display', 'grid');
            $(ebook7.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook7Item = `<div class="itemEbook7">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 7" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook7-`+value.id+`">`+
                                    `<label for="permissionEbook7" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente7Admin').append(ebook7Item);

                $('#btnDelEbook7-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook7",
                        type: "POST",
                        data: {
                            idRemoveEbook7: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get7",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido7 = JSON.parse(data);
        if(hibrido7.result == ''){
            $('#JogoHibridoAmbientes7Admin').html('');
            let hibrido7AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes7Admin').append(hibrido7AdminVazio);
        } else {
            $('#JogoHibridoAmbientes7Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente7Admin').css('display', 'grid');
            $(hibrido7.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido7Item = `<div class="itemJogoHibrido7">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 7" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido7-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido7" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente7Admin').append(hibrido7Item);

                $('#btnDelHibrido7-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid7",
                        type: "POST",
                        data: {
                            idRemoveJogorfid7: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 8 ///

    $.ajax({
        url: "php/jogos.php?act=get8",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos8 = JSON.parse(data);
        if(jogos8.result == ''){
            $('#JogosAmbientes8Admin').html('');
            let jogo8AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes8Admin').append(jogo8AdminVazio);
        } else {
            $('#JogosAmbientes8Admin').css('display', 'none');
            $('#gridJogosAmbiente8Admin').css('display', 'grid');
            $(jogos8.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo8Item = `<div class="itemJogo8">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 8" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo8-`+value.id+`">`+ 
                                    `<label for="permissionJogo8" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente8Admin').append(jogo8Item);

                $('#btnDelJogo8-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo8",
                        type: "POST",
                        data: {
                            idRemoveJogo8: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get8",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook8 = JSON.parse(data);
        if(ebook8.result == ''){
            $('#EbooksAmbientes8Admin').html('');
            let ebook8AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes8Admin').append(ebook8AdminVazio);
        } else {
            $('#EbooksAmbientes8Admin').css('display', 'none');
            $('#gridEbooksAmbiente8Admin').css('display', 'grid');
            $(ebook8.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook8Item = `<div class="itemEbook8">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 8" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook8-`+value.id+`">`+
                                    `<label for="permissionEbook8" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente8Admin').append(ebook8Item);

                $('#btnDelEbook8-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook8",
                        type: "POST",
                        data: {
                            idRemoveEbook8: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get8",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido8 = JSON.parse(data);
        if(hibrido8.result == ''){
            $('#JogoHibridoAmbientes8Admin').html('');
            let hibrido8AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes8Admin').append(hibrido8AdminVazio);
        } else {
            $('#JogoHibridoAmbientes8Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente8Admin').css('display', 'grid');
            $(hibrido8.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido8Item = `<div class="itemJogoHibrido8">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 8" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido8-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido8" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente8Admin').append(hibrido8Item);

                $('#btnDelHibrido8-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid8",
                        type: "POST",
                        data: {
                            idRemoveJogorfid8: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Ambiente 9///

    $.ajax({
        url: "php/jogos.php?act=get9",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let jogos9 = JSON.parse(data);
        if(jogos9.result == ''){
            $('#JogosAmbientes9Admin').html('');
            let jogo9AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos no Ambiente</h1>`;
            $('#JogosAmbientes9Admin').append(jogo9AdminVazio);
        } else {
            $('#JogosAmbientes9Admin').css('display', 'none');
            $('#gridJogosAmbiente9Admin').css('display', 'grid');
            $(jogos9.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let jogo9Item = `<div class="itemJogo9">`+
                                    `<img src="jogos/`+ value.nome +`/icone.png" alt="Jogo Ambiente 9" class="imgJogo-">`+
                                    `<a href="jogos/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelJogo9-`+value.id+`">`+
                                    `<label for="permissionJogo9" class=" lblJogo-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogosAmbiente9Admin').append(jogo9Item);

                $('#btnDelJogo9-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogos.php?act=removeJogo9",
                        type: "POST",
                        data: {
                            idRemoveJogo9: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/ebook.php?act=get9",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let ebook9 = JSON.parse(data);
        if(ebook9.result == ''){
            $('#EbooksAmbientes9Admin').html('');
            let ebook9AdminVazio = `<h1 class="AdminVazio">Ainda não há Histórias Digitais no Ambiente</h1>`;
            $('#EbooksAmbientes9Admin').append(ebook9AdminVazio);
        } else {
            $('#EbooksAmbientes9Admin').css('display', 'none');
            $('#gridEbooksAmbiente9Admin').css('display', 'grid');
            $(ebook9.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let ebook9Item = `<div class="itemEbook9">`+
                                    `<img src="ebooks/`+ value.nome +`/icone.png" alt="Ebook Ambiente 9" class="imgEbook-">`+
                                    `<a href="ebooks/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelEbook9-`+value.id+`">`+
                                    `<label for="permissionEbook9" class=" lblEbook-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridEbooksAmbiente9Admin').append(ebook9Item);

                $('#btnDelEbook9-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/ebook.php?act=removeEbook9",
                        type: "POST",
                        data: {
                            idRemoveEbook9: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("História Digital "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações da história digital.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    $.ajax({
        url: "php/jogorfid.php?act=get9",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let hibrido9 = JSON.parse(data);
        if(hibrido9.result == ''){
            $('#JogoHibridoAmbientes9Admin').html('');
            let hibrido9AdminVazio = `<h1 class="AdminVazio">Ainda não há Jogos Híbridos no Ambiente</h1>`;
            $('#JogoHibridoAmbientes9Admin').append(hibrido9AdminVazio);
        } else {
            $('#JogoHibridoAmbientes9Admin').css('display', 'none');
            $('#gridJogoHibridoAmbiente9Admin').css('display', 'grid');
            $(hibrido9.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let hibrido9Item = `<div class="itemJogoHibrido9">`+
                                    `<img src="jogorfid/`+ value.nome +`/icone.png" alt="JogoHibrido Ambiente 9" class="imgJogoHibrido-">`+
                                    `<a href="jogorfid/`+ value.nome +`/index.html" target="_blank" class="aContent"><img src="./assets/botao-play.png" class="btnPlayerContent"/></a>`+
                                    `<img src="assets/Lixeira.png" alt="Deletar" class="btnDelConteudo" id="btnDelHibrido9-`+value.id+`">`+
                                    `<label for="permissionJogoHibrido9" class=" lblJogoHibrido-`+value.nome+`">`+ nome +`</label>`+
                                `</div>`;
                $('#gridJogoHibridoAmbiente9Admin').append(hibrido9Item);

                $('#btnDelHibrido9-'+value.id).on('click', function(){
                    let idItem = value.id;
                
                    $.ajax({
                        url: "php/jogorfid.php?act=removeJogoRfid9",
                        type: "POST",
                        data: {
                            idRemoveJogorfid9: idItem
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Jogo Híbrido "+ nome +" excuído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, verifique as informações do jogo Híbrido.");
                            location.reload();
                        }
                    });
                });
            });
        }
    });

    /// Fim dos Ambientes

    /// Músicas

    $.ajax({
        url: "php/musicas.php?act=get",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let musicas = JSON.parse(data);
        if(musicas.result == ''){
            $('#conteudoMusicasAdmin').html('');
            let musicasVazio = `<h1 id="musicasVazioAdmin">Ainda não há Músicas no Ambiente</h1>`;
            $('#conteudoMusicasAdmin').append(musicasVazio);
        } else {
            $('#conteudoMusicasAdmin').html('');
            $(musicas.result).each(function(i, value){
                let nome = value.nome.replace(/[-_]+/g, ' ');
                let extension = nome.split('.');
                if(value.ativo == 'false'){
                    let checkIcon = 'off';
                    let itemMusic = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                                        // `<img src="assets/`+checkIcon+`.png" alt="Permission">`+
                                        `<audio controls>`+
                                            `<source src="`+value.playlist+`/`+value.nome+`" type="audio/`+extension[1]+`">`+
                                        `</audio>`+
                                        `<label class="">`+extension[0]+`</label>`+
                                        `<img src="assets/Lixeira.png" class="btnDelMusic" id="btnDelMusic-`+value.id+`"`+
                                    `</div>`;
                    // let itemMusic = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                    //                     `<div class="permission-item-music"  id="permissionMusic-`+value.id+`">`+
                    //                         `<img src="assets/`+checkIcon+`.png" alt="check Positive" class="check-item-music">`+
                    //                     `</div>`+
                    //                     `<div class="play-pause-music" id="play-pause-`+value.id+`">`+
                    //                         `<img src="assets/botao-play.png" alt="Play" class="btnPlay-music invert" id="play-`+value.id+`">`+
                    //                         `<img src="assets/pausa.png" alt="Pause" class="btnPlay-music invert" id="pause-`+value.id+`" hidden>`+
                    //                     `</div>`+
                    //                     `<div class="player-progress">`+
                    //                         `<div class="name-music">`+
                    //                             `<span class="name-track">`+value.nome+`</span>`+
                    //                         `</div>`+
                    //                         `<div class="time-music">`+
                    //                             `<span class="current-time" id="current-`+value.id+`">00:00</span>`+
                    //                             `<span class="div-time">/</span>`+
                    //                             `<span class="total-time" id="total-`+value.id+`">00:00</span>`+
                    //                         `</div>`+
                    //                     `</div>`+
                    //                     `<div class="volume-music">`+
                    //                         `<input type="range" id="volume" min="0" max="1" value="1" step="0.01" class="player-volume" />`+
                    //                     `</div>`+
                    //                     `<audio src="`+value.playlist+`/`+value.nome+`" crossorigin="anonymous" ></audio>`+
                    //                     `<div class="remove-music">`+
                    //                         `<img src="assets/Botão Remover.png" alt="Excluir Musica" class="LixeiraMusic" id="remover-`+value.id+`">`+
                    //                     `</div>`+
                    //                 `</div>`;
                    $('#conteudoMusicasAdmin').append(itemMusic);
                } else if(value.ativo == 'true'){
                    let checkIcon = 'on';
                    let itemMusic = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                                        `<img src="assets/`+checkIcon+`.png" alt="Permission">`+
                                        `<audio controls>`+
                                            `<source src="`+value.playlist+`/`+value.nome+`" type="audio/`+extension[1]+`">`+
                                        `</audio>`+
                                        `<label class="">`+extension[0]+`</label>`+
                                    `</div>`;
                    // let itemMusic = `<div class="item-Music" id="musicItem-`+value.id+`">`+
                    //                     `<div class="permission-item-music"  id="permissionMusic-`+value.id+`">`+
                    //                         `<img src="assets/`+checkIcon+`.png" alt="check Positive" class="check-item-music">`+
                    //                     `</div>`+
                    //                     `<div class="play-pause-music" id="play-pause-`+value.id+`">`+
                    //                         `<img src="assets/botao-play.png" alt="Play" class="btnPlay-music invert" id="play-`+value.id+`">`+
                    //                         `<img src="assets/pausa.png" alt="Pause" class="btnPlay-music invert" id="pause-`+value.id+`" hidden>`+
                    //                     `</div>`+
                    //                     `<div class="player-progress">`+
                    //                         `<div class="name-music">`+
                    //                             `<span class="name-track">`+value.nome+`</span>`+
                    //                         `</div>`+
                    //                         `<div class="time-music">`+
                    //                             `<span class="current-time" id="current-`+value.id+`">00:00</span>`+
                    //                             `<span class="div-time">/</span>`+
                    //                             `<span class="total-time" id="total-`+value.id+`">00:00</span>`+
                    //                         `</div>`+
                    //                     `</div>`+
                    //                     `<div class="volume-music">`+
                    //                         `<input type="range" id="volume" min="0" max="1" value="1" step="0.01" class="player-volume" />`+
                    //                     `</div>`+
                    //                     `<audio src="`+value.playlist+`/`+value.nome+`" crossorigin="anonymous" preload="metadata" id="audio-`+value.id+`"></audio>`+
                    //                 `</div>`;
                    $('#conteudoMusicasAdmin').append(itemMusic);
                }

                // const audioElement = document.querySelector("audio");
                // const audioCtx = new AudioContext();
                // const track = audioCtx.createMediaElementSource(audioElement);
                // const playButton = document.querySelector(".btnPlay-music");
                // const progress = document.querySelector(".player-progress");
                // const progressFilled = document.querySelector(".player-progress-filled");
                // const playerCurrentTime = document.querySelector(".current-time");
                // const playerDuration = document.querySelector(".total-time");
                // const volumeControl = document.querySelector(".player-volume");

                // console.log("audioCtx: ", audioCtx);

                // $('#play-'+value.id).on("click", () =>{
                //     if(audioCtx.state === "suspended") {
                //         audioElement.play();
                //     }
                //     if(playButton.dataset.playing === "false"){
                //         audioElement.play();
                //         playButton.dataset.playing = "true";
                //         $('#play-'+value.id).addClass('hidden');
                //         $('#pause-'+value.id).removeClass('hidden');
                //     } else if(playButton.dataset.playing === "true"){
                //         audioElement.pause();
                //         playButton.dataset.playing = "false";
                //         $('#pause-'+value.id);addClass('hidden');
                //         $('#play-'+value.id).removeClass('hidden');
                //     } 
                // });

                // audioElement.addEventListener("timeupdate", () =>{
                //     progressUpdate();
                //     setTimes();
                // });

                // const gainNode = audioCtx.createGain();
                // volumeControl.addEventListener("change", () => {
                //     gainNode.gain.value = volumeControl.value;
                // });

                // track.connect(gainNode).connect(audioCtx.destination);

                // audioElement.addEventListener("ended", () => {
                //     playButton.dataset.playing = "false";
                //     $('#pause-'+value.id);addClass('hidden');
                //     $('#play-'+value.id).removeClass('hidden');
                //     progressFilled.style.flexBasis = "0%";
                //     audioElement.currentTime = 0;
                //     audioElement.duration = audioElement.duration;
                // });

                // let mousedown = false
                // function scrub(event) {
                // const scrubTime =
                //     (event.offsetX / progress.offsetWidth) * audioElement.duration
                // audioElement.currentTime = scrubTime;
                // }
                // progress.addEventListener("click", scrub);
                // progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
                // progress.addEventListener("mousedown", () => (mousedown = true));
                // progress.addEventListener("mouseup", () => (mousedown = false));

                $('#btnDelMusic-'+value.id).on('click', function(){
                    $.ajax({
                        url: "php/musicas.php?act=remove",
                        type: "POST",
                        data: {
                            idRemoveMusica: value.id
                        }
                    })
                    .done(function(data){
                        console.log(data);
                        if(data == 0){
                            alert("Musica "+ nome + " excluída com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Atenção: Música "+ nome + " não foi excluída, verifique as informações e tente novamente.");
                        }
                    });
                });
            });
        }
    });

    /// Fim das Músicas

    /// Vídeos

    $.ajax({
        url: "php/videos.php?act=get",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let videos = JSON.parse(data);
        if(videos.result == ''){
            $('#conteudoVideosAdmin').html('');
            let videosVazio = `<h1 id="videosVazioAdmin">Ainda não há Vídeos no Ambiente</h1>`;
            $('#conteudoVideosAdmin').append(videosVazio);
        } else {
            $('#conteudoVideosAdmin').html('');
            $(videos.result).each(function(i, value){
                let nome = value.nome_video.replace(/[-_]+/g, ' ');
                let extension = nome.split('.');
                let itemVideo = `<div class="itemVideo" >`+
                                    `<video width="250" height="200" controls>`+
                                        `<source src="`+ value.link +`/`+ value.nome_video +`" type="video/ogg">`+
                                    `</video>`+
                                    `<img src="assets/Lixeira.png" class="btnDelVideo" id="btnDelVideo-`+value.id+`"`+
                                    `<label class="lblNomeVideo">`+ extension[0] +`</label>`+
                                `</div>`;
                $('#conteudoVideosAdmin').append(itemVideo);
                
                $('#btnDelVideo-'+value.id).on('click', function(){
                    $.ajax({
                        url: "php/videos.php?act=remove",
                        type: "POST",
                        data: {
                            idRemoveVideo: value.id
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Vídeo "+ extension[0] + " excluído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Atenção: Vídeo "+ extension[0] + " não foi excluído, verifique as informações e tente novamente.");
                        }
                    });
                });
            });
        }
    });

    /// Fim dos Vídeos

    /// Sites 

    $.ajax({
        url: "php/site.php?act=get",
        type: "POST",
        data: {
            idTurma: semTurma
        }
    })
    .done(function(data){
        let dadosSite = JSON.parse(data);
        if(dadosSite.result == ''){
            $('#conteudoSitesAdmin').html('');
            let SitesVazio = `<h1 id="sitesVazioAdmin">Ainda não há Sites no Ambiente</h1>`;
            $('#conteudoSitesAdmin').append(SitesVazio);
        } else {
            $('#conteudoSitesAdmin').html('');
            $(dadosSite.result).each(function(i, value){
                let itemSite = `<div class="itemSite" id="site-`+value.id+`">`+
                                    `<a href="`+value.dominio+`" target="_blank" class="linkSite">`+
                                        `<img src="assets/browser.png" alt="Browser" class="pagIcon">`+
                                        `<label class="lblSite">`+value.nome+`</label>`+
                                    `</a>`+
                                    `<img src="assets/Lixeira.png" class="btnDelSite" id="btnDelSite-`+value.id+`">`+
                                `</div>`;
                $('#conteudoSitesAdmin').append(itemSite);

                $('#btnDelSite-'+value.id).on('click', function(){
                    $.ajax({
                        url: "php/site.php?act=remove",
                        type: "POST",
                        data: {
                            idRemoveSite: value.id
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Site foi removido com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("não foi possível remover o site, verifique as informações e tente novamente.");
                        }
                    });
                });
            });
        }
    });

    /// Fim dos Sites

    ////  old conteudo.js

    $.ajax({
        url: "php/listarturma.php?act=listarturmaprofessor",
        type: "POST",
        data: {
            idProfSessao: idProfSessao
        },
        success: function (data) {
            try {
                let dadosTurma = JSON.parse(data);
                $(dadosTurma).each(function (index, item) {
                    let idTurma = item.id;
                    $('#btnTurma' + idTurma).on('click', function () {
                        let notificacao = 0;
                        $('#notification').removeClass('hidden');
                        $('#notificacao').empty();
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
                                            permissao = 0;
                                        } else {
                                            $(this).css('background-color', 'red');
                                            permissao = 1;
                                        }
                                        
    
                                    });
                                }
                            });
                        }
                        if($('#videosRow')){
                            $('#videosRow').empty();
                            $.ajax({
                                url: "php/videos.php?act=getVideos",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosVideos = JSON.parse(data);
                                    $(dadosVideos).each(function(index, value){
                                        let i = index++;
                                        let linkVideo = value.link;
                                        let separador = '?v=';
                                        var lk = linkVideo.split(separador);
                                        let nome = value.nome_video.replace(/[-_]+/g, ' ');   
                                        let cardVideo = `<div class="span2 item-video">` +
                                                        `<span id="iconeNovoVideo_`+ i +`" class="right notification"><img class="icone" src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -35px;"></img></span>`+
                                                            `<video width="180" height="135" controls>` +
                                                                `<source src="`+value.link+`/`+value.nome_video+`" type="video/mp4">` +
                                                                `<source src="`+value.link+`/`+value.nome_video+`" type="video/ogv">` +
                                                                `Your browser does not support the video tag.` +
                                                            `</video>` +
                                                            `<div>`+
                                                            `<h5 align="center">`+ nome +`</h5>`+
                                                            `<input type="checkbox" class='checkbox-video option-icon' data-id="`+ value.id +`">`+
                                                            `</div>`+
                                                        `</div>`;
                                        $('#videosRow').append(cardVideo);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-video').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoVideo_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-video').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            lista = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/videos.php?act=atualizarList', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        lista: lista
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos1Row')){
                            $('#jogos1Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos1",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos1 = JSON.parse(data);
                                    $(dadosJogos1).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo1 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo1_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos1 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos1Row').append(cardJogo1);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos1').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo1_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos1').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo1', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos2Row')){
                            $('#jogos2Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos2",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos2 = JSON.parse(data);
                                    $(dadosJogos2).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo2 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo2_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos2 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos2Row').append(cardJogo2);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos2').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo2_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos2').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo2', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos3Row')){
                            $('#jogos3Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos3",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos3 = JSON.parse(data);
                                    $(dadosJogos3).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo3 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo3_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos3 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos3Row').append(cardJogo3);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos3').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo3_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos3').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo3', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos4Row')){
                            $('#jogos4Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos4",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos4 = JSON.parse(data);
                                    $(dadosJogos4).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo4 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo4_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos4 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos4Row').append(cardJogo4);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos4').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo4_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos4').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo4', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos5Row')){
                            $('#jogos5Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos5",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos5 = JSON.parse(data);
                                    $(dadosJogos5).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo5 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo5_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos5 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos5Row').append(cardJogo5);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos5').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo5_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos5').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo5', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos6Row')){
                            $('#jogos6Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos6",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos6 = JSON.parse(data);
                                    $(dadosJogos6).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo6 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo6_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos6 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos6Row').append(cardJogo6);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos6').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo6_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos6').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo6', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos7Row')){
                            $('#jogos7Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos7",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos7 = JSON.parse(data);
                                    $(dadosJogos7).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo7 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo7_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos7 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos7Row').append(cardJogo7);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos7').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo7_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos7').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo7', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos8Row')){
                            $('#jogos8Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos8",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos8 = JSON.parse(data);
                                    $(dadosJogos8).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo8 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo8_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos8 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos8Row').append(cardJogo8);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos8').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo8_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos8').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo8', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogos9Row')){
                            $('#jogos9Row').empty();
                            $.ajax({
                                url: "php/jogos.php?act=getJogos9",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogos9 = JSON.parse(data);
                                    $(dadosJogos9).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogo9 = `<div class="span2 item">` +
                                                        `<span id="iconeNovoJogo9_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogos9 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogos9Row').append(cardJogo9);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogos9').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJogo9_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogos9').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogos.php?act=atualizarJogo9', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks1Row')){
                            $('#ebooks1Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks1",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook1 = JSON.parse(data);
                                    $(dadosEbook1).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook1 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook1_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook1 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks1Row').append(cardEbook1);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook1').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook1_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook1').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook1', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks2Row')){
                            $('#ebooks2Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks2",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook2 = JSON.parse(data);
                                    $(dadosEbook2).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook2 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook2_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook2 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks2Row').append(cardEbook2);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook2').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook2_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook2').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook2', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks3Row')){
                            $('#ebooks3Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks3",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook3 = JSON.parse(data);
                                    $(dadosEbook3).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook3 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook3_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook3 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks3Row').append(cardEbook3);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook3').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook3_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook3').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook3', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks4Row')){
                            $('#ebooks4Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks4",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook4 = JSON.parse(data);
                                    $(dadosEbook4).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook4 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook4_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook4 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks4Row').append(cardEbook4);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook4').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook4_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook4').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook4', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks5Row')){
                            $('#ebooks5Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks5",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook5 = JSON.parse(data);
                                    $(dadosEbook5).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook5 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook5_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook5 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks5Row').append(cardEbook5);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook5').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook5_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook5').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook5', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks6Row')){
                            $('#ebooks6Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks6",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook6 = JSON.parse(data);
                                    $(dadosEbook6).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook6 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook6_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook6 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks6Row').append(cardEbook6);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook6').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook6_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook6').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook6', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks7Row')){
                            $('#ebooks7Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks7",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook7 = JSON.parse(data);
                                    $(dadosEbook7).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook7 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook7_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook7 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks7Row').append(cardEbook7);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook7').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook7_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook7').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook7', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks8Row')){
                            $('#ebooks8Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks8",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook8 = JSON.parse(data);
                                    $(dadosEbook8).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook8 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook8_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook8 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks8Row').append(cardEbook8);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook8').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook8_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook8').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook8', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#ebooks9Row')){
                            $('#ebooks9Row').empty();
                            $.ajax({
                                url: "php/ebook.php?act=getEbooks9",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosEbook9 = JSON.parse(data);
                                    $(dadosEbook9).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardEbook9 = `<div class="span2 item">` +
                                                         `<span id="iconeNovoEbook9_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-ebook9 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#ebooks9Row').append(cardEbook9);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-ebook9').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoEbook9_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-ebook9').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/ebook.php?act=atualizarEbook9', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos1Row')){
                            $('#jogosInterativos1Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid1",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid1 = JSON.parse(data);
                                    $(dadosJogoRfid1).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid1 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID1_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid1 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos1Row').append(cardJogoRfid1);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid1').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID1_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid1').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid1', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos2Row')){
                            $('#jogosInterativos2Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid2",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid2 = JSON.parse(data);
                                    $(dadosJogoRfid2).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid2 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID2_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid2 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos2Row').append(cardJogoRfid2);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid2').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID2_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid2').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid2', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos3Row')){
                            $('#jogosInterativos3Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid3",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid3 = JSON.parse(data);
                                    $(dadosJogoRfid3).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid3 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID3_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid3 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos3Row').append(cardJogoRfid3);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid3').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID3_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid3').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid3', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos4Row')){
                            $('#jogosInterativos4Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid4",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid4 = JSON.parse(data);
                                    $(dadosJogoRfid4).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid4 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID4_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid4 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos4Row').append(cardJogoRfid4);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid4').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID4_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid4').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid4', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos5Row')){
                            $('#jogosInterativos5Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid5",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid5 = JSON.parse(data);
                                    $(dadosJogoRfid5).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid5 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID5_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid5 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos5Row').append(cardJogoRfid5);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid5').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID5_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid5').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid5', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos6Row')){
                            $('#jogosInterativos6Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid6",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid6 = JSON.parse(data);
                                    $(dadosJogoRfid6).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid6 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID6_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid6 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos6Row').append(cardJogoRfid6);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid6').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID6_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid6').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid6', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos7Row')){
                            $('#jogosInterativos7Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid7",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid7 = JSON.parse(data);
                                    $(dadosJogoRfid7).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid7 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID7_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid7 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos7Row').append(cardJogoRfid7);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid7').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID7_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid7').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid7', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos8Row')){
                            $('#jogosInterativos8Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid8",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid8 = JSON.parse(data);
                                    $(dadosJogoRfid8).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid8 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID8_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid8 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                    
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos8Row').append(cardJogoRfid8);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid8').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID8_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid8').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid8', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#jogosInterativos9Row')){
                            $('#jogosInterativos9Row').empty();
                            $.ajax({
                                url: "php/jogorfid.php?act=getJogoRfid9",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosJogoRfid9 = JSON.parse(data);
                                    $(dadosJogoRfid9).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardJogoRfid9 = `<div class="span2 item">` +
                                                            `<span id="iconeNovoJRFID9_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                                                `<div>`+
                                                                `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                                `<input type="checkbox" class='checkbox-jogosrfid9 option-icon' data-id="`+ value.id +`">`+
                                                                    `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                                        `<i class="icon-play option-icon"></i>`+
                                                                    `</a>`+
                                                                `</div>`+
                                                        `</div>`;
                                        $('#jogosInterativos9Row').append(cardJogoRfid9);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-jogosrfid9').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoJRFID9_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-jogosrfid9').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/jogorfid.php?act=atualizarJogoRfid9', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#sitesRow')){
                            $('#sitesRow').empty();
                            $.ajax({
                                url: "php/site.php?act=getSites",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosSites = JSON.parse(data);
                                    $(dadosSites).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardSite = `<div class="span2 item">` +
                                                        `<span id="iconeNovoSite_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -55px;"></img></span>`+
                                                            `<div class="menu-cyan siteInternet">`+
                                                                `<img width="32" height="32" src="https://www.google.com/s2/favicons?domain=`+ value.dominio +`">`+
                                                            `</div>`+
                                                            `<h5 align="center" style="width: 170px; height: 40px; text-overflow: ellipsis;">`+ nome +`</h5>`+
                                                            `<div>`+
                                                                `<input type="checkbox" class='checkbox-site option-icon' data-id="`+ value.id +`">`+
                                                                `<a href="`+ value.dominio +`" class="right option-icon" target="_blank"><i class="icon-mail-forward"></i></a>`+
                                                            `</div>`+
                                                        `</div>`;
                                        $('#sitesRow').append(cardSite);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-site').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoSite_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-site').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            lista = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/site.php?act=atualizarList', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        lista: lista
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        if($('#musicasRow')){
                            $('#musicasRow').empty();
                            $.ajax({
                                url: "php/musicas.php?act=getMusicas",
                                type: 'POST',
                                data: {
                                    idTurma: idTurma
                                },
                                success: function(data){
                                    let dadosMusicas = JSON.parse(data);
                                    $(dadosMusicas.result).each(function(index, value){
                                        let i = index++;
                                        let nome = value.nome.replace(/[_]+/g, ' ');
                                        let cardMusica = `<div class="span3 item-music">` +
                                                         `<span id="iconeNovoMusica_`+ i +`" class="right notification"><img src="../images/icons/iconeNovo.png" style="position: absolute; margin: -10px 0px 0px -35px;"></img></span>`+
                                                         `<h4 align="center" style="height: 40px; margin: 20px;">`+ nome +`</h4>`+
                                                            `<audio controls>` +
                                                                `<source src="`+ value.playlist +`/`+ value.nome +`" type="audio/ogg">` +
                                                                `<source src="`+ value.playlist +`/`+ value.nome +`" type="audio/mpeg">` +
                                                                `Your browser does not support the audio element.` +
                                                           `</audio>` +
                                                            `<div>`+
                                                                `<input type="checkbox" class='checkbox-musicas option-icon' data-id="`+ value.id +`">`+
                                                            `</div>`+
                                                         `</div>`;
                                        $('#musicasRow').append(cardMusica);
                                        if(value.ativo == 'true'){
                                            $('.checkbox-musicas').attr('checked', 'checked');
                                        }
                                        if(value.new == '1'){
                                            $('#iconeNovoMusica_'+ i).addClass('hidden');
                                        }
                                    });
                                    $('.checkbox-musicas').on('change', function () {
                                        var btn = $(this),
                                            check = btn.is(':checked'),
                                            id = btn.data('id');
                                
                                        btn.attr('disabled', 'disabled');
                                        loading(true);
                                        $.ajax(
                                                'php/musicas.php?act=atualizarMusica', {
                                                    type: "POST",
                                                    data: {
                                                        check: check,
                                                        id: id
                                                    }
                                                }
                                            )
                                            .done(function (data) {
                                                console.log(data);
                                            })
                                            .fail(function (error) {
                                                console.log(error);
                                                alert('Ocorreu um erro');
                                                if (check) {
                                                    btn.removeAttr('checked');
                                                } else {
                                                    btn.attr('checked', 'checked');
                                                }
                                            })
                                            .always(function () {
                                                btn.removeAttr('disabled');
                                                loading(false);
                                            });
                                    });
                                }
                            });
                        }
                        $.ajax({
                            url: "php/videos.php?act=getNewVideo",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoVideo = JSON.parse(data);
                                if(notificacaoVideo != ''){
                                    let qtd = notificacaoVideo.length;
                                    let cardVideo = `<li style="margin-left: 10px;">Vídeo<span class= "right" margin-right: 10px;"></span><div id="notificacaoVideo"></div></li>`;
                                    $('#notificacao').append(cardVideo);
                                    $(notificacaoVideo).each(function(index, value){
                                        let nome = value.nome_video.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoVideo = `<li class="notifi"><a href="#videos">Novo Vídeo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoVideo').append(cardNotificacaoVideo);
                                        $('#notification').html(++notificacao);
                                    });
                                } else{
                                    console.log("2030: NAO EXISTE!");
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo1",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo1 = JSON.parse(data);
                                if(notificacaoJogo1 != ''){
                                    let qtd = notificacaoJogo1.length;
                                    let cardJogo1 = `<li style="margin-left: 10px;">Jogo Ambiente 1<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo1"></div></li>`;
                                    $('#notificacao').append(cardJogo1);
                                    $(notificacaoJogo1).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo1 = `<li class="notifi"><a href="#headingOne">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo1').append(cardNotificacaoJogo1);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook1",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook1 = JSON.parse(data);
                                if(notificacaoEbook1 != ''){
                                    let qtd = notificacaoEbook1.length;
                                    let cardEbook1 = `<li style="margin-left: 10px;">E-book Ambiente 1<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook1"></div></li>`;
                                    $('#notificacao').append(cardEbook1);
                                    $(notificacaoEbook1).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook1 = `<li class="notifi"><a href="#headingOne">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook1').append(cardNotificacaoEbook1);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid1",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid1 = JSON.parse(data);
                                if(notificacaoJogorfid1 != ''){
                                    let qtd = notificacaoJogorfid1.length;
                                    let cardJogorfid1 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 1<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid1"></div></li>`;
                                    $('#notificacao').append(cardJogorfid1);
                                }
                                $(notificacaoJogorfid1).each(function(index, value){
                                    let nome = value.nome.replace(/[-_]+/g, ' ');
                                    let cardNotificacaoJogorfid1 = `<li class="notifi"><a href="#headingOne">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                    $('#notificacaoJogorfid1').append(cardNotificacaoJogorfid1);
                                    $('#notification').html(++notificacao);
                                });
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo2",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo2 = JSON.parse(data);
                                if(notificacaoJogo2 != ''){
                                    let qtd = notificacaoJogo2.length;
                                    let cardJogo2 = `<li style="margin-left: 10px;">Jogo Ambiente 2<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo2"></div></li>`;
                                    $('#notificacao').append(cardJogo2);
                                    $(notificacaoJogo2).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo2 = `<li class="notifi"><a href="#headingTwo">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo2').append(cardNotificacaoJogo2);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook2",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook2 = JSON.parse(data);
                                if(notificacaoEbook2 != ''){
                                    let qtd = notificacaoEbook2.length;
                                    let cardEbook2 = `<li style="margin-left: 10px;">E-Book Ambiente 2<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook2"></div></li>`;
                                    $('#notificacao').append(cardEbook2);
                                    $(notificacaoEbook2).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook2 = `<li class="notifi"><a href="#headingTwo">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook2').append(cardNotificacaoEbook2);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid2",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid2 = JSON.parse(data);
                                if(notificacaoJogorfid2 != ''){
                                    let qtd = notificacaoJogorfid2.length;
                                    let cardJogorfid2 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 2<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid2"></div></li>`;
                                    $('#notificacao').append(cardJogorfid2);
                                    $(notificacaoJogorfid2).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid2 = `<li class="notifi"><a href="#headingTwo">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid2').append(cardNotificacaoJogorfid2);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo3",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo3 = JSON.parse(data);
                                if(notificacaoJogo3 != ''){
                                    let qtd = notificacaoJogo3.length;
                                    let cardJogo3 = `<li style="margin-left: 10px;">Jogo Ambiente 3<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo3"></div></li>`;
                                    $('#notificacao').append(cardJogo3);
                                    $(notificacaoJogo3).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo3 = `<li class="notifi"><a href="#headingThree">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo3').append(cardNotificacaoJogo3);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook3",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook3 = JSON.parse(data);
                                if(notificacaoEbook3 != ''){
                                    let qtd = notificacaoEbook3.length;
                                    let cardEbook3 = `<li style="margin-left: 10px;">E-Book Ambiente 3<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook3"></div></li>`;
                                    $('#notificacao').append(cardEbook3);
                                    $(notificacaoEbook3).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook3 = `<li class="notifi"><a href="#headingThree">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook3').append(cardNotificacaoEbook3);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid3",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid3 = JSON.parse(data);
                                if(notificacaoJogorfid3 != ''){
                                    let qtd = notificacaoJogorfid3.length;
                                    let cardJogorfid3 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 3<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid3"></div></li>`;
                                    $('#notificacao').append(cardJogorfid3);
                                    $(notificacaoJogorfid3).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid3 = `<li class="notifi"><a href="#headingThree">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid3').append(cardNotificacaoJogorfid3);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo4",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo4 = JSON.parse(data);
                                if(notificacaoJogo4 != ''){
                                    let qtd = notificacaoJogo4.length;
                                    let cardJogo4 = `<li style="margin-left: 10px;">Jogo Ambiente 4<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo4"></div></li>`;
                                    $('#notificacao').append(cardJogo4);
                                    $(notificacaoJogo4).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo4 = `<li class="notifi"><a href="#headingFour">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo4').append(cardNotificacaoJogo4);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook4",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook4 = JSON.parse(data);
                                if(notificacaoEbook4 != ''){
                                    let qtd = notificacaoEbook4.length;
                                    let cardEbook4 = `<li style="margin-left: 10px;">E-Book Ambiente 4<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook4"></div></li>`;
                                    $('#notificacao').append(cardEbook4);
                                    $(notificacaoEbook4).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook4 = `<li class="notifi"><a href="#headingFour">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook4').append(cardNotificacaoEbook4);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid4",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid4 = JSON.parse(data);
                                if(notificacaoJogorfid4 != ''){
                                    let qtd = notificacaoJogorfid4.length;
                                    let cardJogorfid4 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 4<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid4"></div></li>`;
                                    $('#notificacao').append(cardJogorfid4);
                                    $(notificacaoJogorfid4).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid4 = `<li class="notifi"><a href="#headingFour">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid4').append(cardNotificacaoJogorfid4);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo5",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo5 = JSON.parse(data);
                                if(notificacaoJogo5 != ''){
                                    let qtd = notificacaoJogo5.length;
                                    let cardJogo5 = `<li style="margin-left: 10px;">Jogo Ambiente 5<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo5"></div></li>`;
                                    $('#notificacao').append(cardJogo5);
                                    $(notificacaoJogo5).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo5 = `<li class="notifi"><a href="#headingFive">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo5').append(cardNotificacaoJogo5);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook5",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook5 = JSON.parse(data);
                                if(notificacaoEbook5 != ''){
                                    let qtd = notificacaoEbook5.length;
                                    let cardEbook5 = `<li style="margin-left: 10px;">E-Book Ambiente 5<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook5"></div></li>`;
                                    $('#notificacao').append(cardEbook5);
                                    $(notificacaoEbook5).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook5 = `<li class="notifi"><a href="#headingFive">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook5').append(cardNotificacaoEbook5);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid5",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid5 = JSON.parse(data);
                                if(notificacaoJogorfid5 != ''){
                                    let qtd = notificacaoJogorfid5.length;
                                    let cardJogorfid5 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 5<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid5"></div></li>`;
                                    $('#notificacao').append(cardJogorfid5);
                                    $(notificacaoJogorfid5).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid5 = `<li class="notifi"><a href="#headingFive">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid5').append(cardNotificacaoJogorfid5);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo6",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo6 = JSON.parse(data);
                                if(notificacaoJogo6 != ''){
                                    let qtd = notificacaoJogo6.length;
                                    let cardJogo6 = `<li style="margin-left: 10px;">Jogo Ambiente 6<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo6"></div></li>`;
                                    $('#notificacao').append(cardJogo6);
                                    $(notificacaoJogo6).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo6 = `<li class="notifi"><a href="#headingSix">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo6').append(cardNotificacaoJogo6);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook6",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook6 = JSON.parse(data);
                                if(notificacaoEbook6 != ''){
                                    let qtd = notificacaoEbook6.length;
                                    let cardEbook6 = `<li style="margin-left: 10px;">E-Book Ambiente 6<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook6"></div></li>`;
                                    $('#notificacao').append(cardEbook6);
                                    $(notificacaoEbook6).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook6 = `<li class="notifi"><a href="#headingSix">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook6').append(cardNotificacaoEbook6);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid6",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid6 = JSON.parse(data);
                                if(notificacaoJogorfid6 != ''){
                                    let qtd = notificacaoJogorfid6.length;
                                    let cardJogorfid6 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 6<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid6"></div></li>`;
                                    $('#notificacao').append(cardJogorfid6);
                                    $(notificacaoJogorfid6).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid6 = `<li class="notifi"><a href="#headingSix">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid6').append(cardNotificacaoJogorfid6);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo7",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo7 = JSON.parse(data);
                                if(notificacaoJogo7 != ''){
                                    let qtd = notificacaoJogo7.length;
                                    let cardJogo7 = `<li style="margin-left: 10px;">Jogo Ambiente 7<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo7"></div></li>`;
                                    $('#notificacao').append(cardJogo7);
                                    $(notificacaoJogo7).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo7 = `<li class="notifi"><a href="#headingSeven">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo7').append(cardNotificacaoJogo7);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook7",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook7 = JSON.parse(data);
                                if(notificacaoEbook7 != ''){
                                    let qtd = notificacaoEbook7.length;
                                    let cardEbook7 = `<li style="margin-left: 10px;">E-Book Ambiente 7<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook7"></div></li>`;
                                    $('#notificacao').append(cardEbook7);
                                    $(notificacaoEbook7).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook7 = `<li class="notifi"><a href="#headingSeven">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook7').append(cardNotificacaoEbook7);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid7",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid7 = JSON.parse(data);
                                if(notificacaoJogorfid7 != ''){
                                    let qtd = notificacaoJogorfid7.length;
                                    let cardJogorfid7 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 7<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid7"></div></li>`;
                                    $('#notificacao').append(cardJogorfid7);
                                    $(notificacaoJogorfid7).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid7 = `<li class="notifi"><a href="#headingSeven">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid7').append(cardNotificacaoJogorfid7);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo8",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo8 = JSON.parse(data);
                                if(notificacaoJogo8 != ''){
                                    let qtd = notificacaoJogo8.length;
                                    let cardJogo8 = `<li style="margin-left: 10px;">Jogo Ambiente 8<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo8"></div></li>`;
                                    $('#notificacao').append(cardJogo8);
                                    $(notificacaoJogo8).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo8 = `<li class="notifi"><a href="#headingEight">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo8').append(cardNotificacaoJogo8);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook8",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook8 = JSON.parse(data);
                                if(notificacaoEbook8 != ''){
                                    let qtd = notificacaoEbook8.length;
                                    let cardEbook8 = `<li style="margin-left: 10px;">E-Book Ambiente 8<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook8"></div></li>`;
                                    $('#notificacao').append(cardEbook8);
                                    $(notificacaoEbook8).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook8 = `<li class="notifi"><a href="#headingEight">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook8').append(cardNotificacaoEbook8);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid8",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid8 = JSON.parse(data);
                                if(notificacaoJogorfid8 != ''){
                                    let qtd = notificacaoJogorfid8.length;
                                    let cardJogorfid8 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 8<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid8"></div></li>`;
                                    $('#notificacao').append(cardJogorfid8);
                                    $(notificacaoJogorfid8).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid8 = `<li class="notifi"><a href="#headingEight">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid8').append(cardNotificacaoJogorfid8);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogos.php?act=getNewJogo9",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogo9 = JSON.parse(data);
                                if(notificacaoJogo9 != ''){
                                    let qtd = notificacaoJogo9.length;
                                    let cardJogo9 = `<li style="margin-left: 10px;">Jogo Ambiente 9<span class="right" margin-right: 10px;"></span><div id="notificacaoJogo9"></div></li>`;
                                    $('#notificacao').append(cardJogo9);
                                    $(notificacaoJogo9).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogo9 = `<li class="notifi"><a href="#headingNine">Novo Jogo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogo9').append(cardNotificacaoJogo9);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/ebook.php?act=getNewEbook9",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoEbook9 = JSON.parse(data);
                                if(notificacaoEbook9 != ''){
                                    let qtd = notificacaoEbook9.length;
                                    let cardEbook9 = `<li style="margin-left: 10px;">E-Book Ambiente 9<span class="right" margin-right: 10px;"></span><div id="notificacaoEbook9"></div></li>`;
                                    $('#notificacao').append(cardEbook9);
                                    $(notificacaoEbook9).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoEbook9 = `<li class="notifi"><a href="#headingNine">Novo E-book Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoEbook9').append(cardNotificacaoEbook9);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/jogorfid.php?act=getNewJogoRfid9",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoJogorfid9 = JSON.parse(data);
                                if(notificacaoJogorfid9 != ''){
                                    let qtd = notificacaoJogorfid9.length;
                                    let cardJogorfid9 = `<li style="margin-left: 10px;">Jogo Interativo Ambiente 9<span class="right" margin-right: 10px;"></span><div id="notificacaoJogorfid9"></div></li>`;
                                    $('#notificacao').append(cardJogorfid9);
                                    $(notificacaoJogorfid9).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoJogorfid9 = `<li class="notifi"><a href="#headingNine">Novo Jogo Interativo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoJogorfid9').append(cardNotificacaoJogorfid9);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/site.php?act=getNewSite",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoSite = JSON.parse(data);
                                if(notificacaoSite != ''){
                                    let qtd = notificacaoSite.length;
                                    let cardSite = `<li style="margin-left: 10px;">Site<span class="right" margin-right: 10px;"></span><div id="notificacaoSite"></div></li>`;
                                    $('#notificacao').append(cardSite);
                                    $(notificacaoSite).each(function(index, value){
                                        let cardNotificacaoSite = `<li class="notifi"><a href="#sites">Novo Site Disponível: `+ value.nome +`</a></li>`;
                                        $('#notificacaoSite').append(cardNotificacaoSite);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/musicas.php?act=getNewMusica",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoMusica = JSON.parse(data);
                                if(notificacaoMusica != ''){
                                    let qtd = notificacaoMusica.length;
                                    let cardMusica = `<li style="margin-left: 10px;">Música<span class="right" margin-right: 10px;"></span><div id="notificacaoMusica"></div></li>`;
                                    $('#notificacao').append(cardMusica);
                                    $(notificacaoMusica).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoMusica = `<li class="notifi"><a href="#musicas">Nova Música Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoMusica').append(cardNotificacaoMusica);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/attmundoavatar.php?act=getNewMundo",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoMundo = JSON.parse(data);
                                if(notificacaoMundo != ''){
                                    let qtd = notificacaoMundo.length;
                                    let cardMundo = `<li style="margin-left: 10px;">Mundo<span class="right" margin-right: 10px;"></span><div id="notificacaoMundo"></div></li>`;
                                    $('#notificacao').append(cardMundo);
                                    $(notificacaoMundo).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoMundo = `<li class="notifi"><a href="#mundo">Novo Mundo Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoMundo').append(cardNotificacaoMundo);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                        $.ajax({
                            url: "php/attmundoavatar.php?act=getNewAvatar",
                            type: 'POST',
                            data:{
                                idTurma: idTurma
                            },
                            success: function(data){
                                let notificacaoAvatar = JSON.parse(data);
                                if(notificacaoAvatar != ''){
                                    let qtd = notificacaoAvatar.length;
                                    let cardAvatar = `<li style="margin-left: 10px;">Avatar<span class="right" margin-right: 10px;"></span><div id="notificacaoAvatar"></div></li>`;
                                    $('#notificacao').append(cardAvatar);
                                    $(notificacaoAvatar).each(function(index, value){
                                        let nome = value.nome.replace(/[-_]+/g, ' ');
                                        let cardNotificacaoAvatar = `<li class="notifi"><a href="#avatar">Novo Avatar Disponível: `+ nome +`</a></li>`;
                                        $('#notificacaoAvatar').append(cardNotificacaoAvatar);
                                        $('#notification').html(++notificacao);
                                    });
                                }
                            }
                        });
                    });
                });
            } catch {
                console.log("Nenhum Professor Inserido");
            }
        }
    });

    if($('#videoAdmin')){
        $('#videoAdmin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/videos.php?act=getVideos",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosVideos = JSON.parse(data);
                $(dadosVideos).each(function(index, value){
                    let i = index++;
                    let linkVideo = value.link;
                    let separador = '?v=';
                    var lk = linkVideo.split(separador);
                    let nome = value.nome_video.replace(/[_]+/g, ' ');
                    let cardVideo = `<div class="span2 item-video">` +
                                        `<video width="180" height="135" controls>` +
                                            `<source src="`+value.link+`/`+value.nome_video+`" type="video/mp4">` +
                                            `<source src="`+value.link+`/`+value.nome_video+`" type="video/ogg">` +
                                            `Your browser does not support the video tag.` +
                                        `</video>` +
                                        `<div>`+
                                        `<h5 align="center">`+ nome +`</h5>`+
                                            `<a id="removeVideo`+value.id+`" class="remove-video option-icon" data-id="`+ value.id +`" data-video="`+ linkVideo +`">`+
                                                `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                            `</a>`+
                                        `</div>`+
                                    `</div>`;
                    $('#videoAdmin').append(cardVideo);
                    $('#removeVideo'+value.id).on('click', function(e){
                        let idRemoveVideo = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Video?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/videos.php?act=remove",
                                    type: "POST",
                                    data: {
                                        idRemoveVideo: idRemoveVideo
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                    
                });
            }
        });
    }
    if($('#jogos1Admin')){
        $('#jogos1Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos1",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos1 = JSON.parse(data);
                $(dadosJogos1).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo1 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo1`+value.id+`" class="remove-jogo1 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos1Admin').append(cardJogo1);
                    $('#removeJogo1'+value.id).on('click', function(e){
                        let idRemoveJogo1 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo1",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo1: idRemoveJogo1
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos2Admin')){
        $('#jogos2Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos2",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos2 = JSON.parse(data);
                $(dadosJogos2).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo2 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo2`+value.id+`" class="remove-jogo2 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos2Admin').append(cardJogo2);
                    $('#removeJogo2'+value.id).on('click', function(e){
                        let idRemoveJogo2 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo2",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo2: idRemoveJogo2
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos3Admin')){
        $('#jogos3Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos3",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos3 = JSON.parse(data);
                $(dadosJogos3).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo3 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo3`+value.id+`" class="remove-jogo3 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos3Admin').append(cardJogo3);
                    $('#removeJogo3'+value.id).on('click', function(e){
                        let idRemoveJogo3 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo3",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo3: idRemoveJogo3
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos4Admin')){
        $('#jogos4Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos4",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos4 = JSON.parse(data);
                $(dadosJogos4).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo4 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo4`+value.id+`" class="remove-jogo4 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos4Admin').append(cardJogo4);
                    $('#removeJogo4'+value.id).on('click', function(e){
                        let idRemoveJogo4 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo4",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo4: idRemoveJogo4
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos5Admin')){
        $('#jogos5Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos5",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos5 = JSON.parse(data);
                $(dadosJogos5).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo5 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo5`+value.id+`" class="remove-jogo5 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos5Admin').append(cardJogo5);
                    $('#removeJogo5'+value.id).on('click', function(e){
                        let idRemoveJogo5 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo5",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo5: idRemoveJogo5
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos6Admin')){
        $('#jogos6Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos6",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos6 = JSON.parse(data);
                $(dadosJogos6).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo6 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo6`+value.id+`" class="remove-jogo6 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos6Admin').append(cardJogo6);
                    $('#removeJogo6'+value.id).on('click', function(e){
                        let idRemoveJogo6 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo6",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo6: idRemoveJogo6
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos7Admin')){
        $('#jogos7Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos7",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos7 = JSON.parse(data);
                $(dadosJogos7).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo7 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo7`+value.id+`" class="remove-jogo7 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos7Admin').append(cardJogo7);
                    $('#removeJogo7'+value.id).on('click', function(e){
                        let idRemoveJogo7 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo7",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo7: idRemoveJogo7
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos8Admin')){
        $('#jogos8Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos8",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos8 = JSON.parse(data);
                $(dadosJogos8).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo8 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo8`+value.id+`" class="remove-jogo8 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos8Admin').append(cardJogo8);
                    $('#removeJogo8'+value.id).on('click', function(e){
                        let idRemoveJogo8 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo8",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo8: idRemoveJogo8
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogos9Admin')){
        $('#jogos9Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogos.php?act=getJogos9",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogos9 = JSON.parse(data);
                $(dadosJogos9).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogo9 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogo9`+value.id+`" class="remove-jogo9 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogos9Admin').append(cardJogo9);
                    $('#removeJogo9'+value.id).on('click', function(e){
                        let idRemoveJogo9 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogos.php?act=removeJogo9",
                                    type: "POST",
                                    data: {
                                        idRemoveJogo9: idRemoveJogo9
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks1Admin')){
        $('#ebooks1Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks1",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook1 = JSON.parse(data);
                $(dadosEbook1).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook1 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook1`+value.id+`" class="remove-ebook1 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks1Admin').append(cardEbook1);
                    $('#removeEbook1'+value.id).on('click', function(e){
                        let idRemoveEbook1 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook1",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook1: idRemoveEbook1
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks2Admin')){
        $('#ebooks2Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks2",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook2 = JSON.parse(data);
                $(dadosEbook2).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook2 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook2`+value.id+`" class="remove-ebook2 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks2Admin').append(cardEbook2);
                    $('#removeEbook2'+value.id).on('click', function(e){
                        let idRemoveEbook2 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook2",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook2: idRemoveEbook2
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks3Admin')){
        $('#ebooks3Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks3",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook3 = JSON.parse(data);
                $(dadosEbook3).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook3 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook3`+value.id+`" class="remove-ebook3 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks3Admin').append(cardEbook3);
                    $('#removeEbook3'+value.id).on('click', function(e){
                        let idRemoveEbook3 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook3",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook3: idRemoveEbook3
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                    
                });
            }
        });
    }
    if($('#ebooks4Admin')){
        $('#ebooks4Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks4",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook4 = JSON.parse(data);
                $(dadosEbook4).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook4 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook4`+value.id+`" class="remove-ebook4 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks4Admin').append(cardEbook4);
                    $('#removeEbook4'+value.id).on('click', function(e){
                        let idRemoveEbook4 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook4",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook4: idRemoveEbook4
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks5Admin')){
        $('#ebooks5Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks5",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook5 = JSON.parse(data);
                $(dadosEbook5).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook5 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook5`+value.id+`" class="remove-ebook5 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks5Admin').append(cardEbook5);
                    $('#removeEbook5'+value.id).on('click', function(e){
                        let idRemoveEbook5 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook5",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook5: idRemoveEbook5
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks6Admin')){
        $('#ebooks6Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks6",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook6 = JSON.parse(data);
                $(dadosEbook6).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook6 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook6`+value.id+`" class="remove-eboko6 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks6Admin').append(cardEbook6);
                    $('#removeEbook6'+value.id).on('click', function(e){
                        let idRemoveEbook6 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook6",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook6: idRemoveEbook6
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks7Admin')){
        $('#ebooks7Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks7",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook7 = JSON.parse(data);
                $(dadosEbook7).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook7 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook7`+value.id+`" class="remove-ebook7 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks7Admin').append(cardEbook7);
                    $('#removeEbook7'+value.id).on('click', function(e){
                        let idRemoveEbook7 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook7",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook7: idRemoveEbook7
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks8Admin')){
        $('#ebooks8Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks8",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook8 = JSON.parse(data);
                $(dadosEbook8).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook8 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook8`+value.id+`" class="remove-ebook8 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks8Admin').append(cardEbook8);
                    $('#removeEbook8'+value.id).on('click', function(e){
                        let idRemoveEbook8 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook8",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook8: idRemoveEbook8
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#ebooks9Admin')){
        $('#ebooks9Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/ebook.php?act=getEbooks9",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosEbook9 = JSON.parse(data);
                $(dadosEbook9).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardEbook9 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeEbook9`+value.id+`" class="remove-ebook9 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#ebooks9Admin').append(cardEbook9);
                    $('#removeEbook9'+value.id).on('click', function(e){
                        let idRemoveEbook9 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o E-book?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/ebook.php?act=removeEbook9",
                                    type: "POST",
                                    data: {
                                        idRemoveEbook9: idRemoveEbook9
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos1Admin')){
        $('#jogosInterativos1Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid1",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid1 = JSON.parse(data);
                $(dadosJogoRfid1).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid1 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid1`+value.id+`" class="remove-jogorfid1 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos1Admin').append(cardJogoRfid1);
                    $('#removeJogorfid1'+value.id).on('click', function(e){
                        let idRemoveJogorfid1 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid1",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid1: idRemoveJogorfid1
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos2Admin')){
        $('#jogosInterativos2Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid2",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid2 = JSON.parse(data);
                $(dadosJogoRfid2).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid2 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid2`+value.id+`" class="remove-jogorfid2 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos2Admin').append(cardJogoRfid2);
                    $('#removeJogorfid2'+value.id).on('click', function(e){
                        let idRemoveJogorfid2 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid2",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid2: idRemoveJogorfid2
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos3Admin')){
        $('#jogosInterativos3Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid3",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid3 = JSON.parse(data);
                $(dadosJogoRfid3).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid3 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid3`+value.id+`" class="remove-jogorfid3 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos3Admin').append(cardJogoRfid3);
                    $('#removeJogorfid3'+value.id).on('click', function(e){
                        let idRemoveJogorfid3 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid3",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid3: idRemoveJogorfid3
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos4Admin')){
        $('#jogosInterativos4Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid4",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid4 = JSON.parse(data);
                $(dadosJogoRfid4).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid4 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid4`+value.id+`" class="remove-jogorfid4 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos4Admin').append(cardJogoRfid4);
                    $('#removeJogorfid4'+value.id).on('click', function(e){
                        let idRemoveJogorfid4 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid4",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid4: idRemoveJogorfid4
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos5Admin')){
        $('#jogosInterativos5Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid5",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid5 = JSON.parse(data);
                $(dadosJogoRfid5).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid5 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid5`+value.id+`" class="remove-jogorfid5 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos5Admin').append(cardJogoRfid5);
                    $('#removeJogorfid5'+value.id).on('click', function(e){
                        let idRemoveJogorfid5 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid5",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid5: idRemoveJogorfid5
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos6Admin')){
        $('#jogosInterativos6Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid6",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid6 = JSON.parse(data);
                $(dadosJogoRfid6).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid6 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid6`+value.id+`" class="remove-jogorfid6 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos6Admin').append(cardJogoRfid6);
                    $('#removeJogorfid6'+value.id).on('click', function(e){
                        let idRemoveJogorfid6 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid6",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid6: idRemoveJogorfid6
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos7Admin')){
        $('#jogosInterativos7Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid7",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid7 = JSON.parse(data);
                $(dadosJogoRfid7).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid7 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid7`+value.id+`" class="remove-jogorfid7 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos7Admin').append(cardJogoRfid7);
                    $('#removeJogorfid7'+value.id).on('click', function(e){
                        let idRemoveJogorfid7 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid7",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid7: idRemoveJogorfid7
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos8Admin')){
        $('#jogosInterativos8Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid8",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid8 = JSON.parse(data);
                $(dadosJogoRfid8).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid8 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid8`+value.id+`" class="remove-jogorfid8 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos8Admin').append(cardJogoRfid8);
                    $('#removeJogorfid8'+value.id).on('click', function(e){
                        let idRemoveJogorfid8 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid8",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid8: idRemoveJogorfid8
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#jogosInterativos9Admin')){
        $('#jogosInterativos9Admin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/jogorfid.php?act=getJogoRfid9",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosJogoRfid9 = JSON.parse(data);
                $(dadosJogoRfid9).each(function(index, value){
                    let i = index++;
                    let nome = value.nome.replace(/[-_]+/g, ' ');
                    let cardJogoRfid9 = `<div class="span2 item">` +
                                        `<img src="`+ value.link +`/icone.png" class="img-responsive">` +
                                            `<div>`+
                                            `<h5 align="center">`+ nome +`</h5>`+
                                                `<a href="`+ value.link +`" target="_blank" class="right">`+
                                                    `<i class="icon-play option-icon"></i>`+
                                                `</a>`+
                                                `<a id="removeJogorfid9`+value.id+`" class="remove-jogorfid9 option-icon" data-id="`+ value.id +`">`+
                                                    `<div class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                `</a>`+
                                            `</div>`+
                                    `</div>`;
                    $('#jogosInterativos9Admin').append(cardJogoRfid9);
                    $('#removeJogorfid9'+value.id).on('click', function(e){
                        let idRemoveJogorfid9 = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Jogo interativo?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/jogorfid.php?act=removeJogoRfid9",
                                    type: "POST",
                                    data: {
                                        idRemoveJogorfid9: idRemoveJogorfid9
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#sitesAdmin')){
        $('#sitesAdmin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/site.php?act=getSites",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                let dadosSites = JSON.parse(data);
                $(dadosSites).each(function(index, value){
                    let i = index++;
                    let cardSite = `<div class="span2 item">` +
                                        `<div class="menu-cyan siteInternet">`+
                                            `<img width="32" height="32" src="https://www.google.com/s2/favicons?domain=`+ value.dominio +`">`+
                                        `</div>`+
                                        `<h5 align="center">`+ value.nome +`</h5>`+
                                        `<div>`+
                                            `<div id="removeSite`+value.id+`" class="btn-site-remove icon-trash remove-elastic option-icon" data-id="`+ value.id +`"></div>`+
                                            `<a href="`+ value.dominio +`" class="right option-icon" target="_blank"><i class="icon-mail-forward"></i></a>`+
                                        `</div>`+
                                    `</div>`;
                    $('#sitesAdmin').append(cardSite);
                    $('#removeSite'+value.id).on('click', function(e){
                        let idRemoveSite = this.dataset.id;
                        e.stopPropagation();
                        var b = confirm('Deseja mesmo excluir o Site?');
                        if (b == true) {
                            loading(true);
                            $.ajax({
                                    url:"php/site.php?act=remove",
                                    type: "POST",
                                    data: {
                                        idRemoveSite: idRemoveSite
                                        }
                                    }
                                )
                                .done(function (data) {
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        location.reload();
                                    } else {
                                        alert('Ocorreu um erro');
                                    }
                                })
                                .fail(function (error) {
                                    console.log(error);
                                    alert('Ocorreu um erro');
                                })
                                .always(function () {
                                    loading(false);
                                });
                        }
                    });
                });
            }
        });
    }
    if($('#musicasAdmin')){
        $('#musicasAdmin').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/musicas.php?act=getMusicas",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                try {
                    let dadosMusicas = JSON.parse(data);
                    $(dadosMusicas.result).each(function(index, value){
                        let i = index++;
                        let nome = value.nome.replace(/[_]+/g, ' ');
                        let cardMusica = `<div class="span4 item-music">` +
                                                         `<h4 align="center" style="height: 40px; margin: 20px;">`+ nome +`</h4>`+
                                                            `<audio controls>` +
                                                                `<source src="`+ value.playlist +`/`+ value.nome +`" type="audio/ogg">` +
                                                                `<source src="`+ value.playlist +`/`+ value.nome +`" type="audio/mpeg">` +
                                                                `Your browser does not support the audio element.` +
                                                           `</audio>` +
                                                            `<div>`+
                                                                `<div id="removeMusica`+value.id+`" class="btn-playlist-remove icon-trash option-icon remove-elastic" data-id="`+ value.id +`"></div>`+
                                                            `</div>`+
                                                         `</div>`;
                        $('#musicasAdmin').append(cardMusica);
                        $('#removeMusica'+value.id).on('click', function(e){
                            let idRemoveMusica = this.dataset.id;
                            e.stopPropagation();
                            var b = confirm('Deseja mesmo excluir a Música?');
                            if (b == true) {
                                loading(true);
                                $.ajax({
                                        url:"php/musicas.php?act=remove",
                                        type: "POST",
                                        data: {
                                            idRemoveMusica: idRemoveMusica
                                            }
                                        }
                                    )
                                    .done(function (data) {
                                        var d = JSON.parse(data);
                                        if (d.error == 0) {
                                            location.reload();
                                        } else {
                                            alert('Ocorreu um erro');
                                        }
                                    })
                                    .fail(function (error) {
                                        console.log(error);
                                        alert('Ocorreu um erro');
                                    })
                                    .always(function () {
                                        loading(false);
                                    });
                            }
                        });
                    });
                } catch {
                    console.log("Erro Músicas");
                }
                
            }
        });
    }
    if($('#mundoRow')){
        $('#mundoRow').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/attmundoavatar.php?act=getMundos",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                try {
                    let dadosMundos = JSON.parse(data);
                    $(dadosMundos).each(function(index, value){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let cardMundo = `<div class="span2 item">` +
                                                `<img src="`+ value.link +`/`+ value.nome +`.jpg" class="img-responsive">` +
                                                    `<div>`+
                                                    `<h5 align="center">`+ nome +`</h5>`+
                                                        `<a class="remove-mundo option-icon" data-id="`+ value.id +`">`+
                                                            `<div id="removeMundo`+value.id+`" class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                        `</a>`+
                                                    `</div>`+
                                            `</div>`;
                        $('#mundoRow').append(cardMundo);
                        $('#removeMundo'+value.id).on('click', function(e){
                            let idRemoveMundo = this.dataset.id;
                            e.stopPropagation();
                            var b = confirm('Deseja mesmo excluir o Mundo Virtual?');
                            if (b == true) {
                                loading(true);
                                $.ajax({
                                        url:"php/attmundoavatar.php?act=removeMundo",
                                        type: "POST",
                                        data: {
                                            idRemoveMundo: idRemoveMundo
                                            }
                                        }
                                    )
                                    .done(function (data) {
                                        var d = JSON.parse(data);
                                        if (d.error == 0) {
                                            location.reload();
                                        } else {
                                            alert('Ocorreu um erro');
                                        }
                                    })
                                    .fail(function (error) {
                                        console.log(error);
                                        alert('Ocorreu um erro');
                                    })
                                    .always(function () {
                                        loading(false);
                                    });
                            }
                        });
                        
                    });
                } catch {
                    console.log("Erro Mundo");
                }
                
            }
        });
    }
    if($('#avatarRow')){
        $('#avatarRow').empty();
        let idTurma = 1;
        $.ajax({
            url: "php/attmundoavatar.php?act=getAvatar",
            type: 'POST',
            data: {
                idTurma: idTurma
            },
            success: function(data){
                try {
                    let dadosAvatar = JSON.parse(data);
                    $(dadosAvatar.result).each(function(index, value){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let cardAvatar = `<div class="span2 item">` +
                                                `<img src="`+ value.link +`/`+ value.nome +`.png" class="img-responsive">` +
                                                    `<div>`+
                                                    `<h5 align="center">`+ nome +`</h5>`+
                                                        `<a class="remove-avatar option-icon" >`+
                                                            `<div id="removeAvatar`+value.id+`" data-id="`+ value.id +`" class="btn-lista-video-remove icon-trash remove-elastic option-icon" style="font-size: 28px;"></div>`+
                                                        `</a>`+
                                                    `</div>`+
                                            `</div>`;
                        $('#avatarRow').append(cardAvatar);
                        $('#removeAvatar'+value.id).on('click', function(e){
                            e.stopPropagation();
                            let idRemoveAvatar = this.dataset.id;
                            var b = confirm('Deseja mesmo excluir o Avatar?');
                            if (b == true) {
                                loading(true);
                                $.ajax({
                                        url:"php/attmundoavatar.php?act=removeAvatar",
                                        type: "POST",
                                        data: {
                                            idRemoveAvatar: idRemoveAvatar
                                            }
                                        }
                                    )
                                    .done(function (data) {
                                        console.log(data);
                                        var d = JSON.parse(data);
                                        if (d.error == 0) {
                                            location.reload();
                                        } else {
                                            alert('Ocorreu um erro');
                                        }
                                    })
                                    .fail(function (error) {
                                        console.log(error);
                                        alert('Ocorreu um erro');
                                    })
                                    .always(function () {
                                        loading(false);
                                    });
                            }
                        });
                        
                    });
                } catch {
                    console.log("Erro Avatar");
                }
            }
        });
    }

    var removeVideo = function () {
        var btn = $(this),
            id = btn.data('id'),
            video = btn.data('video');
        loading(true);
        $.ajax(
                'php/videos.php?act=remove', {
                    type: "POST",
                    data: {
                        id: id,
                        video: video
                    }
                }
            )
            .done(function (data) {
                console.log(data);
                var d = JSON.parse(data);
                if (d.error == 0) {
                    btn.parent().parent().remove();
                } else {
                    alert('Ocorreu um erro');
                }
            })
            .fail(function (error) {
                console.log(error);
            })
            .always(function () {
                loading(false);
            });
    };
    var removeSite = function () {
        var btn = $(this),
            id = btn.data('id'),
            site = btn.data('site');
        loading(true);
        $.ajax(
                'php/site.php?act=remove', {
                    type: "POST",
                    data: {
                        id: id,
                        site: site
                    }
                }
            )
            .done(function (data) {
                console.log(data);
                var d = JSON.parse(data);
                if (d.error == 0) {
                    btn.parent().remove();
                } else {
                    alert('Ocorreu um erro');
                }
            })
            .fail(function (error) {
                console.log(error);
            })
            .always(function () {
                loading(false);
            });
    };

    $(".select-all").on('click', function () {
        var check = $(this).parent().parent().find('input[type=checkbox]');
        check.attr('checked', 'checked');
        check.trigger('change');
    });

    $(".unselect-all").on('click', function () {
        var check = $(this).parent().parent().find('input[type=checkbox]');
        check.removeAttr('checked');
        check.trigger('change');
    });

    
    //================ ADD Jogo Ambiente 1 ================
    $('#addJogo1').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo1').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos1", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 2 ================
    $('#addJogo2').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo2').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos2", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 3 ================
    $('#addJogo3').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo3').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos3", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 4 ================
    $('#addJogo4').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo4').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos4", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 5 ================
    $('#addJogo5').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo5').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos5", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 6 ================
    $('#addJogo6').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo6').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos6", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 7 ================
    $('#addJogo7').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo7').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos7", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 8 ================
    $('#addJogo8').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo8').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos8", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo Ambiente 9 ================
    $('#addJogo9').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogo9').files[0]);

        $.ajax(
            "php/jogos.php?act=addJogos9", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 1 ================
    $('#addEbook1').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook1').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook1", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 2 ================
    $('#addEbook2').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook2').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook2", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 3 ================
    $('#addEbook3').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook3').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook3", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 4 ================
    $('#addEbook4').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook4').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook4", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 5 ================
    $('#addEbook5').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook5').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook5", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 6 ================
    $('#addEbook6').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook6').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook6", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                       alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 7 ================
    $('#addEbook7').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook7').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook7", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 8 ================
    $('#addEbook8').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook8').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook8", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD E-book Ambiente 9 ================
    $('#addEbook9').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_ebook9').files[0]);

        $.ajax(
            "php/ebook.php?act=addEbook9", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 1 ================
    $('#addJogoRfid1').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid1').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid1", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 2 ================
    $('#addJogoRfid2').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid2').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid2", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 3 ================
    $('#addJogoRfid3').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid3').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid3", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                       alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 4 ================
    $('#addJogoRfid4').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid4').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid4", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 5 ================
    $('#addJogoRfid5').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid5').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid5", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 6 ================
    $('#addJogoRfid6').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid6').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid6", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 7 ================
    $('#addJogoRfid7').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid7').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid7", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 8 ================
    $('#addJogoRfid8').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid8').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid8", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Jogo RFID Ambiente 9 ================
    $('#addJogoRfid9').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_jogorfid9').files[0]);

        $.ajax(
            "php/jogorfid.php?act=addJogoRfid9", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================== ADD SITE ==================
    $('#btnSalvarSite').on('click', function () {
        var nome = $('#inputNomeSite').val();
        var url = $('#inputUrlSite').val();
        $('.load').css('display', 'flex');
        $.ajax(
                'php/site.php?act=addList', {
                    type: "POST",
                    data: {
                        nome: nome,
                        url: url
                    }
                }
            )
            .done(function (data) {
                var d = JSON.parse(data);
                if (d == 0) {
                    $('.load').css('display', 'none');
                    alert("Site cadastrado com sucesso!");
                    location.reload();
                } else {
                    alert('Ocorreu um erro');
                }
            }) ;
    });

    //================ADD VIDEO================
    $('#formVideo').on('submit', function(e){
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        $('.load').css('display', 'flex');
        data.append('file', document.getElementById('fileVideo').files[0]);

        $.ajax(
            "php/videos.php?act=add", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        $('.load').css('display', 'none');
                        alert("Arquivo Adicionado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    } else if(data == 2){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .ogv \n\n Outros arquivos não serão aceitos no sistema.");
                        location.reload();
                    }
                }
            });

    });

    //================ ADD Musica ================
    $('#formMusic').on('submit', function(e){
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        $('.load').css('display', 'flex');
        data.append('file', document.getElementById('fileMusic').files[0]);

        $.ajax(
            "php/musicas.php?act=addMusica", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        $('.load').css('display', 'none');
                        alert("Arquivo Enviado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    } else if(data == 2){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se o arquivo é uma musica com as seguintes extensões: 'mp3' ou 'ogg'. Outros arquivos não serão aceitos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Mundo Virtual ================
    $('#addMundo').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_mundo').files[0]);

        $.ajax(
            "php/attmundoavatar.php?act=mundo", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Enviado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });

    //================ ADD Avatar ================
    $('#addAvatar').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_avatar').files[0]);

        $.ajax(
            "php/attmundoavatar.php?act=avatar", {
                type: "POST",
                data: data,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    if(data == 0){
                        alert("Arquivo Enviado com Sucesso!");
                        location.reload();
                    } else if(data == 1){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .zip. \n\n Por Favor, verifique se existem espaços em branco ou caracteres especiais nos nomes dos arquivos.");
                        location.reload();
                    }
                }
            });
    });
});