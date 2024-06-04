$(document).ready(function(){
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

    $('#menuMensagem-').css('display', 'none');
    $('#menuMensagem-Selecionado').css('display', 'inline-block');

    let idProf = $('#idProfSessao').val();

    $.ajax({
        url: "php/notificacoes.php?act=getNotification",
        type: "POST",
        data: {
            idProf: idProf
        }
    })
    .done(function(data){
        let dadosNew = JSON.parse(data);
        if(dadosNew['Jogo1'] != '' || dadosNew['Jogo2'] != '' || dadosNew['Jogo3'] != '' || dadosNew['Jogo4'] != '' || dadosNew['Jogo5'] != '' || dadosNew['Jogo6'] != '' || dadosNew['Jogo7'] != '' || dadosNew['Jogo8'] != '' || dadosNew['Jogo9'] != '' || dadosNew['Ebook1'] != '' || dadosNew['Ebook2'] != '' || dadosNew['Ebook3'] != '' || dadosNew['Ebook4'] != '' || dadosNew['Ebook5'] != '' || dadosNew['Ebook6'] != '' || dadosNew['Ebook7'] != '' || dadosNew['Ebook8'] != '' || dadosNew['Ebook9'] != '' || dadosNew['Hibrido1'] != '' || dadosNew['Hibrido2'] != '' || dadosNew['Hibrido3'] != '' || dadosNew['Hibrido4'] != '' || dadosNew['Hibrido5'] != '' || dadosNew['Hibrido6'] != '' || dadosNew['Hibrido7'] != '' || dadosNew['Hibrido8'] != '' || dadosNew['Hibrido9'] != '' || dadosNew['Musicas'] != '' || dadosNew['Videos'] != '' || dadosNew['Sites'] != ''){

            let qtdNotify1 = dadosNew['Jogo1'].length;
            let qtdNotify2 = dadosNew['Jogo2'].length;
            let qtdNotify3 = dadosNew['Jogo3'].length;
            let qtdNotify4 = dadosNew['Jogo4'].length;
            let qtdNotify5 = dadosNew['Jogo5'].length;
            let qtdNotify6 = dadosNew['Jogo6'].length;
            let qtdNotify7 = dadosNew['Jogo7'].length;
            let qtdNotify8 = dadosNew['Jogo8'].length;
            let qtdNotify9 = dadosNew['Jogo9'].length;
            let qtdNotify10 = dadosNew['Ebook1'].length;
            let qtdNotify11 = dadosNew['Ebook2'].length;
            let qtdNotify12 = dadosNew['Ebook3'].length;
            let qtdNotify13 = dadosNew['Ebook4'].length;
            let qtdNotify14 = dadosNew['Ebook5'].length;
            let qtdNotify15 = dadosNew['Ebook6'].length;
            let qtdNotify16 = dadosNew['Ebook7'].length;
            let qtdNotify17 = dadosNew['Ebook8'].length;
            let qtdNotify18 = dadosNew['Ebook9'].length;
            let qtdNotify19 = dadosNew['Hibrido1'].length;
            let qtdNotify20 = dadosNew['Hibrido2'].length;
            let qtdNotify21 = dadosNew['Hibrido3'].length;
            let qtdNotify22 = dadosNew['Hibrido4'].length;
            let qtdNotify23 = dadosNew['Hibrido5'].length;
            let qtdNotify24 = dadosNew['Hibrido6'].length;
            let qtdNotify25 = dadosNew['Hibrido7'].length;
            let qtdNotify26 = dadosNew['Hibrido8'].length;
            let qtdNotify27 = dadosNew['Hibrido9'].length;
            let qtdNotify28 = dadosNew['Musicas'].length;
            let qtdNotify29 = dadosNew['Videos'].length;
            let qtdNotify30 = dadosNew['Sites'].length;

            let qtdJogos = qtdNotify1 + qtdNotify2 + qtdNotify3 + qtdNotify4 + qtdNotify5 + qtdNotify6 + qtdNotify7 + qtdNotify8 + qtdNotify9;

            let qtdEbooks = qtdNotify10 + qtdNotify11 + qtdNotify12 + qtdNotify13 + qtdNotify14 + qtdNotify15 + qtdNotify16 + qtdNotify17 + qtdNotify18;

            let qtdHibridos = qtdNotify19 + qtdNotify20 + qtdNotify21 + qtdNotify22 + qtdNotify23 + qtdNotify24 + qtdNotify25 + qtdNotify26 + qtdNotify27;

            let qtdMidia = qtdNotify28 + qtdNotify29 + qtdNotify30;

            let qtdAllNotify = qtdJogos + qtdEbooks + qtdHibridos + qtdMidia;

            let novidadeTitulo = `<h3>Novidade Se Aproximando!</h3>`;
            $('#tituloMsgQtd').html(qtdAllNotify + ' Notificações');
            $('#conteudoNotificacao').html(novidadeTitulo);
            if(dadosNew['Jogo1'] != '' || dadosNew['Jogo2'] != '' || dadosNew['Jogo3'] != '' || dadosNew['Jogo4'] != '' || dadosNew['Jogo5'] != '' || dadosNew['Jogo6'] != '' || dadosNew['Jogo7'] != '' || dadosNew['Jogo8'] != '' || dadosNew['Jogo9'] != ''){
                
                let novidadeJogoDesc = `<p>Novos Jogos foram adicionados.</p>`;
                $('#conteudoNotificacao').append(novidadeJogoDesc);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemJogo">`+
                                    `<div class="accordion-item" id="itemMensagemJogo">`+
                                        `<button id="btnMensagemJogo" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemJogo" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgJogo">`+qtdJogos+` Novo(s) Jogo(s)</h2>`+
                                            `<div class="iconsOnOff">`+
                                                `<img id="iconeOnJogos" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemJogo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemJogo">`+
                                            `<div class="conteudoMensagem" id="conteudoJogo1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoJogo').css('display', 'block');
                $('#conteudoJogo').html(itemAcordion1);

                $(dadosNew['Jogo1']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo2']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo3']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo4']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo5']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo6']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Jogo7']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Ebook8']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });

                $(dadosNew['Ebook9']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemJogo1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoJogo1').append(itemJogo1);
                    }
                });
            }
            if(dadosNew['Ebook1'] != '' || dadosNew['Ebook2'] != '' || dadosNew['Ebook3'] != '' || dadosNew['Ebook4'] != '' || dadosNew['Ebook5'] != '' || dadosNew['Ebook6'] != '' || dadosNew['Ebook7'] != '' || dadosNew['Ebook8'] != '' || dadosNew['Ebook9'] != ''){

                let novidadeEbookDesc = `<p>Novas Histórias Digitais foram adicionados.</p>`;
                $('#conteudoNotificacao').append(novidadeEbookDesc);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemEbook">`+
                                    `<div class="accordion-item" id="itemMensagemEbook">`+
                                        `<button id="btnMensagemEbook" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemEbook" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgEbook">`+qtdEbooks+` Nova(s) História(s) Digitais</h2>`+
                                            `<div class="iconesOnOff">`+
                                                `<img id="iconeOnEbooks" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemEbook" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemEbook">`+
                                            `<div class="conteudoMensagem" id="conteudoEbook1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoEbook').css('display', 'block');
                $('#conteudoEbook').html(itemAcordion1);

                $(dadosNew['Ebook1']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook1);
                    }
                });

                $(dadosNew['Ebook2']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook2 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook2);
                    }
                });

                $(dadosNew['Ebook3']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook3 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook3);
                    }
                });

                $(dadosNew['Ebook4']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook4 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook4);
                    }
                });

                $(dadosNew['Ebook5']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook5 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook5);
                    }
                });

                $(dadosNew['Ebook6']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook6 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook6);
                    }
                });

                $(dadosNew['Ebook7']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook7 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook7);
                    }
                });

                $(dadosNew['Ebook8']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook8 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook8);
                    }
                });

                $(dadosNew['Ebook9']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemEbook9 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoEbook1').append(itemEbook9);
                    }
                });

            }
            if(dadosNew['Hibrido1'] != '' || dadosNew['Hibrido2'] != '' || dadosNew['Hibrido3'] != '' || dadosNew['Hibrido4'] != '' || dadosNew['Hibrido5'] != '' || dadosNew['Hibrido6'] != '' || dadosNew['Hibrido7'] != '' || dadosNew['Hibrido8'] != '' || dadosNew['Hibrido9'] != '') {

                let novidadeHibridoDesc = `<p>Novos Jogos Híbridos foram adicionados.</p>`;
                $('#conteudoNotificacao').append(novidadeHibridoDesc);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemHibrido">`+
                                    `<div class="accordion-item" id="itemMensagemHibrido">`+
                                        `<button id="btnMensagemHibrido" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemHibrido" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgHibrido">`+qtdHibridos+` Novo(s) Jogo(s) Híbridos</h2>`+
                                            `<div class="iconesOnOff">`+
                                                `<img id="iconeOnHibrido" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemHibrido" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemHibrido">`+
                                            `<div class="conteudoMensagem" id="conteudoHibrido1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoHibrido').css('display', 'block');
                $('#conteudoHibrido').html(itemAcordion1);

                $(dadosNew['Hibrido1']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido1 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido1);
                    }
                });

                $(dadosNew['Hibrido2']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido2 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido2);
                    }
                });

                $(dadosNew['Hibrido3']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido3 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido3);
                    }
                });

                $(dadosNew['Hibrido4']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido4 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido4);
                    }
                });

                $(dadosNew['Hibrido5']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido5 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido5);
                    }
                });

                $(dadosNew['Hibrido6']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido6 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido6);
                    }
                });

                $(dadosNew['Hibrido7']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido7 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido7);
                    }
                });

                $(dadosNew['Hibrido8']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido8 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido8);
                    }
                });

                $(dadosNew['Hibrido9']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemHibrido9 = `<div class="conteudoCard">`+
                                            `<img src="`+value.link+`/icone.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoHibrido1').append(itemHibrido9);
                    }
                });

            }
            if(dadosNew['Musicas'] != '') {
                let novidadeMusica = `<p>Novas Músicas foram adicionadas.`;
                $('#conteudoNotificacao').append(novidadeMusica);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemMusica">`+
                                    `<div class="accordion-item" id="itemMensagemMusica">`+
                                        `<button id="btnMensagemMusic" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemMusica" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgMusica">`+qtdNotify28+` Nova(s) Música(s)</h2>`+
                                            `<div class="iconesOnOff">`+
                                                `<img id="iconeOnMusic" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemMusica" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemMusica">`+
                                            `<div class="conteudoMensagem" id="conteudoMusica1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoMusica').css('display', 'block');
                $('#conteudoMusica').html(itemAcordion1);

                $(dadosNew['Musicas']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemMusica = `<div class="conteudoCard">`+
                                            `<img src="assets/musica.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoMusica1').append(itemMusica);
                    }
                });
            }
            if(dadosNew['Videos'] != '') {
                let novidadeVideos = `<p>Novos Vídeos foram adicionadas.`;
                $('#conteudoNotificacao').append(novidadeVideos);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemVideos">`+
                                    `<div class="accordion-item" id="itemMensagemVideos">`+
                                        `<button id="btnMensagemVideo" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemVideos" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgVideos">`+qtdNotify29+` Novo(s) Vídeo(s)</h2>`+
                                            `<div class="iconesOnOff">`+
                                                `<img id="iconeOnVideo" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemVideos" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemVideos">`+
                                            `<div class="conteudoMensagem" id="conteudoVideos1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoVideo').css('display', 'block');
                $('#conteudoVideo').html(itemAcordion1);

                $(dadosNew['Videos']).each(function(i, value){
                    if(value != ''){
                        let nameVideo = value.nome_video.replace(/[-_]+/g, ' ');
                        let nome = nameVideo.split(".");
                        let itemVideos = `<div class="conteudoCard">`+
                                            `<img src="assets/video.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome[0]+`</p>`+
                                        `</div>`;
        
                        $('#conteudoVideos1').append(itemVideos);
                    }
                });
            }
            if(dadosNew['Sites'] != ''){
                let novidadeSite = `<p>Novos Sites foram adicionadas.`;
                $('#conteudoNotificacao').append(novidadeSite);

                let itemAcordion1 = `<div class="accordion" id="accordionMensagemSite">`+
                                    `<div class="accordion-item" id="itemMensagemSite">`+
                                        `<button id="btnMensagemSite" class="accordion accordionMensagem" data-bs-toggle="collapse" data-bs-target="#collapseMensagemSite" aria-expanded="true" aria-controls="collapseMensagem">`+
                                            `<h2 class="tituloMsg" id="tituloMsgSite">`+qtdNotify30+` Novo(s) Site(s)</h2>`+
                                            `<div class="iconsOnOff">`+
                                                `<img id="iconeOnSite" src="assets/on.png" alt="Mensagem Disponível">`+
                                                `<img class="iconeOff" src="assets/off.png" alt="Mensagem Disponível">`+
                                            `</div>`+
                                        `</button>`+
                                        `<div id="collapseMensagemSite" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMensagemSite">`+
                                            `<div class="conteudoMensagem" id="conteudoSite1">`+
                                                
                                            `</div>`+
                                        `</div>`+
                                    `</div>`+
                                `</div>`;
                $('#conteudoSite').css('display', 'block');
                $('#conteudoSite').html(itemAcordion1);

                $(dadosNew['Sites']).each(function(i, value){
                    if(value != ''){
                        let nome = value.nome.replace(/[-_]+/g, ' ');
                        let itemSite = `<div class="conteudoCard">`+
                                            `<img src="assets/browser.png" class="iconeConteudo">`+
                                            `<p class="titleCard">`+nome+`</p>`+
                                        `</div>`;
        
                        $('#conteudoSite1').append(itemSite);
                    }
                });
            }
        } else {
            let nenhumaNovidade = `<h3>Nenhuma Novidade a vista</h3>`;
            $('#conteudoNotificacao').html(nenhumaNovidade);
        }
    });

    $('#conteudoJogo').on('click', function(){
        $('#iconeOnJogos').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifyJogos",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });

    $('#conteudoEbook').on('click', function(){
        $('#iconeOnEbooks').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifyEbooks",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });

    $('#conteudoHibrido').on('click', function(){
        $('#iconeOnHibrido').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifyHibrido",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });

    $('#conteudoMusica').on('click', function(){
        $('#iconeOnMusic').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifyMusic",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });

    $('#conteudoVideo').on('click', function(){
        $('#iconeOnVideo').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifyVideo",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });

    $('#conteudoSite').on('click', function(){
        $('#iconeOnSite').css('display', 'none');
        $.ajax({
            url: "php/notificacoes.php?act=getNotifySite",
            type: "POST",
            data: {
                idProf: idProf
            }
        })
        .done(function(data){
            if(data == 0){
                console.log(0);
            }
        });
    });


});