/**
 *
 */
var mostrarErro = function (elemento) {
    var element = $(elemento);
    element.addClass('error');
    element.bind('click.error', function () {
        $(this).removeClass('error');
        $(this).unbind('.error');
    });
};
/**
 *
 */
var verificaChild = function (nome, nasc, onError) {
    var error = false;
    if (nome.length < 4) {
        onError('#child-nome');
        error = true;
    }
    if (nasc == '') { //TODO: Fazer uma verificação melhor da data
        onError('#child-nasc');
        error = true;
    }

    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;

    if(nasc > output){
        onError('#child-nasc');
        error = true;
    }
    return error;
};

var verificaProf = function (email, senha, senha2, nome, onError) {
    var error = false;
    $.ajax({
        url: "php/cadastro.php?act=verificaLogin",
        type: 'POST',
        data:{
            email: email
        },
        success: function(data){
            let dadosLogin = JSON.parse(data);
            $(dadosLogin).each(function(index, value){
                if(value == email){
                    onError('#email');
                    error = true;
                } else {
                    return error;
                }
            });
        }
    });
    if (nome.length < 4) {
        onError('#nome');
        error = true;
    }
    if(senha.length < 6){
        onError('#senha');
        error = true;
    }
    if(senha2 != senha){
        onError('#senha2');
        error = true;
    }
    return error;
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

    if($('#session').val() == 'professor'){
        $('#alunos').addClass('active');
    }
    if($('#session').val() == 'admin'){
        $('#professor').addClass('active');
    }

    /*Aluno*/
    /*================================*/
    $('#cad-child').on('submit', function (e) {
        var showError = $('#showError'),
            btnCadastrar = $('#cad-child').find('input[type=submit]');
        showError.html('');
        e.preventDefault();
        e.stopPropagation();
        loading(true);
        btnCadastrar.attr('disabled', 'disabled');
        var nome = $('#child-nome').val(),
            nasc = $('#child-nasc').val(),
            senha = $('#child-senha').val(),
            nome_resp = $('#nome_resp').val(),
            sexo = $('[name=sexo]:checked').val(),
            turma = $('#turmaAlunoCad option:selected').val(),
            professor = $('#prof').val(),

            vC = verificaChild(nome, nasc, mostrarErro);

        if (!vC) {
            $.ajax(
                    "php/cad-child.php?act=cadastro", {
                        type: "POST",
                        data: {
                            nome: nome,
                            nasc: nasc,
                            senha: senha,
                            nome_resp: nome_resp,
                            sexo: sexo,
                            turma: turma,
                            professor: professor
                        }
                    })
                .done(function (data) {
                    var d = JSON.parse(data);
                    switch (d.error) {
                        case 0:
                            alert('Aluno cadastrado!');
                            location.reload();
                            break;
                        case 1:
                            mostrarErro('#child-nome');
                            showError.html('Nome inválido.');
                            break;
                        case 2:
                            mostrarErro('#child-nasc');
                            showError.html('Data inválida.');
                            break;
                        case 3:
                            showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function (error) {
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function () {
                    btnCadastrar.removeAttr('disabled');
                    loading(false);
                });
        } else {
            btnCadastrar.removeAttr('disabled');
            loading(false);
        }
        return false;
    });

    var idTurmaAvatar = $('.child-turma-id').val();
    $.ajax(
        "php/attmundoavatar.php?act=getAvatar",{
            type: "POST",
            data: {
                idTurma: idTurmaAvatar
            }
        }).
        done(function (data){
            let dadosAvatares = JSON.parse(data);
            $(dadosAvatares.result).each(function(i, value){
                let option = `<option value="`+ value.id +`">`+ value.nome +`</option>`;
                $('.trocarAvatarAluno').append(option);
            });
        });

    $('.atualizar-child').on('submit', function (e) {
        var showError = $('#showError2'),
            btnCadastrar = $(this).find('input[type=submit]');
        showError.html('');
        e.preventDefault();
        e.stopPropagation();
        loading(true);
        btnCadastrar.attr('disabled', 'disabled');
        var nome = $(this).find('.child-nome').val(),
            id = $(this).find('.child-id').val(),
            nasc = $(this).find('.child-nasc').val(),
            senha = $(this).find('.child-senha').val(),
            resp_nome = $(this).find('.nomeResp').val(),
            sexo = $(this).find('[name=sexo2]:checked').val(),
            avatar = $(this).find('.trocarAvatarAluno option:selected').val(),

            vC = verificaChild(nome, nasc, mostrarErro);

        if (!vC) {
            $.ajax(
                    "php/config-child.php?act=att", {
                        type: "POST",
                        data: {
                            id: id,
                            nome: nome,
                            nasc: nasc,
                            senha: senha,
                            resp_nome: resp_nome,
                            sexo: sexo,
                            avatar: avatar
                        }
                    })
                .done(function (data) {
                    var d = JSON.parse(data);
                    switch (d.error) {
                        case 0:
                            alert('Atualizado com sucesso.');
                            location.reload();
                            break;
                        case 1:
                            showError.html('Nome inválido.');
                            break;
                        case 2:
                            showError.html('Data inválida.');
                            break;
                        case 3:
                            showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                            break;
                    }
                }).fail(function (error) {
                    console.log(error);
                    showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
                }).always(function () {
                    btnCadastrar.removeAttr('disabled');
                    loading(false);
                });
        } else {
            btnCadastrar.removeAttr('disabled');
            loading(false);
        }
        return false;
    });

    $('.remove-child').on('click', function (e) {
        var id = this.dataset.id;
        e.stopPropagation();
        var b = confirm('Deseja mesmo excluir o Aluno?');
        if (b == true) {
            loading(true);
            $.ajax({
                    url:"php/config-child.php?act=remove",
                    type: "POST",
                    data: {
                            id: id
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

    $('#cad_Lote_Aluno').on('submit', function (e) {
        console.log("Entrou no Submit");
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        let turma = $('#turmaAlunoCadLote option:selected').val(),
            prof = $('#prof').val();

        console.log(turma. prof);
        data.append('file', document.getElementById('arquivo').files[0]);
        data.append('turma', turma);
        data.append('professor', prof);

        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = (day<10 ? '0' : '') + day + '/'+
                     (month<10 ? '0' : '') + month + '/' +
                     d.getFullYear();

        var dataAtual = output;
        data.append('dataAtual', dataAtual);

        console.log(data);

            // $.ajax(
            //     "php/cad-child.php?act=lote", {
            //         type: "POST",
            //         data: data,
            //         processData: false,
            //         contentType: false,
            //         success: function (data) {
            //             /* Retorno do PHP */
            //             if(data == 0){
            //                 alert("Alunos Cadastrados com Sucesso!");
            //                 location.reload();
            //             } else if(data == 1){
            //                 alert("Erro ao Cadastrar Alunos");
            //                 location.reload();
            //             }
            //         }
            //     })
        
    });

    /*Conta*/
    /*================================*/
    $('#edit-conta').on('submit', function (e) {
        var showError = $('#showError'),
            btnCadastrar = $(this).find('input[type=submit]');
        showError.html('');
        e.stopPropagation();
        e.preventDefault();
        loading(true);
        btnCadastrar.attr('disabled', 'disabled');
        var nome = $(this).find('#conta-nome').val(),
            oem = $(this).find('#oem').val();

        $.ajax(
                "php/config-conta.php?act=att-dados", {
                    type: "POST",
                    data: {
                        oem: oem,
                        nome: nome
                    }
                })
            .done(function (data) {
                var d = JSON.parse(data);
                switch (d.error) {
                    case 0:
                        $.ajax("php/login.php?relogin").done(function (e) {
                            console.log(e);
                        });
                        alert('Atualizado com sucesso.');
                        location.reload();
                        break;
                    case 1:
                        showError.html('Nome inválido.');
                        break;
                    case 2:
                        showError.html('oem inválida.');
                        break;
                    case 3:
                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                        break;
                }
            }).fail(function (error) {
                console.log(error);
                showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
            }).always(function () {
                btnCadastrar.removeAttr('disabled');
                loading(false);
            });
        return false;
    });

    $('#edit-senha').on('submit', function (e) {
        var showError = $('#showError'),
            btnCadastrar = $(this).find('input[type=submit]');
        showError.html('');
        e.preventDefault();
        e.stopPropagation();
        loading(true);
        btnCadastrar.attr('disabled', 'disabled');
        var senha = $(this).find('#conta-senha').val(),
            senha1 = $(this).find('#conta-senha1').val(),
            senha2 = $(this).find('#conta-senha2').val();

        $.ajax(
                "php/config-conta.php?act=att-senha", {
                    type: "POST",
                    data: {
                        senha: senha,
                        senha1: senha1,
                        senha2: senha2
                    }
                })
            .done(function (data) {
                var d = JSON.parse(data);
                switch (d.error) {
                    case 0:
                        alert('Atualizado com sucesso.');
                        location.reload();
                        break;
                    case 1:
                        showError.html('Senha antiga inválida.');
                        break;
                    case 2:
                        showError.html('A nova senha não é a mesma da confirmação.');
                        break;
                    case 3:
                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                        break;

                        // $(window).scrollTop(0);
                }
            }).fail(function (error) {
                console.log(error);
                showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
            }).always(function () {
                btnCadastrar.removeAttr('disabled');
                loading(false);
            });
        return false;
    });

    /*Professores*/
    /*================================*/
    $('#cad-prof').on('submit', function (e) {
        var showError = $('#showError'),
            btnCadastrar = $('#cadastrar');
        showError.html('');
        e.preventDefault();
        btnCadastrar.attr('disabled', 'disabled');
        var email = $('#email').val(),
            senha = $('#senha').val(),
            senha2 = $('#senha2').val(),
            nome = $('#nome').val(),
            perfil = $('#perfil option:selected').val(),

            vC = verificaProf(email, senha, senha2, nome, mostrarErro);

        if(!vC){
            $.ajax(
                "php/cadastro.php?act=cadastrar", {
                    type: "POST",
                    data: {
                        email: email,
                        senha: senha,
                        senha2: senha2,
                        nome: nome,
                        perfil: perfil
                    }
                })
            .done(function (data) {
                var d = JSON.parse(data);
                switch (d.error) {
                    case 0:
                        alert('Usuário Cadastrado com Sucesso!');
                        location.reload();
                        break;
                    case 1:
                        mostrarErro('#email');
                        showError.html('Email inválido.');
                        break;
                    case 2:
                        mostrarErro('#senha');
                        showError.html('Senha inválida.');
                        break;
                    case 3:
                        mostrarErro('#senha2');
                        showError.html('Senhas não são iguais.');
                        break;
                    case 4:
                        mostrarErro('#nome');
                        showError.html('Nome Inválido.');
                        break;
                    case 5:
                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                        break;
                }
            }).fail(function (error) {
                console.log(error);
                showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
            }).always(function () {
                btnCadastrar.removeAttr('disabled');
            });
        } else {
            btnCadastrar.removeAttr('disabled');
            loading(false);
        }
        return false;
    });

    $.ajax({
        url: "php/listarprofessor.php",
        type: 'POST',
        success: function (data) {
            let dadosProfessor = JSON.parse(data);
            $(dadosProfessor).each(function (index, item) {
                let table = "<tr>" +
                    "<th scope='row'>" + item.idUsuario + "</th>" +
                    "<td>" + item.nome + "</td>" +
                    "<td>" + item.email + "</td>" +
                    "<td>" + item.codProfessor + "</td>" +
                    "<td>" +
                    "<input type='button' class='btn btn-primary' value='Editar' data-toggle='modal' id='editar" + item.idUsuario + "'>" +
                    " <input type='button' class='btn btn-danger' value='Remover' id='removerProf" + item.idUsuario + "'>" +
                    "</td>" +
                    "</tr>";
                $('#tbody').append(table);
                $('#editar' + item.idUsuario).on('click', function () {
                    $('#editar' + item.idUsuario).attr('data-target', '#modalProf');
                    $('#prof_titulo').text("Atualizar dados de " + item.nome);
                    $('#prof_id').val(item.idUsuario);
                    $('#prof_email').val(item.email);
                    $('#prof_nome').val(item.nome);
                });
                $('#removerProf' + item.idUsuario).on('click', function(){
                    let confirmacao = confirm("Deseja Excluir Professor: " + item.nome + " ?");
                    if(confirmacao == true){
                        $.ajax(
                            "php/cadastro.php?act=remover", {
                                type: "POST",
                                data: {
                                    idUsuario: item.idUsuario
                                }
                            }).done(function (data){
                                var d = JSON.parse(data);
                                switch (d.error) {
                                    case 0:
                                        alert("Professor: " + item.nome + " Excluído com sucesso!");
                                        location.reload();
                                        break;
                                    case 1:
                                }
                            });
                    }
                });
            });
        }
    });

    $('.atualizar-prof').on('submit', function (e) {
        var showError = $('#showError'),
            btnCadastrar = $('#atualizarProf');
        showError.html('');
        e.preventDefault();
        btnCadastrar.attr('disabled', 'disabled');
        var id = $('#prof_id').val(),
            email = $('#prof_email').val(),
            nome = $('#prof_nome').val(),
            senha = $('#prof_senha').val(),
            senha2 = $('#prof_senha2').val();

        $.ajax(
                "php/cadastro.php?act=atualizar", {
                    type: "POST",
                    data: {
                        id: id,
                        email: email,
                        senha: senha,
                        senha2: senha2,
                        nome: nome
                    }
                })
            .done(function (data) {
                var d = JSON.parse(data);
                switch (d.error) {
                    case 0:
                        alert('Atualizado com sucesso.');
                        location.reload();
                        break;
                    case 1:
                        showError.html('Não foi Possível atualizar.');
                        break;
                    case 2:
                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                        break;
                }
            }).fail(function (error) {
                console.log(error);
                showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
            }).always(function () {
                btnCadastrar.removeAttr('disabled');
                loading(false);
            });
    });

    $('#cad_Lote_Prof').on('submit', function (e) {
        var data = new FormData();
        e.preventDefault();
        e.stopPropagation();
        data.append('file', document.getElementById('arquivoProf').files[0]);

            $.ajax(
                "php/cadastro.php?act=cadastroLote", {
                    type: "POST",
                    data: data,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        console.log(data);
                        if(data == 0){
                            alert("Professores Cadastrados com Sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro ao Cadastrar Professores");
                            location.reload();
                        }
                    }
                });
    });


    /*TURMAS*/
    /*================================*/
    $.ajax({
        url: "php/turmas.php?act=professor",
        type: 'POST',
        success: function (data) {
            let dadosProfessor = JSON.parse(data);
            $(dadosProfessor).each(function (index, item) {
                let professor = '<option value=" ' + item.idUsuario + ' ">' + item.nome + '</option>'
                $('.select_professor').append(professor);
            });
        }
    });

    let codProfessor = $('#codProfessor').val();
    $.ajax({
        url: "php/turmas.php?act=getTurmas",
        type: 'POST',
        data: {
            codProfessor: codProfessor
        },
        success: function (data) {
            let dadosTurma = JSON.parse(data);
            $(dadosTurma).each(function (index, item) {
                let turmas = '<option value="' + item.id + '">' + item.nomeTurma + '</option>';
                $('.select_turma').append(turmas);
            });
        }
    });

    // $('#turmas').on('submit', function (e) {
    //     var showError = $('#showError'),
    //         btnCadastrar = $('#Cadastrar_turmas');
    //     showError.html('');
    //     e.preventDefault();
    //     e.stopPropagation();
    //     loading(true);
    //     btnCadastrar.attr('disabled', 'disabled');
    //     var nome_turma = $('#nome_turma').val(),
    //         select_professor = $('.select_professor option:selected').val(),
    //         mundo_turma = $('.mundo_turma option:selected').val();

    //     $.ajax(
    //             "php/turmas.php?act=cadastrar", {
    //                 type: "POST",
    //                 data: {
    //                     nome_turma: nome_turma,
    //                     select_professor: select_professor,
    //                     mundo_turma: mundo_turma
    //                 }
    //             })
    //         .done(function (data) {
    //             var d = JSON.parse(data);
    //             switch (d.error) {
    //                 case 0:
    //                     alert('Turma cadastrada!');
    //                     location.reload();
    //                     break;
    //                 case 1:
    //                     mostrarErro('#child-nome');
    //                     showError.html('Nome inválido.');
    //                     break;
    //                 case 2:
    //                     mostrarErro('#child-nasc');
    //                     showError.html('Data inválida.');
    //                     break;
    //                 case 3:
    //                     showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
    //                     break;
    //             }
    //         }).fail(function (error) {
    //             console.log(error);
    //             showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
    //         }).always(function () {
    //             btnCadastrar.removeAttr('disabled');
    //             loading(false);
    //         });
    // });

    $('.atualizar-turma').on('submit', function (e) {
        var showError = $('#showError'),
            btnAtualizar = $(this).find('input[type=submit]');
        showError.html('');
        e.preventDefault();
        e.stopPropagation();
        loading(true);
        btnAtualizar.attr('disabled', 'disabled');
        var nome = $(this).find('.nome_turma').val(),
            id = $(this).find('.id_turma').val(),
            mundo_turma = $(this).find('.mundo_turma option:selected').val();

            console.log("604: ", mundo_turma);

        $.ajax(
                "php/turmas.php?act=atualizar", {
                    type: "POST",
                    data: {
                        id: id,
                        nome: nome,
                        mundo_turma: mundo_turma
                    }
                })
            .done(function (data) {
                var d = JSON.parse(data);
                switch (d.error) {
                    case 0:
                        alert('Atualizado com sucesso.');
                        location.reload();
                        break;
                    case 1:
                        showError.html('Nome inválido.');
                        break;
                    case 2:
                        showError.html('Data inválida.');
                        break;
                    case 3:
                        showError.html('Ocorreu algum erro em nossos servidores, tente novamente mais tarde ou contate-nos.');
                        break;
                }
            }).fail(function (error) {
                console.log(error);
                showError.html('Ocorreu algum erro que não foi identificado, tente novamente mais tarde ou contate-nos.');
            }).always(function () {
                btnAtualizar.removeAttr('disabled');
                loading(false);
            });
        return false;
    });

    $('.remove-turma').on('click', function (e) {
        var id = this.dataset.id;
        e.stopPropagation();

        var b = confirm('Deseja mesmo excluir a Turma?');
        if (b == true) {
            loading(true);
            $.ajax(
                    "php/turmas.php?act=deletar", {
                        type: "POST",
                        data: {
                            id: id
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

    $('.conteudoTurma').on('click', function(){
        if($('#conteudoTurmas')){
            $('#conteudoTurmas').empty();
            let turmaID = this.dataset.id;
            $.ajax({
                url:"php/turmas.php?act=getTurmasbyID",
                type: 'POST',
                data: {
                    idTurma: turmaID
                },
                success: function(data){
                    let dadosTurma = JSON.parse(data);
                    $(dadosTurma).each(function(index, value){
                        let turmacontent = `<div class="widget">`+
                                                `<div class="widget-content">`+
                                                    `<div>`+
                                                        `<button class="btn btn-danger right" id="btnExcluirTurma">Excluir Turma e Alunos</button>`+
                                                        `<h1>`+ value.nomeTurma +`</h1>`+
                                                        `<h3 class="right">Professor: `+ value.nome +`</h3>`+
                                                        `<h3 >Código: `+ value.codTurma +`</h3>`+
                                                    `</div>`+
                                                    `<br>`+
                                                    `<div class="widget-header">`+
                                                        `<h3><i class="icon-cogs"></i> Editar Alunos</h3>`+
                                                    `</div>`+
                                                    `<br>`+
                                                    `<div class="input-group">`+
                                                        `<button class="btn btn-primary right" id="addAlunoTurma">Adicionar Aluno</button>`+
                                                        `<select class="form-select right" id="select_addAlunoTurma">`+
                                                            `<option selected>Selecione o Aluno</option>`+
                                                        `</select>`+
                                                    `</div>`+
                                                    `<br>`+
                                                    `<table class="table table-hover" id="tabelaAlunosTurma">`+
                                                        `<thead>`+
                                                            `<tr>`+
                                                                `<th scope="col">#</th>`+
                                                                `<th scope="col">Nome</th>`+
                                                                `<th scope="col">Nome do Responsável</th>`+
                                                                `<th scope="col">Data Nascimento</th>`+
                                                                `<th scope="col">Mundo</th>`+
                                                                `<th scope="col">Avatar</th>`+
                                                                `<th scope="col">Ação</th>`+
                                                            `</tr>`+
                                                        `</thead>`+
                                                        `<tbody id="tableAlunos">`+
                                                        ``+
                                                        `</tbody>`+
                                                    `</table>`+
                                                `</div>`+
                                            `</div>`;
                        $('#conteudoTurmas').append(turmacontent);
                        let nomeTurma = value.nomeTurma,
                            idTurma = value.id,
                            idProfessor = value.idUsuario;
                        $.ajax({
                            url: "php/listarturma.php?act=selectAluno",
                            type: 'POST',
                            data: {
                                idTurma: idTurma,
                                nomeTurma: nomeTurma,
                                idProfessor: idProfessor
                            },
                            success: function (data) {
                                let dadosTurma = JSON.parse(data);
                                $(dadosTurma).each(function (index, item) {
                                    console.log(item);
                                    let option = '<option value=" ' + item.id + ' ">' + item.nomeAluno + '</option>';
                                    $('#select_addAlunoTurma').append(option);
                                    $('#addAlunoTurma').on('click', function () {
                                        $('#select_addAlunoTurma option:selected').val();
                                    });
                                });
                            }
                        });
                        $.ajax({
                            url: "php/listarturma.php?act=listar",
                            type: 'POST',
                            data: {
                                idTurma: idTurma
                            },
                            success: function (data) {
                                let dadosTurma = JSON.parse(data);
                                $(dadosTurma).each(function (index, item) {
                                    let table = "<tr>" +
                                                    "<th id='thID' scope='row'>" + item.id + "</th>" +
                                                    "<td>" + item.nomeAluno + "</td>" +
                                                    "<td>" + item.nomeResponsavel + "</td>" +
                                                    "<td>" + item.data_nasc + "</td>" +
                                                    "<td>" + item.mundo + "</td>" +
                                                    "<td>" + item.avatar + "</td>" +
                                                    "<td>" +
                                                    "<input type='button' class='btn btn-danger' value='Remover' id='removeAluno" + item.id + "'/>" +
                                                    "</td>" +
                                                "</tr>";
                                    $('#tableAlunos').append(table);
                                    $('#removeAluno' + item.id + '').on('click', function () {
                                        let confirmacao = confirm("Realmente deseja Excluir Aluno: " + item.nomeAluno  + "?"),
                                            idAluno = item.idAluno;
                                        if(confirmacao == true){
                                            $.ajax(
                                                "php/listarturma.php?act=deleteAluno", {
                                                type:"POST",
                                                data: {
                                                    idAluno: idAluno,
                                                    idTurma: idTurma
                                                }
                                                })
                                                .done(function (data){
                                                    var d = JSON.parse(data);
                                                    switch (d.error) {
                                                        case 0:
                                                            alert("Aluno: " + item.nomeAluno + " Excluído com sucesso!");
                                                            location.reload();
                                                            break;
                                                        case 1:
                                                    }
                                                });
                                        }
                                    });
                                });
                                $('#addAlunoTurma').on('click', function () {
                                    let idAlunoTurma = $('#select_addAlunoTurma option:selected').val();
                                    $.ajax(
                                        "php/listarturma.php?act=addAluno", {
                                        type:"POST",
                                        data: {
                                            idAlunoTurma: idAlunoTurma,
                                            idTurma: idTurma
                                        }
                                        })
                                        .done(function (data){
                                            var d = JSON.parse(data);
                                            switch (d.error) {
                                                case 0:
                                                    alert('Adicionado com sucesso.');
                                                    location.reload();
                                                    break;
                                                case 1:
                                            }
                                        });
                                });
                            }
                        });
                        $('#btnExcluirTurma').on('click', function (){
                            let confirmacao = prompt("Está ação irá excluir a turma e os alunos cadastrados!\n" + "Para confirmar digite: " +'"excluir turma e alunos"' + " no campo abaixo.");
                            if(confirmacao == 'excluir turma e alunos'){
                                let id = value.id;
                                $.ajax(
                                    "php/listarturma.php?act=remover", {
                                        type: "POST",
                                        data: {
                                            id: id
                                        }
                                    }
                                )
                                .done(function (data) {
                                    console.log(data);
                                    var d = JSON.parse(data);
                                    if (d.error == 0) {
                                        alert("Turma e Alunos Excluídos!");
                                        location.href = 'config.php';
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
                            } else {
                                alert("Ação Cancelada!");
                            }
                        });
                    });
                }
            });
        }
        
    });

    /*CONTATO*/
    /*================================*/
    $('#addContato').on('click', function () {
        if (window.contato_cntdr === undefined) {
            window.contato_cntdr = 0;
        }
        var html = '<div class="control-group">' +
            '<div class="controls item">' +
            '<div class="input-append">' +
            '<input required="required" type="email" name="contato[' + contato_cntdr + '][email]" value="" placeholder="Email do contato">' +
            '<input required="required" type="text" name="contato[' + contato_cntdr + '][nome]" value="" placeholder="Nome do contato">' +
            '<button class="btn remove-ctt" type="button"><i class="icon-remove"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        window.contato_cntdr += 1;
        $('#contato_list').append(html);
        $('.remove-ctt').unbind('click.rm');
        $('.remove-ctt').bind('click.rm', function () {
            $(this).parent().parent().parent().remove();
        });
    });

    $('.remove-ctt').bind('click.rm', function () {
        $(this).parent().parent().parent().remove();
    });


    if (jsGet(location.href, 'e') !== undefined) {
        error = JSON.parse(jsGet(location.href, 'e'));
        if (error.error == 0) {
            alert('OK!');
            location.href = location.origin + location.pathname;
        } else {
            console.log(error);
            alert('Ocoreu um erro!');
        }
    }
});