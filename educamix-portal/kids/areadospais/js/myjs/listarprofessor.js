$(document).ready(function () {
    
    $.ajax({
        url: "php/listarprofessor.php",
        type: 'POST',
        success: function(data) {
            let dadosProfessor = JSON.parse(data);
            $(dadosProfessor).each(function (index, item) {
                let table = "<tr>" +
                    "<th scope='row'>" + item.id + "</th>" +
                    "<td>" + item.nome_prof + "</td>" +
                    "<td>" + item.email_prof + "</td>" +
                    "<td>" + item.fone_prof + "</td>" +
                    "<td>" + item.cpf_prof + "</td>" +
                    "<td>" + item.data_nascimento_prof + "</td>" +
                    "<td>" + item.endereco_prof + "</td>" +
                    "<td>" + item.cep_prof + "</td>" +
                    "<td>" +
                    "<input type='button' class='btn btn-primary' value='Editar' id='editar"+ item.id +"'>" +
                    "</td>" +
                    "</tr>";
                $('#tbody').append(table);
                $('#editar'+ item.id +'').on('click', function(){
                    $('#editarCadastroProfessor').removeAttr('hidden');
                    let idProf = item.id;
                    $('#idProfEdit').val(idProf);
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
        nome_prof,
        email_prof,
        fone_prof,
        cpf_prof,
        data_nascimento_prof,
        endereco_prof,
        cep_prof,
        onError) {
        var error = false;
        if (nome_prof.length < 2) {
            onError('#nome_prof');
            error = true;
        }
        if (email_prof == null) {
            onError('#email_prof');
            error = true;
        }
        if (fone_prof.length < 2) {
            onError('#fone_prof');
            error = true;
        }
        if (cpf_prof == null) {
            onError('#cpf_prof');
            error = true;
        }
        if (data_nascimento_prof == null) {
            onError('#data_nascimento_prof');
            error = true;
        }
        if (endereco_prof == null) {
            onError('#endereco_prof');
            error = true;
        }
        if (cep_prof == null) {
            onError('#cep_prof');
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
            nome_prof = $('#nome_prof').val(),
            email_prof = $('#email_prof').val(),
            fone_prof = $('#fone_prof').val(),
            cpf_prof = $('#cpf_prof').val(),
            data_nascimento_prof = $('#data_nascimento_prof').val(),
            endereco_prof = $('#endereco_prof').val(),
            cep_prof = $('#cep_prof').val(),

            vC = verificaCadastro(id, nome_prof, email_prof, fone_prof, cpf_prof, data_nascimento_prof, endereco_prof, cep_prof, mostrarErro);

        if (!vC) {
            $.ajax(
                    "php/editaraluno.php", {
                        type: "POST",
                        data: {
                            id: id,
                            nome_prof: nome_prof,
                            email_prof: email_prof,
                            fone_prof: fone_prof,
                            cpf_prof: cpf_prof,
                            data_nascimento_prof: data_nascimento_prof,
                            endereco_prof: endereco_prof,
                            cep_prof: cep_prof
                        }
                    })
                .done(function (data) {
                    var d = JSON.parse(data);
                    switch (d.error) {
                        case 0:
                            alert('Cadastro de Professor(a) Editado com Sucesso!');
                            location.href = 'listaraluno.php';
                            break;
                        case 1:
                            mostrarErro('#nome_prof');
                            showError.html('Campo "Nome" não pode ser vazio.');
                            break;
                        case 2:
                            mostrarErro('#email_prof');
                            showError.html('Campo "E-mail" não pode ser vazio.');
                            break;
                        case 3:
                            mostrarErro('#fone_prof');
                            showError.html('Insira o Telefone do Professor(a) para contato.');
                            break;
                        case 4:
                            mostrarErro('#cpf_prof');
                            showError.html('Informe o CPF.');
                            break;
                        case 5:
                            mostrarErro('#data_nascimento_prof');
                            showError.html('Informe a Data de nascimento do Professor(a)');
                            break;
                        case 6:
                            mostrarErro('#endereco_prof');
                            showError.html('Informe o Endereço do Professor(a).');
                            break;
                        case 7:
                            mostrarErro('#cep_prof');
                            showError.html('Informe o CEP do Endereço.');
                            break;
                        case 8:
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
