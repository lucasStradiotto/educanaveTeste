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

    $('#menuConfiguracao-').css('display', 'none');
    $('#menuConfiguracao-Selecionado').css('display', 'inline-block');

    if($('#session').val() == 'professor'){
        $('#alunos').addClass('active');
    }
    if($('#session').val() == 'admin'){
        $('#professor').addClass('active');
    }

    $('#btnAddDocumento').on('click', function(){
        $('#modalDocumento').modal('show');

        $('#formDocumento').submit(function(e){
            e.preventDefault();
            e.stopPropagation();
            var data = new FormData();
            data.append('file', document.getElementById('fileDoc').files[0]);

            $.ajax(
                "php/arquivos.php?act=documentos", {
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
                            alert("Erro ao adicionar arquivo! \n\n Por Favor, verifique se está enviando um arquivo .pdf.");
                            location.reload();
                        } else if(data == 2){
                            alert('O Arquivo ja existe!');
                            location.reload();
                        }
                    }
                });
        });
    });

    $.ajax({
        url: "php/arquivos.php?act=getDoc",
        type: "POST",
        data: {
            valor: 1
        }
    })
    .done(function(data){
        let docs = JSON.parse(data);
        if(docs.length > 0){
            $('#documentoVazio').html('');
            let divDocs = `<div class="divDocs" id="divDocsDownload"></div>`;
            $('#conteudoAccordionDiv').html(divDocs);
            $(docs).each(function(i, value){
                let docs = `<div class="itemDoc">`+
                                `<img src="assets/lixeira.png" id="btnDelDoc-`+value.id+`" class="btnDelDocs">`+
                                `<a href="`+value.link+`" class="itemDocDownload" download>`+
                                    `<img src="assets/pdf.png" class="imgPdfs" id="pdf-`+value.id+`">`+
                                    `<label class="lblPdfs">`+value.nome+`</label>`+
                                `</a>`+
                            `</div>`;
                $('#divDocsDownload').append(docs);

                let sessaoProf = $('#sessaoProf').val();
                
                if(sessaoProf == 'admin'){
                    $('.btnDelDocs').css('display', 'block');
                }

                $('#btnDelDoc-'+value.id).on('click', function(){
                    $.ajax({
                        url: "php/arquivos.php?act=removeDoc",
                        type: "POST",
                        data: {
                            idDoc: value.id
                        }
                    })
                    .done(function(data){
                        if(data == 0){
                            alert("Arquivo removido com sucesso!");
                            location.reload();
                        } else if(data == 1){
                            alert("Arquivo não removido, verifique as informações e tente novamente.");
                        }
                    });
                });
            });
        } else {
            let avisoVazio = `<h1 id="documentoVazio">Nenhum Documento disponível.</h1>`;
            $('#conteudoAccordionDiv').html(avisoVazio);
        }
    });
});