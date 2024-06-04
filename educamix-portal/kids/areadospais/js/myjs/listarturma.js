$(document).ready(function () {
    let nomeTurma = $('#nomeTurma').val(),
        idTurma = $('#idTurma').val(),
        idProfessor = $('#idProf').val();
        
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
                $('#tbody').append(table);
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
        if (nasc == '') { 
            onError('#child-nasc');
            error = true;
        }
        return error;
    };

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
            nome_resp = $('#resp_nome').val(),
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
                            alert('Aluno Cadastrado!');
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

    $('#btnExcluirTurma').on('click', function (){
        let confirmacao = prompt("Está ação irá excluir a turma e os alunos cadastrados!\n" + "Para confirmar digite: " +'"excluir turma e alunos"' + " no campo abaixo.");
        if(confirmacao == 'excluir turma e alunos'){
            let id = $('#idTurma').val();
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