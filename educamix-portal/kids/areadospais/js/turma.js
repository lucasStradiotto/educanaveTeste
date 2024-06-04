var Regex = {
    url : /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/,
    email : /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/,
    youtube : /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
};

function verififyCadProf(nomeProf, emailProf, senha1Prof, senha2Prof, perfilProf) {

    var erro = 0;

    if(nomeProf == ''){
        let erroNome = `<p id="erroNome" class="pErro">Nome não pode ser vazio.</p>`;
        $('#nomeProf').addClass('erro');
        $('#formNome').append(erroNome);
        erro = 1;
    } else if(nomeProf.length <= 2){
        let erroQtdNome = `<p id="erroNomeChar" class="pErro">Nome deve ter mais do que 2 caracteres.</p>`;
        $('#nomeProf').addClass('erro');
        $('#formNome').append(erroQtdNome);
        erro = 1;
    } else {
        $('#nomeProf').removeClass('erro');
        $('#erroNome').remove();
        $('#erroNomeChar').remove();
    }

    if(senha1Prof == ''){
        let erroSenha1 = `<p id="erroSenha" class="pErro">A senha não pode ser vazia.</p>`;
        $('#senha1Prof').addClass('erro');
        $('#formSenha').append(erroSenha1);
        erro = 1;
    } else if(senha1Prof != senha2Prof){
        let erroSenhaDif = `<p id="erroSenhaDif" class="pErro">As senhas não coincidem.</p>`;
        $('#senha1Prof').addClass('erro');
        $('#senha2Prof').addClass('erro');
        $('#formSenha').append(erroSenhaDif);
        erro = 1;
    } else {
        $('#senha1Prof').removeClass('erro');
        $('#erroSenha').remove();
        $('#erroSenhaDif').remove();
    }
    if(senha2Prof == ''){
        let erroSenha2 = `<p id="erroSenha2" class="pErro">A senha não pode ser vazia.</p>`;
        $('#senha2Prof').addClass('erro');
        $('#formSenha2').append(erroSenha2);
        erro = 1;
    } else if(senha1Prof != senha2Prof){
        let erroSenha2Dif = `<p id="erroSenha2Dif" class="pErro">As senhas não coincidem.</p>`;
        $('#senha1Prof').addClass('erro');
        $('#senha2Prof').addClass('erro');
        $('#formSenha2').append(erroSenha2Dif);
        erro = 1;
    } else {
        $('#senha2Prof').removeClass('erro');
        $('#erroSenha2').remove();
        $('#erroSenha2Dif').remove();
    }

    if(perfilProf == 0){
        let erroPerfilProf = `<p id="erroPerfil" class="pErro">Perfil não selecionado.</p>`;
        $('#perfilProf').addClass('erro');
        $('#formPerfil').append(erroPerfilProf);
        erro = 1;
    } else {
        $('#perfilProf').removeClass('erro');
        $('#erroPerfil').remove();
    }
    
    if(emailProf == ''){
        let erroEmail = `<p id="erroEmail" class="pErro">E-mail não pode ser vazio.</p>`;
        $('#emailProf').addClass('erro');
        $('#formEmail').append(erroEmail);
        erro = 1;
    } else if(!Regex.email.test(emailProf)){
        let erroEmailValid = `<p id="erroEmailValid" class="pErro">E-mail não é válido.</p>`;
        $('#emailProf').addClass('erro');
        $('#formEmail').append(erroEmailValid);
        erro = 1;
    } else {
        $('#emailProf').removeClass('erro');
        $('#erroEmail').remove();
        $('#erroEmailValid').remove();
    }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyEmailProf(emailProf) {
    let erro = 0;
    $.ajax({
        url: "php/turmas.php?act=getEmailProf",
        type: "POST",
        async: false,
        data: {
            emailProf: emailProf
        },
        success: function(data){
            let dadosEmailProf = JSON.parse(data);
            if(dadosEmailProf.result == ''){
                erro = 0;
            } else {
                let erroEmailValid = `<p id="erroEmailValid" class="pErro">E-mail já cadastrado.</p>`;
                $('#emailProf').addClass('erro');
                $('#formEmail').append(erroEmailValid);
                erro = 1;
            }
        }
    });
    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyEditCadProf(nomeEditProf, emailEditProf) {
    
    let erro = 0;

    if(nomeEditProf == ''){
        let erroNomeEdit = `<p id="pErroEditNome" class="pErroEdit">Nome não pode ser vazio.</p>`;
        $('#nomeEditProf').addClass('erro');
        $('#formEditNome').append(erroNomeEdit);
        erro = 1;
    } else if(nomeEditProf.length <= 2){
        let erroEditNomeChar = `<p id="pErroEditNomeChar" class="pErroEdit">Nome deve ter mais do que 2 caracteres.</p>`;
        $('#nomeEditProf').addClass('erro');
        $('#formEditNome').append(erroEditNomeChar);
        erro = 1;
    } else {
        $('#nomeEditProf').removeClass('erro');
        $('#pErroEditNome').remove();
        $('#pErroEditNomeChar').remove();
    }

    if(emailEditProf == ''){
        let erroEditEmail = `<p id="pErroEditEmail" class="pErroEdit">E-mail não pode ser vazio.</p>`;
        $('#emailEditProf').addClass('erro');
        $('#formEditEmail').append(erroEditEmail);
        erro = 1;
    } else if(!Regex.email.test(emailEditProf)){
        let erroEditEmailValid = `<p id="pErroEditEmailValid" class="pErroEdit">E-mail não é válido.</p>`;
        $('#emailEditProf').addClass('erro');
        $('#formEditEmail').append(erroEditEmailValid);
        erro = 1;
    } else {
        $('#emailEditProf').removeClass('erro');
        $('#pErroEditEmail').remove();
        $('#pErroEditEmailValid').remove();
    }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyCadTurma(nomeNewTurma, mundoNewTurma) {

    let erro = 0;

    if(nomeNewTurma == ''){
        let erroNomeTurma = `<p id="pErroNomeTurma" class="pErroAddTurma">Nome não pode ser vazio.</p>`;
        $('#nomeTurma').addClass('erro');
        $('#divInputTurmaNome').append(erroNomeTurma);
        erro = 1;
    } else if(nomeNewTurma.length <= 2){
        let erroNomeTurma = `<p id="pErroNomeTurmaChar" class="pErroAddTurma">Nome não pode ter apenas 2 caracteres.</p>`;
        $('#nomeTurma').addClass('erro');
        $('#divInputTurmaNome').append(erroNomeTurma);
        erro = 1;
    } else {
        $('#nomeTurma').removeClass('erro');
        $('#pErroNomeTurma').remove();
        $('#pErroNomeTurmaChar').remove();
    }

    if(mundoNewTurma == ''){
        let erroMundoTurma = `<p id="pErroMundoTurma" class="pErroAddTurma">Mundo não pode ser vazio.</p>`;
        $('#mundoTurma').addClass('erro');
        $('#divInputTurmaMundo').append(erroMundoTurma);
        erro = 1;
    } else {
        $('#mundoTurma').removeClass('erro');
        $('#pErroMundoTurma').remove();
    }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyTurmaEdit(nomeTurmaEdit, mundoTurmaEdit) {
    let erro = 0;

    if(nomeTurmaEdit == ''){
        let erroNomeTurmaEdit = `<p id="pErroNomeTurmaEdit" class="pErroEditTurma">Nome da turma não pode ser vazio.</p>`;
        $('#nomeTurmaEditTurma').addClass('erro');
        $('#divInputEditTurmaNome').append(erroNomeTurmaEdit);
        erro = 1;
    } else if(nomeTurmaEdit.length <= 2){
        let erroNomeTurmaEditChar = `<p id="pErroTurmaEditChar" class="pErroEditTurma">Nome da turma não pode ter 2 caracteres.</p>`;
        $('#nomeTurmaEditTurma').addClass('erro');
        $('#divInputEditTurmaNome').append(erroNomeTurmaEditChar);
        erro = 1;
    } else {
        $('#nomeTurmaEditTurma').removeClass('erro');
        $('#pErroNomeTurmaEdit').remove();
        $('#pErroTurmaEditChar').remove();
    }

    if(mundoTurmaEdit == ''){
        let erroMundoTurmaEdit = `<p id="pErroMundoTurmaEdit" class="pErroEditTurma">Mundo da turma não pode ser vazio.</p>`;
        $('#mundoTurmaEditTurma').addClass('erro');
        $('#divInputEditTurmaMundo').append(erroMundoTurmaEdit);
        erro = 1;
    } else {
        $('#mundoTurmaEditTurma').removeClass('erro');
        $('#pErroMundoTurmaEdit').remove();
    }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyCadAluno(nomeAluno, respAluno, generoAluno, turmaAluno, dataNascAluno) {
    
    let erro = 0;

    if(nomeAluno == ''){
        let erroNomeAluno = `<p id="pErroNomeAluno" class="pErroAluno">Nome não pode ser vazio.</p>`;
        $('#nomeAluno').addClass('erro');
        $('#inputNomeAluno').append(erroNomeAluno);
        erro = 1;
    } else if(nomeAluno.length <= 2){
        let erroNomeAlunoChar = `<p id="pErroNomeAlunoChar" class="pErroAluno">Nome não pode ter 2 caracteres.</p>`;
        $('#nomeAluno').addClass('erro');
        $('#inputNomeAluno').append(erroNomeAlunoChar);
        erro = 1;
    } else {
        $('#nomeAluno').removeClass('erro');
        $('#pErroNomeAluno').remove();
        $('#pErroNomeAlunoChar').remove();
    }

    if(respAluno == ''){
        let erroRespAluno = `<p id="pErroRespAluno" class="pErroAluno">Nome do Responsávevl não pode ser vazio.</p>`;
        $('#responsavelAluno').addClass('erro');
        $('#inputNomeRespAluno').append(erroRespAluno);
        erro = 1;
    } else if(respAluno.length <= 2){
        let erroRespAlunoChar = `<p id="pErroRespAlunoChar" class="pErroAluno">Nome do Responsável não pode ter 2 caracteres.</p>`;
        $('#responsavelAluno').addClass('erro');
        $('#inputNomeRespAluno').append(erroRespAlunoChar);
        erro = 1;
    } else {
        $('#responsavelAluno').removeClass('erro');
        $('#pErroRespAluno').remove();
        $('#pErroRespAlunoChar').remove();
    }

    if(generoAluno == 0){
        let erroGeneroAluno = `<p id="pErroGeneroAluno" class="pErroAluno">Escolha um gênero para o aluno.</p>`;
        $('#generoAluno').addClass('erro');
        $('#inputGeneroAluno').append(erroGeneroAluno);
        erro = 1;
    } else {
        $('#generoAluno').removeClass('erro');
        $('#pErroGeneroAluno').remove();
    }

    if(turmaAluno == 0){
        let erroTurmaAluno = `<p id="pErroTurmaAluno" class="pErroAluno">Escolha um gênero para o aluno.</p>`;
        $('#turmaAluno').addClass('erro');
        $('#inputTurmaAluno').append(erroTurmaAluno);
        erro = 1;
    } else {
        $('#turmaAluno').removeClass('erro');
        $('#pErroTurmaAluno').remove();
    }

    if(dataNascAluno == ''){
        let erroDataAluno = `<p id="pErroDataAluno" class="pErroAluno">Escolha uma data de nascimento.</p>`;
        $('#nascimentoAluno').addClass('erro');
        $('#inputDataAluno').append(erroDataAluno);
        erro = 1;
    } else {
        $('#nascimentoAluno').removeClass('erro');
        $('#pErroDataAluno').remove();
    }

    // let dataSplit = dataNascAluno.split('-');

    // if(dataSplit[0] < '2015' || dataSplit[0] > '2019') {
    //     let erroDataInvalida = `<p id="pErroDataInvalida" class="pErroAluno">Alunos devem ter entre 4 e 8 anos.</p>`;
    //     $('#nascimentoAluno').addClass('erro');
    //     $('#inputDataAluno').append(erroDataInvalida);
    //     erro = 1;
    // } else {
    //     $('#nascimentoAluno').removeClass('erro');
    //     $('#pErroDataInvalida').remove();
    // }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
}

function verifyEditCadAluno(attNomeAluno, attRespAluno, attNascAluno, attSexoAluno, attTurmaAluno) {
    
    let erro = 0;

    if(attNomeAluno == ''){
        let erroEditNomeAluno = `<p id="pErroEditNomeAluno" class="pErroEditAluno">Nome não pode ser vazio.</p>`;
        $('#nomeEditAluno').addClass('erro');
        $('#formEditNome').append(erroEditNomeAluno);
        erro = 1;
    } else if(nomeAluno.length <= 2){
        let erroEditNomeAlunoChar = `<p id="pErroEditNomeAlunoChar" class="pErroAluno">Nome não pode ter 2 caracteres.</p>`;
        $('#nomeEditAluno').addClass('erro');
        $('#formEditNome').append(erroEditNomeAlunoChar);
        erro = 1;
    } else {
        $('#nomeEditAluno').removeClass('erro');
        $('#pErroEditNomeAluno').remove();
        $('#pErroEditNomeAlunoChar').remove();
    }

    if(attRespAluno == ''){
        let erroEditRespAluno = `<p id="pErroEditRespAluno" class="pErroAluno">Nome do Responsávevl não pode ser vazio.</p>`;
        $('#responsavelEditAluno').addClass('erro');
        $('#formEditResp').append(erroEditRespAluno);
        erro = 1;
    } else if(attRespAluno.length <= 2){
        let erroEditRespAlunoChar = `<p id="pErroEditRespAlunoChar" class="pErroAluno">Nome do Responsável não pode ter 2 caracteres.</p>`;
        $('#responsavelEditAluno').addClass('erro');
        $('#formEditResp').append(erroEditRespAlunoChar);
        erro = 1;
    } else {
        $('#responsavelEditAluno').removeClass('erro');
        $('#pErroEditRespAluno').remove();
        $('#pErroEditRespAlunoChar').remove();
    }

    if(attNascAluno == ''){
        let erroEditDataAluno = `<p id="pErroEditDataAluno" class="pErroAluno">Escolha uma data de nascimento.</p>`;
        $('#nascimentoEditAluno').addClass('erro');
        $('#formEditData').append(erroEditDataAluno);
        erro = 1;
    } else {
        $('#nascimentoEditAluno').removeClass('erro');
        $('#pErroEditDataAluno').remove();
    }

    // let dataSplit = attNascAluno.split('-');

    // if(dataSplit[0] < '2015' || dataSplit[0] > '2019') {
    //     let erroEditDataInvalida = `<p id="pErroEditDataInvalida" class="pErroAluno">Alunos devem ter entre 4 e 8 anos.</p>`;
    //     $('#nascimentoEditAluno').addClass('erro');
    //     $('#formEditData').append(erroEditDataInvalida);
    //     erro = 1;
    // } else {
    //     $('#nascimentoEditAluno').removeClass('erro');
    //     $('#pErroEditDataInvalida').remove();
    // }

    if(attSexoAluno == 0){
        let erroEditGeneroAluno = `<p id="pErroEditGeneroAluno" class="pErroAluno">Escolha um gênero para o aluno.</p>`;
        $('#generoEditAluno').addClass('erro');
        $('#formEditGenero').append(erroEditGeneroAluno);
        erro = 1;
    } else {
        $('#generoEditAluno').removeClass('erro');
        $('#pErroEditGeneroAluno').remove();
    }

    if(attTurmaAluno == 0){
        let erroEditTurmaAluno = `<p id="pErroEditTurmaAluno" class="pErroAluno">Escolha um gênero para o aluno.</p>`;
        $('#turmaEditAluno').addClass('erro');
        $('#formEditTurma').append(erroEditTurmaAluno);
        erro = 1;
    } else {
        $('#turmaEditAluno').removeClass('erro');
        $('#pErroEditTurmaAluno').remove();
    }

    if(erro > 0){
        return false;
    } else {
        return true;
    }
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

    $('#menuTurma-').css('display', 'none');
    $('#menuTurma-Selecionado').css('display', 'inline-block');

    // TURMAS

    let profSessao = $('#idProfSessao').val();
    if(profSessao != ''){
        $.ajax({
                url: "php/turmas.php?act=turmas",
                type: "POST",
                data: {
                    codProfessor: profSessao
                }
            })
            .done(function(data){
                let turmasProf = JSON.parse(data);
                $(turmasProf.result).each(function(i, value){
                    let turmaItem = `<div class="itemTurma" id="turma-`+ value.id +`">`+
                                        `<img src="assets/`+ value.iconeTurma +`.png" alt="`+ value.nomeTurma +`">`+
                                        `<label id="lblTurma-`+ value.id +`">`+ 
                                            value.nomeTurma +
                                        `</label>`+
                                    `</div>`;
                    $('#conteudoTurma').append(turmaItem);

                    $('#turma-'+value.id).on('click', function(){
                        $('#pesquisaAluno').removeAttr('disabled');
                        $('#removeAlunodaTurma').removeAttr('aria-disabled');
                        $('#removeAlunodaTurma').css('background-color', '#6db843');
                        $('#removeAlunodaTurma').css('cursor', 'pointer');
                        $('#optionsAluno').css('display','none');
                        $('.selecaoQuadro').remove();
                        $('.btnEdit').remove();
                        let quadroSelecionado = '<img src="assets/quadro-turma-selecionado.png" class="selecaoQuadro">';
                        $(this).append(quadroSelecionado);
                        var nomeTurmaSelected = value.nomeTurma;
                        if(nomeTurmaSelected != "Sem Turma"){
                            let btnEditar = '<img src="assets/Lapiz.png" class="btnEdit" name="btnEditTurma-'+value.id+'" id="btnEdit-'+value.id+'-'+value.nomeTurma+'">';
                            $(this).append(btnEditar);
                            $('#AddAlunoaTurma').css('display', 'block');
                        } else {
                            $('#AddAlunoaTurma').css('display', 'none');
                        }
                        var idTurma = value.id;
                        $('#btnMaisAluno').removeAttr('disabled');

                        $('#btnMaisAluno').on('click', function(){
                            $('#optionsAluno').css('display','flex');
                            setTimeout(() => {
                                $('#optionsAluno').css('display', 'none');
                            }, 10000);
                        });

                        // ALUNOS

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
                                    let idAluno = value.id;
                                    if(value.nomeTurma == "Sem Turma"){
                                        let alunoItem = `<div class="itemAluno" id="Aluno-`+idAluno+`">`+
                                                            `<img src="assets/`+ value.avatar +`.png" alt="aluno`+ value.avatar +`">`+
                                                            `<label id="lblAluno-`+ idAluno +`">`+ value.nomeAluno +`</label>`+
                                                        `</div>`;
                                        $('#conteudoAluno').append(alunoItem);
                                    } else {
                                        let alunoItem = `<div class="itemAluno" id="Aluno-`+idAluno+`">`+
                                                            `<img src="assets/`+ value.avatar +`.png" alt="aluno`+ value.avatar +`">`+
                                                            `<label id="lblAluno-`+ idAluno +`">`+ value.nomeAluno +`</label>`+
                                                            `<img src="assets/Botão Remover.png" alt="remover da turma" class="btnRemoverdaTurma" id="removeAluno-`+idAluno+`">`+
                                                        `</div>`;
                                        $('#conteudoAluno').append(alunoItem);
                                    }

                                    $('#Aluno-'+idAluno).on('click', function(){
                                        $('.selecaoQuadroAluno').remove();
                                        $('.btnEditAluno').remove();
                                        $('.btnEditAlunoZero').remove();
                                        let quadroSelectedAluno = '<img src="assets/quadro-turma-selecionado.png" class="selecaoQuadroAluno">';
                                        $(this).append(quadroSelectedAluno);
                                        let btnEditarAluno = '<img src="assets/Lapiz.png" class="btnEditAluno" id="btnEditAluno-'+idAluno+'" data-bs-toggle="modal" data-bs-target="#editarAluno">';
                                        let btnEditarAlunoZero = '<img src="assets/Lapiz.png" class="btnEditAlunoZero" id="btnEditAluno-'+idAluno+'" data-bs-toggle="modal" data-bs-target="#editarAluno">';
                                        if(value.nomeTurma == "Sem Turma"){
                                            $(this).append(btnEditarAlunoZero);
                                        } else {

                                            $(this).append(btnEditarAluno);
                                        }

                                        $('#btnEditAluno-'+idAluno).on('click',function() {
                                            
                                            $('#editarAluno').modal('show');
                                            
                                            $.ajax({
                                                url: "php/turmas.php?act=getTurmas",
                                                type: "POST",
                                                data: {
                                                    codProfessor: profSessao
                                                }
                                            })
                                            .done(function(data) {
                                                let dadosTurmas = JSON.parse(data);
                                                let optionTurmaZero = `<option value="1">Sem Turma</optioin>`;
                                                $('#turmaEditAluno').html(optionTurmaZero);
                                                $(dadosTurmas).each(function(i, value){
                                                    let optionTurma = `<option value="`+ value.id +`">`+ value.nomeTurma +`</option>`;
                                                    $('#turmaEditAluno').append(optionTurma);
                                                });
                                            });

                                            $.ajax({
                                                url: "php/turmas.php?act=getAluno",
                                                type: "POST",
                                                data: {
                                                    idAluno: idAluno
                                                }
                                            })
                                            .done(function(data) {
                                                let alunoData = JSON.parse(data);
                                                
                                                let generoAluno = alunoData[0].sexo;

                                                if(generoAluno == "Masculino"){
                                                    generoAluno = 1;
                                                } else if(generoAluno == "Feminino"){
                                                    generoAluno = 2;
                                                }

                                                var tituloEditAluno = 'Editar '+alunoData[0].nomeAluno;
                                                $('#h1EditAluno').html(tituloEditAluno);
                                                $('.edit-Aluno').removeClass('active', 'active');
                                                $('#item-edit-'+alunoData[0].avatar).addClass('active', 'active');
                                                $('#idAlunoEdit').val(value.idAluno);
                                                $('#nomeEditAluno').val(alunoData[0].nomeAluno);
                                                $('#responsavelEditAluno').val(alunoData[0].nomeResponsavel);
                                                $('#nascimentoEditAluno').val(alunoData[0].data_nasc);
                                                $('#generoEditAluno').val(generoAluno);
                                                $('#turmaEditAluno').val(alunoData[0].idTurma);
                                                $('#observacoesEditAluno').val(alunoData[0].observacoes);

                                            }); 

                                        });

                                    });

                                    $('#removeAluno-'+value.id).on('click', function(){
                                        var removeAlunodaTurma = confirm("Deseja remover " + value.nomeAluno + " da turma " + value.nomeTurma + " ?");

                                        if(removeAlunodaTurma == true){
                                            let idAluno = value.idAluno;
                                            $.ajax({
                                                url: "php/turmas.php?act=removeTurma",
                                                type: "POST",
                                                data: {
                                                    idTurma: idTurma,
                                                    idAluno: idAluno,
                                                    idProf: profSessao
                                                },
                                                success: function(data){
                                                    console.log(data);
                                                    if(data == 0){
                                                        alert("Aluno(a) "+ value.nomeAluno + " transferido para a Turma 0 - Sem Turma");
                                                        location.reload();
                                                    } else {
                                                        alert("Erro, Aluno(a) não transferido");
                                                    }
                                                }
                                            });
                                        } else {
                                            alert("O aluno(a) " + value.nomeAluno + " não foi removido da " + value.nomeTurma +".");
                                            location.reload();
                                        }
                                    });

                                });
                            }
                        });

                        $('#AddAlunoOpt').on('click', function(){
                            $('#addAluno').modal('show');
                            $('#turmaAluno option:selected').html(nomeTurmaSelected);
                            $('#turmaAluno option:selected').val(idTurma);
                        });

                        // FIM FOR EACH
                        var nomedaTurma = value.nomeTurma;
                        var idDaTurma = value.id;
                        $('#turmaAluno').val(nomedaTurma);
                        $('#idTurmaAluno').val(idDaTurma);
                        
                        $("[name='btnEditTurma-"+value.id+"']").on('click', function(){
                            $('#editTurma').modal('show');
                            let turmaSelected = value.id;
                            
                            $.ajax({
                                url: "php/turmas.php?act=getTurmasbyID",
                                type: "POST",
                                data: {
                                    idTurma: turmaSelected
                                },
                            })
                            .done(function(data){
                                let dadosTurma = JSON.parse(data);
                                let turmaID = dadosTurma[0].id;
                                let turmaNome = dadosTurma[0].nomeTurma;
                                let mundoTurma = dadosTurma[0].mundo;
                                let iconTurma = dadosTurma[0].iconeTurma;
                                $('#h1EditTurma').html('Editar ' + turmaNome);
                                $('.editTurma').removeClass('active', 'active');
                                $('#item-'+iconTurma).addClass('active', 'active');

                                $('#nomeTurmaEditTurma').val(turmaNome);
                                $('#mundoTurmaEditTurma').val(mundoTurma);

                                $('#btnSalvarEditTurma').on('click', function(){
                                    $('.divInputTurma').children().removeClass('erro');
                                    $('.divInputTurma').children().remove('.pErroEditTurma');
                                    var iconNewTurma = document.getElementsByClassName('editTurma active')[0].children[0].alt;
                                    var nomeTurmaEdit = document.getElementById('nomeTurmaEditTurma').value;
                                    var mundoTurmaEdit = document.getElementById('mundoTurmaEditTurma').value;

                                    var verifyEditTurma = verifyTurmaEdit(nomeTurmaEdit, mundoTurmaEdit);
                                    
                                    if(verifyEditTurma == true){
                                        $.ajax({
                                            url: "php/turmas.php?act=atualizar",
                                            type: "POST",
                                            data: {
                                                id: turmaID,
                                                nome: nomeTurmaEdit,
                                                mundo_turma: mundoTurmaEdit,
                                                icon_turma: iconNewTurma
                                            },
                                            success: function(data){
                                                $('#editTurma').modal('toggle');
                                                alert('Turma Salva com Sucesso!');
                                                location.reload();
                                            }
                                        });
                                    }
                                });
                            });
                        });

                    });
                    /// FIM SELEÇÃO TURMA
                });
            });

            $('#deletarTurma').on('click', function(){
                let ideDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
                let idTurma = ideDaTurma.split('-');
                var confirmDelTurma = prompt("Atenção! Está ação irá excluir a turma, todos os alunos serão movidos para a turma zero 'Sem Turma'.\n\nDeseja realmente excluir? - Digite 'Remover Turma'.");

                if(confirmDelTurma == 'Remover Turma'){
                    $.ajax({
                        url:"php/turmas.php?act=deletar",
                        type: "POST",
                        data: {
                            id: idTurma[1],
                            idProf: profSessao
                        },
                        success: function(data){
                            var removeTurma = JSON.parse(data);
                            if(removeTurma == 0){
                                alert("Turma Excluída com sucesso!");
                                location.reload();
                            } else {
                                alert("Erro! Não foi possível excluir a turma, por favor tente novamente.");
                            }
                        }
                    });
                } else {
                    alert("A Turma não foi excluída, verifique a palavra chave para excluir.");
                }
            });

            $('#deletarAluno').on('click', function(){

                var confirmDelAluno = confirm('ATENÇÃO: Deseja Realmente Excluir o(a) Aluno(a)?');

                if(confirmDelAluno == true){
                    var idAlunoExcluir = $('#idAlunoEdit').val();
                    $.ajax({
                        url: "php/turmas.php?act=removeAluno",
                        type: "POST",
                        data: {
                            id: idAlunoExcluir
                        },
                        success: function(data){
                            if(data == 0){
                                alert("Aluno(a) excluído(a) com sucesso!");
                                location.reload();
                            } else {
                                alert("Erro ao excluir aluno(a).");
                            }
                        }
                    });
                } else {
                    alert("Aluno(a) "+ value.nomeAluno + " não foi excluído(a).");
                }
            });

            $('#cadastroAlunoLoteForm').on('submit', function(e){
                e.preventDefault();
                e.stopPropagation();
                let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.innerHTML;
                let idTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
                if($('#arquivo').get(0).files.length == 0){
                    alert('Nenhum arquivo selecionado, por favor insira o arquivo csv.');
                } else {
                    var data = new FormData();
                    data.append('file', document.getElementById('arquivo').files[0]);
                    var d = new Date();
                    var month = d.getMonth()+1;
                    var day = d.getDate();
        
                    var nowDate = (day<10 ? '0': '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear();
                    
                    data.append('turma', idTurma);
                    data.append('nomeTurma', nomeDaTurma);
                    data.append('professor', profSessao);
                    data.append('dataAtual', nowDate);
        
                    $.ajax({
                        url: "php/turmas.php?act=cadastroAlunoLote",
                        type: "POST",
                        data: data,
                        processData: false,
                        contentType: false,
                    }).done(function(data){
                        if(data == 0){
                            alert("Alunos(as) cadastrados com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro! Professor por favor, não edite os títulos do arquivo e verifique se o arquivo que está enviando é o arquivo modelo salvo com as informações dos alunos corretas, verifique se o arquivo tem a extensão csv. Outros arquivos não serão aceitos.");
                            location.reload();
                        } else if(data == 2){
                            alert("Erro! Professor existem um ou mais Nomes em branco no arquivo, por favor preencha todas as informações dos alunos antes de enviar.");
                            location.reload();
                        } else if(data == 3){
                            alert("Erro! Professor, baixe o arquivo modelo e edite para incluir as informações dos alunos, sem alterar os títulos. não serão aceitos arquivos editados ou com outras extensões, somente .csv.");
                            location.reload();
                        } else if(data == 4){
                            alert("Erro! Professor, exitem um ou mais Nomes dos Responsáveis em branco no arquivo, por favor preencha todas as informações dos alunos antes de enviar.");
                            location.reload();
                        }
                    });
                    
                }
            });

            $('#btnSalvarEditAluno').on('click', function(){
                $('#editarAluno').modal('show');
    
                $.ajax({
                    url: "php/turmas.php?act=getTurmas",
                    type: "POST",
                    data: {
                        codProfessor: profSessao
                    }
                })
                .done(function(data) {
                    let dadosTurmas = JSON.parse(data);
                    $(dadosTurmas).each(function(i, value){
                        let optionTurma = `<option value="`+ value.id +`">`+ value.nomeTurma +`</option>`;
                        $('#turmaEditAluno').append(optionTurma);
                    });
                });
                
                var attIdAluno = $('#idAlunoEdit').val();
                var attNomeAluno = $('#nomeEditAluno').val();
                var attRespAluno = $('#responsavelEditAluno').val();
                var attNascAluno = $('#nascimentoEditAluno').val();
                var attSexoAluno = $('#generoEditAluno').val();
                var attTurmaAluno = $('#turmaEditAluno option:selected').text();
                var idTurmaSelected = $('#turmaEditAluno option:selected').val();
                var attObsAluno = $('#observacoesEditAluno').val();
                var attAvatarAluno = document.getElementsByClassName('edit-Aluno active')[0].children[0].alt;
    
                if(attSexoAluno == 1){
                    attAlunoSex = 'Masculino';
                } else if(attSexoAluno == 2){
                    attAlunoSex = 'Feminino';
                }
    
                var verifyEditAluno = verifyEditCadAluno(attNomeAluno, attRespAluno, attNascAluno, attAlunoSex, attTurmaAluno);
    
                if(verifyEditAluno == true){
    
                    $.ajax({
                        url: "php/turmas.php?act=atualizaAluno",
                        type: "POST",
                        data: {
                            idAluno: attIdAluno,
                            nome: attNomeAluno,
                            sexo: attAlunoSex,
                            resp_nome: attRespAluno,
                            avatar: attAvatarAluno,
                            nasc: attNascAluno,
                            observacoes: attObsAluno,
                            nomeTurma: attTurmaAluno,
                            idTurma: idTurmaSelected
                        },
                        success: function(data){
                            if(data == 0){
                                alert('Aluno Atualizado com Sucesso!');
                                location.reload();
                            } else if(data == 1) {
                                alert('ATENÇÃO! Preencha todos os campos para salvar.');
                            }
                        }
                    });
                }
            });

            $('#AddAlunoaTurma').on('click', function(){
                let nomeDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.innerHTML;
                let ideDaTurma = document.getElementsByClassName('selecaoQuadro')[0].previousElementSibling.id;
                let idTurma = ideDaTurma.split('-');
                $('#addAlunoTurma').modal('show');
                $('#h1AddAlunoTurma').html('Adicionar a '+nomeDaTurma);
                $.ajax({
                    url: "php/turmas.php?act=getAlunosTurmaZero",
                    type: "POST",
                    data: {
                        idProf: profSessao
                    },
                    success: function(data){
                        var alunosTurmaZero = JSON.parse(data);
                        if(alunosTurmaZero.result == ''){
                            let itemVazio = `<div id="itemVazio">`+
                                                `<h1 id="fraseItemVazio">A Turma Zero está vazia</h1>`+
                                            `</div>`;
                            $('#conteudoModalAddAlunoTurma').html(itemVazio);
                            $('#btnAddAlunoNaTurma').attr('disabled', 'disabled');
                        } else {
                            let gridDiv = `<div id="gridAddAlunoTurma"></div>`;
                            $('#conteudoModalAddAlunoTurma').append(gridDiv);
                            $('#gridAddAlunoTurma').html('');
                            $(alunosTurmaZero.result).each(function(i, value){
                                let alunoItem = `<div class="itemAlunoTurmaZero" id="Aluno-`+value.id+`">`+
                                                    `<img src="assets/`+ value.avatar +`.png" alt="aluno`+ value.avatar +`">`+
                                                    `<img src="assets/quadro-turma-selecionado.png" class="selecaoQuadroAddAlunoTurma" id="quadroAluno-`+value.id+`">`+
                                                    `<label id="lblAluno-`+ value.id +`">`+ value.nomeAluno +`</label>`+
                                                `</div>`;
                                $('#gridAddAlunoTurma').append(alunoItem);

                                $('#Aluno-'+value.id).on('click', function(){
                                    var quadroshow = $('#quadroAluno-'+value.id).css('display');
                                    if(quadroshow == 'none'){
                                        $('#quadroAluno-'+value.id).css('display', 'block');
                                        $('#quadroAluno-'+value.id).addClass('selected');
                                    } else if(quadroshow == 'block'){
                                        $('#quadroAluno-'+value.id).css('display', 'none');
                                        $('#quadroAluno-'+value.id).removeClass('selected');
                                    }
                                });

                            });
                        }

                        $('#btnAddAlunoNaTurma').on('click', function(){
                            var selectedElements = document.getElementsByClassName("selected");
                            $(selectedElements).each(function(i, value){
                                var idAlunoSelected = value.id;
                                var idSelected = idAlunoSelected.split('-');
                                var idAlunoTurma = idSelected[1];

                                $.ajax({
                                    url: "php/turmas.php?act=atualizaTurma",
                                    type: "POST",
                                    data: {
                                        idTurma: idTurma[1],
                                        idAlunoTurma: idAlunoTurma,
                                        nomeTurma: nomeDaTurma
                                    },
                                    success: function(data){
                                        console.log(data);
                                    }
                                });
                            });
                            alert("Alunos(as) foram movidos para a "+nomeDaTurma+"!");
                            location.reload();
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
                        if(value.nomeTurma == "Sem Turma"){
                            let dadosAlunoPesquisados = `<div class="itemAluno" id="Aluno-`+value.id+`">`+
                                                            `<img src="assets/`+value.avatar+`.png" alt="aluno`+value.avatar+`">`+
                                                            `<label id="lblAluno-`+value.id+`">`+value.nomeAluno+`</label>`+
                                                        `</div>`;
                                        $('#conteudoAluno').append(dadosAlunoPesquisados);
                        } else {
                            let dadosAlunoPesquisados = `<div class="itemAluno" id="Aluno-`+value.id+`">`+
                                                            `<img src="assets/`+value.avatar+`.png" alt="aluno`+value.avatar+`">`+
                                                            `<label id="lblAluno-`+value.id+`">`+value.nomeAluno+`</label>`+
                                                            `<img src="assets/Botão Remover.png" alt="remover da turma" class="btnRemoverdaTurma" id="removeAluno-`+value.id+`">`+
                                                        `</div>`;
                                $('#conteudoAluno').append(dadosAlunoPesquisados);
                        }
    
                            $('#Aluno-'+value.id).on('click', function(){
                                $('.selecaoQuadroAluno').remove();
                                $('.btnEditAluno').remove();
                                $('.idAlunoEdit').remove();
                                let quadroSelectedAluno = '<img src="assets/quadro-turma-selecionado.png" class="selecaoQuadroAluno">';
                                $(this).append(quadroSelectedAluno);
                                let btnEditarAluno = '<img src="assets/Lapiz.png" class="btnEditAluno" id="btnEditAluno-'+value.id+'">';
                                $(this).append(btnEditarAluno);
                                let idAluno = value.id;
    
                                $('#btnEditAluno-'+idAluno).on('click',function() {
    
                                    $('#editarAluno').modal('show');
    
                                    $.ajax({
                                        url: "php/turmas.php?act=getTurmas",
                                        type: "POST",
                                        data: {
                                            codProfessor: profSessao
                                        }
                                    })
                                    .done(function(data) {
                                        let dadosTurmas = JSON.parse(data);
                                        $('#turmaEditAluno').html('');
                                        $(dadosTurmas).each(function(i, value){
                                            let optionTurma = `<option value="`+ value.id +`">`+ value.nomeTurma +`</option>`;
                                            $('#turmaEditAluno').append(optionTurma);
                                        });
                                    });
                                    
                                    $.ajax({
                                        url: "php/turmas.php?act=getAlunoSearch",
                                        type: "POST",
                                        data: {
                                            idAluno: idAluno
                                        }
                                    })
                                    .done(function(data) {
                                        let alunoData = JSON.parse(data);
                                        
                                        let generoAluno = alunoData[0].sexo;
    
                                        if(generoAluno == "Masculino"){
                                            generoAluno = 1;
                                        } else if(generoAluno == "Feminino"){
                                            generoAluno = 2;
                                        }
                                        
                                        var tituloEditAluno = 'Editar '+alunoData[0].nomeAluno;
                                        $('#h1EditAluno').html(tituloEditAluno);
                                        $('.edit-Aluno').removeClass('active', 'active');
                                        $('#item-edit-'+alunoData[0].avatar).addClass('active', 'active');
                                        $('#idAlunoEdit').val(alunoData[0].id);
                                        $('#nomeEditAluno').val(alunoData[0].nomeAluno);
                                        $('#responsavelEditAluno').val(alunoData[0].nomeResponsavel);
                                        $('#nascimentoEditAluno').val(alunoData[0].data_nasc);
                                        $('#generoEditAluno').val(generoAluno);
                                        $('#turmaEditAluno option:selected').html(alunoData[0].nomeTurma);
                                        $('#observacoesEditAluno').val(alunoData[0].observacoes);
                                    });
                                });
                            });
                       });
                    }
                });
            });
            ///ADD Nova Turma
    
            $('#btnSalvarNovaTurma').on('click', function(){
                $('.divInputTurma').children().removeClass('erro');
                $('.divInputTurma').children().remove('.pErroAddTurma');
                var quadroNewTurma = document.getElementsByClassName('carousel-item active')[0].children[0].alt;
                var nomeNewTurma = document.getElementById('nomeTurma').value;
                var mundoNewTurma = document.getElementById('mundoTurma').value;
    
                var verifyTurma = verifyCadTurma(nomeNewTurma, mundoNewTurma);
    
                if(verifyTurma == true) {
    
                    $('#salvarTurma').modal('show');
                    $('#addTurmas').modal('toggle');
                    var quadroTurmaSave = `<img id="quadroTurmaSalvar" src="assets/`+ quadroNewTurma +`.png" alt="`+ quadroNewTurma +`" >`;
                    $('#nomeTurmaSalvar').append(nomeNewTurma);
                    $('#mundoTurmaSalvar').append(mundoNewTurma);
                    $('#conteudoModalSalvar').append(quadroTurmaSave);
        
                    $('#btnSalvarNovaTurmaSalvar').on('click', function(){
                        $.ajax({
                            url: "php/turmas.php?act=addTurma",
                            type: "POST",
                            data: {
                                nome_turma: nomeNewTurma,
                                select_professor: profSessao,
                                mundo_turma: mundoNewTurma,
                                icone_turma: quadroNewTurma
                            }
                        })
                        .done(function(data){
                            let dadosTurma = JSON.parse(data);
                            if(dadosTurma.result == ''){
                                alert('Turma cadastrada com sucesso!');
                                location.reload();
                            } else {
                                alert('Turma cadastrada com sucesso!');
                                location.reload();
                            }
                        });
                    });
                }
            });
    
            
    }

    $('#btnSalvarNovoAluno').on('click', function() {
        $('.inputCadAluno').children().removeClass('erro');
        $('.inputCadAluno').children().remove('.pErroAluno');

        let nomeAluno = $('#nomeAluno').val();
        let respAluno = $('#responsavelAluno').val();
        let generoAluno = $('#generoAluno option:selected').val();
        let turmaAluno = $('#turmaAluno option:selected').text();
        let idTurmaAluno = $('#turmaAluno option:selected').val();
        let obsAluno = $('#observacoesAluno').val();
        let avatarAluno = document.getElementsByClassName('carousel-item active')[2].children[0].alt;
        let nascimentoAluno = $('#nascimentoAluno').val();

        var verifyAluno = verifyCadAluno(nomeAluno, respAluno, generoAluno, turmaAluno, nascimentoAluno);

        if(verifyAluno == true){
            
            let dataAluno = nascimentoAluno.split('-');
            let dataNascAluno = dataAluno[2]+'/'+dataAluno[1]+'/'+dataAluno[0];

            if(generoAluno  == 1){
                generoAluno = "Masculino";
            } else if(generoAluno == 2){
                generoAluno = "Feminino";
            }

            $('#modalSalvarAluno').modal('show');
            $('#addAluno').modal('toggle');

            $('#h1AlunoSalvar').html('Aluno(a) '+nomeAluno);

            var iconeAluno = `<img id="iconeAlunoSalvar" src="assets/`+ avatarAluno +`.png" alt="`+ avatarAluno +`" />`;

            $('#conteudoModalAlunoSalvar').html(iconeAluno);
            $('#nomeAlunoSalvar').html(nomeAluno);
            $('#responsavelAlunoSalvar').html(respAluno);
            $('#nascimentoAlunoSalvar').html(dataNascAluno);
            $('#generoAlunoSalvar').html(generoAluno);
            $('#turmaAlunoSalvar').html(turmaAluno);
            $('#obsSalvar').html(obsAluno);
        }
    });

    $('#btnSalvarNovoAlunoSalvar').on('click',function(){

        let nomeAluno = $('#nomeAlunoSalvar').text();
        let respAluno = $('#responsavelAlunoSalvar').text();
        let nascimentoAluno = $('#nascimentoAlunoSalvar').text();
        let generoAluno = $('#generoAlunoSalvar').text();
        let turmaAluno = $('#turmaAlunoSalvar').text();
        let idTurmaAluno = $('#turmaAluno option:selected').text();
        let obsAluno = $('#obsSalvar').text();
        let avatarAluno = document.getElementsByClassName('carousel-item active')[2].children[0].alt;

        let dataNasc = nascimentoAluno.split("/");
        let dataNascimento = dataNasc[2]+"/"+dataNasc[1]+"/"+dataNasc[0];
                
        $.ajax({
            url: "php/turmas.php?act=addAluno",
            type: "POST",
            data: {
                nomeAluno: nomeAluno,
                respAluno: respAluno,
                nascimentoAluno: dataNascimento,
                generoAluno: generoAluno,
                avatarAluno: avatarAluno,
                turmaAluno: turmaAluno,
                idTurmaAluno: idTurmaAluno,
                codProfessor: profSessao,
                obsAluno: obsAluno,
            }
        })
        .done(function(data){
            if(data == 0){
                alert('Aluno(a) Cadastrado(a) com Sucesso!');
                location.reload();
            } else if(data == 1){
                alert('Aluno(a) não cadastrado(a), por favor tente novamente.');
            }
        });
    });

        /// Professores

        $.ajax({
            url: "php/professor.php?act=get",
            type: "POST"
        })
        .done(function(data){
            var dadosUsuario = JSON.parse(data);
            $(dadosUsuario.professores).each(function(i, value){
                let itemProf = `<tr id="prof-`+value.idUsuario+`" class="trItem">`+
                                    `<td class="tdData">`+value.idUsuario+`</td>`+
                                    `<td class="tdData">`+value.nome+`</td>`+
                                    `<td class="tdData">`+value.email+`</td>`+
                                    `<td class="tdData">`+value.perfil+`</td>`+
                                    `<td class="tdData">`+value.codProfessor+`</td>`+
                                    `<td><div class="tableButtons">`+
                                        `<img src="assets/FolhaPepel1.png" alt="Visualizar" class="btnVisualizarProf" id="view-`+value.idUsuario+`">`+
                                        `<img src="assets/Lapiz.png" alt="Editar" class="btnEditarProf" id="edit-`+value.idUsuario+`">`+
                                        `<img src="assets/Lixeira.png" alt="Excluir" class="btnExcluirProf" id="del-`+value.idUsuario+`">`+
                                    `</div></td>`+
                                `</tr>`;

                $('#tableProf').append(itemProf);

                $('#view-'+value.idUsuario).on('click', function(){
                    $('#ViewProf').modal('show');
                    $('#h1ViewProf').html('');
                    $('#h1ViewProf').html('Professor '+value.nome);
                    $('#nomeViewProf').html(value.nome);
                    $('#emailViewProf').html(value.email);
                    $('#perfilViewProf').html(value.perfil);
                    $('#codViewProf').html(value.codProfessor);

                    let btnViewToEdit = `<img id="btnViewToProf-`+value.idUsuario+`" src="assets/Lapiz.png" alt="Adicionar" class="btnViewModal">`;

                    $('#btnViewToEdit').html(btnViewToEdit);

                    $('#btnViewToProf-'+value.idUsuario).on('click', function(){
                        $('#EditProf').modal('show');
                        $('#h1EditProf').html('Editar '+value.nome);

                        $('#nomeEditProf').val(value.nome);
                        $('#emailEditProf').val(value.email);
                        $('#perfilEditProf option:selected').html(value.perfil);

                        $('#btnSalvarEditProf').on('click', function(){
                            $('.formEditField').children().removeClass('erro');
                            $('.formEditField').children().remove('.pErroEdit');

                            let nomeEditProf = $('#nomeEditProf').val();
                            let emailEditProf = $('#emailEditProf').val();

                            var verifyEdit = verifyEditCadProf(nomeEditProf, emailEditProf);

                            if(verifyEdit == true){
                                $.ajax({
                                    url: "php/professor.php?act=atualizar",
                                    type: "POST",
                                    data: {
                                        id: value.idUsuario,
                                        nome: nomeEditProf,
                                        email: emailEditProf
                                    }
                                })
                                .done(function(data){
                                    if(data == 0){
                                        alert("Cadastro atualizado com sucesso!");
                                        location.reload();
                                    }
                                });
                            }
                        });

                    });
                });

                $('#edit-'+value.idUsuario).on('click', function(){
                    $('#EditProf').modal('show');
                    $('#h1EditProf').html('Editar '+value.nome);

                    $('#nomeEditProf').val(value.nome);
                    $('#emailEditProf').val(value.email);
                    $('#perfilEditProf option:selected').html(value.perfil);

                    $('#btnSalvarEditProf').on('click', function(){
                        $('.formEditField').children().removeClass('erro');
                        $('.formEditField').children().remove('.pErroEdit');


                        let nomeEditProf = $('#nomeEditProf').val();
                        let emailEditProf = $('#emailEditProf').val();

                        var verifyEdit = verifyEditCadProf(nomeEditProf, emailEditProf);

                        if(verifyEdit == true){
                            $.ajax({
                                url: "php/professor.php?act=atualizar",
                                type: "POST",
                                data: {
                                    id: value.idUsuario,
                                    nome: nomeEditProf,
                                    email: emailEditProf
                                }
                            })
                            .done(function(data){
                                if(data == 0){
                                    alert("Cadastro atualizado com sucesso!");
                                    location.reload();
                                }
                            });
                        }
                    });

                });

                $('#del-'+value.idUsuario).on('click', function(){
                    let confirmarExcluirProf = prompt("Atenção: Esta ação irá remover "+value.nome+" permanentemente. \n\nTodas as turmas serão excluídas.\n\nPara excluir o professor e todos os alunos cadastrados por "+value.nome+" digite (Excluir Professor + Alunos).");
                    if(confirmarExcluirProf == 'ExcluiidoProfessor 999'){
                        
                        $.ajax({
                            url: "php/professor.php?act=remover",
                            type: "POST",
                            data: {
                                idUsuario: value.idUsuario
                            }
                        })
                        .done(function(data){
                            console.log(data);
                            if(data == 0){
                                alert("O usuário "+value.nome+" foi excluído com sucesso!");
                                location.reload();
                            } else {
                                alert('Erro!');
                            }
                        });
                    } else if(confirmarExcluirProf == 'Excluir Professor + Alunos') {
                        $.ajax({
                            url: "php/professor.php?act=removerAll",
                            type: "POST",
                            data: {
                                idUsuario: value.idUsuario
                            }
                        })
                        .done(function(data){
                            console.log(data);
                            if(data == 0){
                                alert("O usuário "+value.nome+" foi excluído com sucesso!");
                                location.reload();
                            } else {
                                alert('Erro!');
                            }
                        });
                    } else {
                        alert("Usuário não foi excluído, verifique a frase e digite novamente para excluir!");
                    }
                });

            });
        });

        $('#btnAddProf').on('click', function(){
            $('#addProfessores').modal('show');
            document.getElementById("formProf").reset();
        });

        $('#formProf').on('submit', function(e){
            e.stopPropagation();
            e.preventDefault();
            $('.formField').children().removeClass('erro');
            $('.formField').children().remove('.pErro');
            var nomeProf = $('#nomeProf').val();
            var emailProf = $('#emailProf').val();
            var senha1Prof = $('#senha1Prof').val();
            var senha2Prof = $('#senha2Prof').val();
            var perfilProf = $('#perfilProf option:selected').val();

            var verify = verififyCadProf(nomeProf, emailProf, senha1Prof, senha2Prof, perfilProf);

            if(verify == true){

                var verifyEmail = verifyEmailProf(emailProf);
                
                if(verifyEmail == true){
                    $.ajax( "php/professor.php?act=cadastrar", {
                        type: "POST",
                        data: {
                            nomeCadProf: nomeProf,
                            emailCadProf: emailProf,
                            senhaCadProf: senha1Prof,
                            perfilCadProf: perfilProf
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Cadastro concluído com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Erro, Cadastro falhou, verifique o nome!");
                            location.reload();
                        } else if(data == 2){
                            alert("Erro, Cadastro falhou, verifique o E-mail!");
                            location.reload();
                        } else if(data == 3){
                            alert("Erro, Cadastro falhou, verifique a senha!");
                            location.reload();
                        } else if(data == 4){
                            alert("Erro, Cadastro falhou, verifique o perfil");
                            location.reload();
                        } else if(data == 5){
                            alert("Erro, Não foi possível gerar um código para o Professor, Verifique se ja exite um professor cadastrado.");
                            location.reload();
                        }
                    });
                }
            }

        });

});
