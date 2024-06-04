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

    $('#menuTurma-').css('display', 'none');
    $('#menuTurma-Selecionado').css('display', 'inline-block');

    $.ajax({
        url: "php/turma.php",
        type: 'POST',
        success: function(data) {
            let dadosTurma = JSON.parse(data);
            console.log(dadosTurma);

            $(dadosTurma).each(function (index, item) {
                let table = "<tr>" +
                    "<th id='thID' scope='row'>" + item.id + "</th>" +
                    "<td>" + item.nome_turma + "</td>" +
                    // "<td id='tdProfessor'>" + item.nome_prof + "</td>" +
                    // "<td id='tdAluno'>" + item.nome + "</td>" +
                    // "<td id='tdMundo'>" + item.nome_mundo + "</td>" +
                    // "<td id='tdVideos'><input type='button' class='btn btn-primary' value='Permitir' id='permissaoVideos'>" +
                    // "<td id='tdSites'><input type='button' class='btn btn-primary' value='Permitir' id='permissaoSites'>" +
                    "<td>" +
                    "<input type='button' class='btn btn-primary' value='Editar' id='editar"+ item.id +"'/>" +
                    "<a href='' class='btn btn-success' id='adicionar"+ item.id +"'>Detalhes<a/>" +
                    "</td>" +
                    "</tr>";
                $('#tbody').append();
                $('#editar'+ item.id +'').on('click', function(){
                    $('#editarCadastroTurma').removeAttr('hidden');
                    let idTurma = item.id;
                    $('#idTurmaEdit').val(idTurma);
                });
                $('#adicionar'+ item.id +'').on('click', function(){
                    $('#addTurmaProf').removeAttr('hidden');
                    let idTurma = item.id;
                    $('#idTurmaAdd').val(idTurma);
                });
                if(item.videos == 0){
                    $('#permissaoVideos').attr('value', 'Negar');
                } else {
                    $('#permissaoVideos').attr('value', 'Permitir');
                }
                if(item.sites == 0){
                    $('#permissaoSites').attr('value', 'Negar');
                } else {
                    $('#permissaoSites').attr('value', 'Permitir');
                }
            });
            $('#permissaoVideos').on('click', function(){
                if($('#permissaoVideos').val() == 'Negar'){
                    $('#permissaoVideos').attr('value', 'Permitir');
                    let idturmaPermissao = $('#thID').val(),
                        permissaoVideo = 1;
                    $.ajax({
                            url: "php/permissoesvideos.php",
                            type: 'POST',
                            data: {
                                idturmaPermissao: idturmaPermissao,
                                permissaoVideo: permissaoVideo
                            }
                        })
                        .done(function(dataPermissao){
                            var d = JSON.parse(dataPermissao);
                                switch(d.error){
                                    case 0:
                                        alert('Permissão alterada com Sucesso!');
                                        location.href = 'conteudo.php';
                                        break;
                                    case 1:
                                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                        break;
                                }
                        });
                } else {
                    $('#permissaoVideos').attr('value', 'Negar');
                    let idturmaPermissao = $('#thID').val(),
                        permissaoVideo = 0;
                    $.ajax({
                            url: "php/permissoesvideos.php",
                            type: 'POST',
                            data: {
                                idturmaPermissao: idturmaPermissao,
                                permissaoVideo: permissaoVideo
                            }
                        })
                        .done(function(dataPermissao){
                            var d = JSON.parse(dataPermissao);
                                switch(d.error){
                                    case 0:
                                        alert('Permissão alterada com Sucesso!');
                                        location.href = 'conteudo.php';
                                        break;
                                    case 1:
                                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                        break;
                                }
                        });
                }
            });
            $('#permissaoSites').on('click', function(){
                if($('#permissaoSites').val() == 'Negar'){
                    $('#permissaoSites').attr('value', 'Permitir');
                    let idturmaPermissao = $('#thID').val(),
                        permissaoSites = 1;
                    $.ajax({
                            url: "php/permissoesSites.php",
                            type: 'POST',
                            data: {
                                idturmaPermissao: idturmaPermissao,
                                permissaoSites: permissaoSites
                            }
                        })
                        .done(function(dataPermissao){
                            var d = JSON.parse(dataPermissao);
                                switch(d.error){
                                    case 0:
                                        alert('Permissão alterada com Sucesso!');
                                        location.href = 'conteudo.php';
                                        break;
                                    case 1:
                                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                        break;
                                }
                        });
                } else {
                    $('#permissaoSites').attr('value', 'Negar');
                    let idturmaPermissao = $('#thID').val(),
                        permissaoSites = 0;
                    $.ajax({
                            url: "php/permissoesSites.php",
                            type: 'POST',
                            data: {
                                idturmaPermissao: idturmaPermissao,
                                permissaoSites: permissaoSites
                            }
                        })
                        .done(function(dataPermissao){
                            var d = JSON.parse(dataPermissao);
                                switch(d.error){
                                    case 0:
                                        alert('Permissão alterada com Sucesso!');
                                        location.href = 'conteudo.php';
                                        break;
                                    case 1:
                                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                        break;
                                }
                        });
                }
            });
            
            $.ajax({
                url: "php/listaraluno.php",
                type: 'POST',
                success: function(data2) {
                    let dados = JSON.parse(data2);
                    $(dados).each(function (index, item){
                        let selectAluno = '<option value="'+ item.id +'">'+ item.nome +'</option>';

                        $('#selectAddAluno').append(selectAluno);
                    });
                }
            });

            $.ajax({
                url: "php/listarprofessor.php",
                type: 'POST',
                success: function(data3) {
                    let dados2 = JSON.parse(data3);
                    $(dados2).each(function (index, item){
                        let selectProf = '<option value="'+ item.id +'">'+ item.nome_prof +'</option>';

                        $('#selectAddProfessor').append(selectProf);
                    });
                }
            });

            $.ajax({
                url: "php/listarmundo.php",
                type: 'POST',
                success: function(data4) {
                    let dados3 = JSON.parse(data4);
                    $(dados3).each(function (index, item){
                        let selectMundo = '<option value="'+ item.id +'">'+ item.nome_mundo +'</option>';

                        $('#selectAddMundo').append(selectMundo);
                    });
                }
            });

            $('#formAddTurma').on('submit', function(e){
                var btnAdd = $('#btnAdd');
                e.preventDefault();
                btnAdd.attr('disabled', 'disabled');
                var idTurmaAdd = $('#idTurmaAdd').val(),
                    selectAddAluno = $('#selectAddAluno :selected').val(),
                    selectAddProfessor = $("#selectAddProfessor :selected").val(),
                    selectAddMundo = $('#selectAddMundo :selected').val();

                $.ajax(
                    "php/atualizarturma.php",
                    {
                        type: 'POST',
                        data: {
                            idTurmaAdd: idTurmaAdd,
                            selectAddAluno: selectAddAluno,
                            selectAddProfessor: selectAddProfessor,
                            selectAddMundo: selectAddMundo
                        }
                    })
                    .done(function(data){
                        var d = JSON.parse(data);
                            switch(d.error){
                                case 0:
                                    alert('Dados Adicionados com Sucesso!');
                                    location.href = 'conteudo.php';
                                    break;
                                case 1:
                                    showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                                    break;
                            }
                    }).fail(function(error){
                        console.log(error);
                        showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                    }).always(function(){
                        btnAdd.removeAttr('disabled');
                });
            });
        }
    });
    var mostrarErro = function (elemento) {
        var element = $(elemento);
        element.addClass('error');
        element.bind('click.error', function () {
            $(this).removeClass('error');
            $(this).unbind('.error');
        });
    };
    var verificaCadastro = function (nome_turma, onError) {
        var error = false;
        if (nome_turma == null) {
            onError('#nome_turma');
            error = true;
        }
        return error;
    };
    $('#editTurma').on('submit', function (e) {
        var showError = $('#showError'),
            btnSalvar = $('#Salvar');
        showError.html('');
        e.preventDefault();
        btnSalvar.attr('disabled', 'disabled');
        var id = $('#id').val(),
            nome_turma = $('#nome_turma').val(),

            vC = verificaCadastro(id, nome_turma, mostrarErro);

        if (!vC) {
            $.ajax(
                    "php/editarturma.php", {
                        type: "POST",
                        data: {
                            id: id,
                            nome_turma: nome_turma
                        }
                    })
                .done(function (data) {
                    var d = JSON.parse(data);
                    switch (d.error) {
                        case 0:
                            alert('Cadastro de Turma Editado com Sucesso!');
                            location.href = 'listaraluno.php';
                            break;
                        case 1:
                            mostrarErro('#nome_turma');
                            showError.html('Campo "Nome da Turma" não pode ser vazio.');
                            break;
                        case 2:
                            showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function (error) {
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function () {
                    btnSalvar.removeAttr('disabled');
                });
        } else {
            btnSalvar.removeAttr('disabled');
        }
        return false;
    });
});
