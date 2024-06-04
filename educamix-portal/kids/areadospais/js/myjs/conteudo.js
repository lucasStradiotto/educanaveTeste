var mostrarErro = function (elemento) {
    var element = $(elemento);
    element.addClass('error');
    element.bind('click.error', function () {
        $(this).removeClass('error');
        $(this).unbind('.error');
    });
};

$(document).ready(function () {

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

    let idProfSessao = $('#idProfSessao').val(),
        permissao = 0;
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

    //================ADD VIDEO================
    $('#addVideo').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_video').files[0]);

        $.ajax(
            "php/videos.php?act=add", {
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
                    } else if(data == 2){
                        alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .ogv \n\n Outros arquivos não serão aceitos no sistema.");
                        location.reload();
                    }
                }
            });

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
    $('#addSite').on('submit', function (e) {
        $(".loadingconteudo").removeAttr('hidden');
        var nome = $('#nome-site').val();
        var url = $('#url-site').val();
        e.preventDefault();
        e.stopPropagation();
        loading(true);
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
            })
            .always(function () {
                loading(false);
            });
    });

    //================ ADD Musica ================
    $('#addMusica').on('submit', function(e){
        $(".loadingconteudo").removeAttr('hidden');
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivo_musicas').files[0]);

        $.ajax(
            "php/musicas.php?act=addMusica", {
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