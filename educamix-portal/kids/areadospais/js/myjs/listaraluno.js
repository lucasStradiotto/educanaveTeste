$(document).ready(function () {
    
    $.ajax({
        url: "php/listaraluno.php",
        type: 'POST',
        success: function(data) {
            let dadosAluno = JSON.parse(data);
            $(dadosAluno).each(function (index, item) {
                let table = "<tr>" +
                    "<th scope='row'>" + item.id + "</th>" +
                    "<td>" + item.nome + "</td>" +
                    "<td>" + item.sobrenome + "</td>" +
                    "<td>" + item.data_nascimento_aluno + "</td>" +
                    "<td>" + item.endereco + "</td>" +
                    "<td>" + item.tel_responsavel + "</td>" +
                    "<td>" + item.email_responsavel + "</td>" +
                    "<td>" + item.avatar + "</td>" +
                    "<td>" +
                    "<input type='button' class='btn btn-primary' value='Editar' id='editar"+ item.id +"'>" +
                    "</td>" +
                    "</tr>";
                $('#tbody').append(table);
                $('#editar'+ item.id +'').on('click', function(){
                    $('#editarCadastroAluno').removeAttr('hidden');
                    let idAluno = item.id;
                    $('#idAlunoEdit').val(idAluno);
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
    var verificaCadastro = function (
        nome,
        sobrenome,
        data_nascimento_aluno,
        sexo,
        endereco,
        tel_responsavel,
        email_responsavel,
        turma,
        avatar,
        onError) {
        var error = false;
        if (nome.length < 2) {
            onError('#nome');
            error = true;
        }
        if (sobrenome.length < 2) {
            onError('#sobrenome');
            error = true;
        }
        if (data_nascimento_aluno == null) {
            onError('#data_nascimento_aluno');
            error = true;
        }
        if (sexo == null) {
            onError('#sexo');
            error = true;
        }
        if (endereco == null) {
            onError('#endereco');
            error = true;
        }
        if (tel_responsavel == null) {
            onError('#tel_responsavel');
            error = true;
        }
        if (email_responsavel == null) {
            onError('#email_responsavel');
            error = true;
        }
        if (avatar == null) {
            onError('#avatar');
            error = true;
        }
        return error;
    };
    $('#EditAluno').on('submit', function (e) {
        var showError = $('#showError'),
            btnSalvar = $('#Salvar');
        showError.html('');
        e.preventDefault();
        btnSalvar.attr('disabled', 'disabled');
        var id = $('#id').val(),
            nome = $('#nome').val(),
            sobrenome = $('#sobrenome').val(),
            data_nascimento_aluno = $('#data_nascimento_aluno').val(),
            sexo = $('#sexo').val(),
            endereco = $('#endereco').val(),
            tel_responsavel = $('#tel_responsavel').val(),
            email_responsavel = $('#email_responsavel').val(),
            avatar = $('#avatar').val(),

            vC = verificaCadastro(id, nome, sobrenome, data_nascimento_aluno, endereco, tel_responsavel, email_responsavel, avatar, mostrarErro);

        if (!vC) {
            $.ajax(
                    "php/editaraluno.php", {
                        type: "POST",
                        data: {
                            id: id,
                            nome: nome,
                            sobrenome: sobrenome,
                            data_nascimento_aluno: data_nascimento_aluno,
                            sexo: sexo,
                            endereco: endereco,
                            tel_responsavel: tel_responsavel,
                            email_responsavel: email_responsavel,
                            avatar: avatar
                        }
                    })
                .done(function (data) {
                    var d = JSON.parse(data);
                    switch (d.error) {
                        case 0:
                            alert('Cadastro de Aluno(a) Editado com Sucesso!');
                            location.href = 'listaraluno.php';
                            break;
                        case 1:
                            mostrarErro('#nome');
                            showError.html('Campo "Nome" não pode ser vazio.');
                            break;
                        case 2:
                            mostrarErro('#sobrenome');
                            showError.html('Campo "Sobrenome" não pode ser vazio.');
                            break;
                        case 3:
                            mostrarErro('#data_nascimento_aluno');
                            showError.html('Insira uma Data de Nascimento.');
                            break;
                        case 4:
                            mostrarErro('#sexo');
                            showError.html('Informe se é Ele ou Ela.');
                            break;
                        case 5:
                            mostrarErro('#endereco');
                            showError.html('Informe o Endereço');
                            break;
                        case 6:
                            mostrarErro('#tel_responsavel');
                            showError.html('Informe o Telefone do Responsável.');
                            break;
                        case 7:
                            mostrarErro('#email_responsavel');
                            showError.html('Informe o E-mail do Responsável.');
                            break;
                        case 8:
                            mostrarErro('#turma');
                            showError.html('Informe a Turma.');
                            break;
                        case 9:
                            mostrarErro('#professor');
                            showError.html('Informe o Professor.');
                            break;
                        case 10:
                            mostrarErro('#avatar');
                            showError.html('Informe o Avatar.');
                            break;
                        case 11:
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
