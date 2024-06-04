$(function() {FastClick.attach(document.body);});//Remove o delay de 300ms

var conta = {
    erro: false,//SE DER ERRO NA INTERNET, MOSTRAR O BOTÃO DE TENTAR CONECTAR NOVAMENTE
                //E USAR AS OPÇÕES QUE ESTIVEREM SALVAR NO APARELHO
    pai: {
        login:'',
        senha:'',
        filhos:[]
    },
    filho:{
        id:'yj6QCQ0iQ0ymcqGT61HEZw',//TODO: Id de default somente para testes
        horario:[],//Virá junto com o ajax do filho
        jogos:[],//ajax ao iniciar
        videos:[],//ajax ao iniciar
        musicas:[],//ajax ao iniciar
        sites:[],//ajax ao iniciar
        mensagens:[]//Ao clicar no botão
    }
}

/**
 * Transição de paginas
 */
var Page = {
    active : "#header",
    ToPage : function(page, trigger){
        if(Page.active != Page){
            $(Page.active).css("display", "none");
            $(page).css("display", "inline-block");
        }

        if(trigger !== undefined)
            trigger();

        this.active = page;
    }
};
/**
 * ATUALIZA O HTML COM AS INFOS PEGAS NO AJAX OU CACHE
 */
var atualizaInfos = function(){
    /*JOGOS*/
    
};

/**
 * PEGA AS INFOS POR AJAX (DEPOIS DE LOGADO)
 */
var getInfos = function(idFilho){
    var erros = 0
    /*
     * Get do filho
     */
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/videos.php?act=get',
           {
               type:"POST",
               data:{
                   child:idFilho
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.videos = d.result
            }else{
                console.log(d);
                erros++;
            }
        })
        .fail(function(error){
            console.log(error);
            erros++;
        });
    
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/musicas.php?act=get',
           {
               type:"POST",
               data:{
                   child:idFilho
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.musicas = d.result
            }else{
                console.log(d);
                erros++;
            }
        })
        .fail(function(error){
            console.log(error);
            erros++;
        });
    
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/jogos.php?act=get',
           {
               type:"POST",
               data:{
                   child:idFilho
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.jogos = d.result
            }else{
                console.log(d);
                erros++;
            }
        })
        .fail(function(error){
            console.log(d);
            erros++;
        });
    
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/site.php?act=get',
           {
               type:"POST",
               data:{
                   child:idFilho
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.jogos = d.result
            }else{
                console.log(d);
                erros++;
            }
        })
        .fail(function(error){
            console.log(error);
            erros++;
        });
    
    if(erros>0){
        conta.erro = true;
    }else{
        //TODO: REMOVER O BOTÃO DE TENTAR NOVAMENTE CASO EXISTA
        conta.erro = false;
    }
};


$(document).ready(function(){
    
    getInfos(conta.filho.id);
    
    if(conta.erro){
        //TODO: TENTAR PEGAR INFORMAÇÕES DO CACHE E HABILITAR O BOTÃO DE TENTAR NOVAMENTE
    }
    
    atualizaInfos();
    
    /*
     *
     *
     */
    $('.close').on('click', function(){
        Page.ToPage('#header');
    });
    
    
    $('#main>*').on('click', function(e){e.stopPropagation();});//Previne bugs
    
    $('#main').on('click', function(){
        console.log(Page);
        if(Page.active!='#header'){
            Page.ToPage('#header');
        }
    });
    
    $('#m-jogos').on('click', function(){
        Page.ToPage('#jogos');
        //
    });
    $('#m-videos').on('click', function(){
        Page.ToPage('#videos');
        //
    });
    $('#m-musicas').on('click', function(){
        Page.ToPage('#musicas');
        //
    });
    $('#m-internet').on('click', function(){
        Page.ToPage('#internet');
        //
    });
    $('#m-mensagens').on('click', function(){
        Page.ToPage('#mensagens');
        //
    });
    $('#m-config').on('click', function(){
        Page.ToPage('#config');
        //
    });
});