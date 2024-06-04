$(function() {FastClick.attach(document.body);});//Remove o delay de 300ms

var conta = {
    erro: false,//SE DER ERRO NA INTERNET, MOSTRAR O BOTÃO DE TENTAR CONECTAR NOVAMENTE
                //E USAR AS OPÇÕES QUE ESTIVEREM SALVAR NO APARELHO
    pai: {
        login:'',
        senha:'',
        filhos:[] 
    },
    filho: {
        //id:'yj6QCQ0iQ0ymcqGT61HEZw',//TODO: Id de default somente para testes
        id:'',
        idPai:'',
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
    on : true,
    active : "#header",
    ToPage : function(page, trigger){
        if(this.on){
            if(Page.active != Page){
                $(Page.active).css("display", "none");
                $(page).css("display", "inline-block");
            }

            if(trigger !== undefined)
                trigger();

            this.active = page;
        }else{
            //TODO: MENSAGEM INFORMANDO QUE NÃO ESTA DISPONIVEL
        }
    },
    /*Ignora se pode ou não trocar de pagina*/
    change : function(page){
        if(Page.active != Page){
            $(Page.active).css("display", "none");
            $(page).css("display", "inline-block");
        }
        this.active = page;
    }
};
/**
 * ATUALIZA O HTML COM AS INFOS PEGAS NO AJAX OU CACHE
 */
var atualizaInfos = function(){
    /*JOGOS*/
    var html = '';
    for(var c=0;c<conta.filho.jogos.length;c++){
        var jogo = conta.filho.jogos[c];
        html+='<li class="menu-item">'+
                '<a href="'+jogo.link+'">'+
                    '<img src="'+jogo.img+'">'+
                    '<span>'+jogo.nome+'</span>'+
                '</a>'+
              '</li>';
    }
    $('#jogos>ul').html(html);
    /*VIDEOS*/
    html = '';
    for(var c=0;c<conta.filho.videos.length;c++){
        var videos = conta.filho.videos[c];
        for(var i=0;i<videos.lista.length;i++){
            var vd = videos.lista[i];
            html+='<li class="menu-item">'+
                    '<a href="#">'+
                        '<iframe width="320" height="240" '+
                            'src="//www.youtube.com/embed/'+jsGet(vd.link, 'v')+'" '+
                            'frameborder="0" allowfullscreen></iframe>'
                        '<span>'+videos.nome+'</span>'+
                    '</a>'+
                  '</li>';
        }
    }
    $('#videos>ul').html(html);
    /*MUSICAS*/
    html = '';
    for(var c=0;c<conta.filho.musicas.length;c++){
        var musicas = conta.filho.musicas[c];
        musicas.link;
        html+='<li class="menu-item">'+
                '<a href="#">'+
                    '<iframe width="320" height="240" '+
                        'src="//www.youtube.com/embed/videoseries?list='+jsGet(musicas.link, 'list')+'"'+
                        'frameborder="0" allowfullscreen></iframe>'+
                    '<span>'+musicas.nome+'</span>'+
                '</a>'+
              '</li>';
    }
    $('#musicas>ul').html(html);
    /*Sites*/
    html = '';
    for(var c=0;c<conta.filho.sites.length;c++){
        var sites = conta.filho.sites[c];
        html+='<li class="menu-item">'+
                '<a href="'+sites.dominio+'">'+
                    '<img width="32" height="32" src="http://www.google.com/s2/favicons?domain='+sites.dominio+'">'+
                    '<span>'+sites.nome+'</span>'+
                '</a>'+
              '</li>';
    }
    $('#internet>ul').html(html);
};

/*
 *
 */
var getInfosFilho = function(idFilho){
    var erros = 0;
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/getinfosfilho.php',
           {
               type:"POST",
               async:false,
               data:{
                   child:conta.filho.id
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.idPai = d.result.id;
                conta.filho.nome = d.result.nome;
                conta.filho.senha = d.result.senha;
                conta.filho.data_nasc = d.result.data_nasc;
                conta.filho.dias = d.result.dias;
            }else{
                console.log(data);
                erros++;
            }
        })
        .fail(function(error){
            console.log(error);
            erros++;
        });
}

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
               async:false,
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
                console.log(data);
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
               async:false,
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
                console.log(data);
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
               async:false,
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
                console.log(data);
                erros++;
            }
        })
        .fail(function(error){
            console.log(error);
            erros++;
        });
    
    $.ajax('https://www.educamix.com.br/kids/areadospais/php/site.php?act=get',
           {
               type:"POST",
               async:false,
               data:{
                   child:idFilho
               }
           }
        )
        .done(function(data){
            d = JSON.parse(data);
            if(d.error == 0){
                conta.filho.sites = d.result
            }else{
                console.log(data);
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

/*
 *
 */
var verificaHoras = function(){
    var dia = conta.filho.dias[(new Date).getDay()];//Pega o hoje
    if(dia.de !== undefined || dia.ate !== undefined){
        var agora = {
                hora : (new Date()).getHours(),
                minutos : (new Date()).getMinutes()
            },
            de = {
                hora : Math.floor(dia.de / 60),
                minutos : (dia.de % 60)
            },
            ate = {
                hora : Math.floor(dia.ate / 60),
                minutos : (dia.ate % 60)
            };
        if( ((de.hora * 60)+de.minutos) <= ((agora.hora * 60)+agora.minutos) ){
            
            if( ((ate.hora * 60)+ate.minutos) >= ((agora.hora * 60)+agora.minutos) ){
                Page.on = true;
                return true;
            }
        }
        Page.ToPage('#header');
        Page.on = false;
        return false;
    }else{
        return true; //Porque não foi definido limites no dia
    }
};

/*
 *
 */
var atualizar = function(){
    getInfosFilho(conta.filho.id);
    getInfos(conta.filho.id);
    
    verificaHoras();//Verifica a 1º vez,
    setInterval(verificaHoras, 900000);//verifica a cada 15 minutos
    
    if(conta.erro){
        //TODO: TENTAR PEGAR INFORMAÇÕES DO CACHE E HABILITAR O BOTÃO DE TENTAR NOVAMENTE
        if(localStorage.getItem('conta') !== null){
            Page.on = true;
            conta = localStorage.getItem('conta');
        }else{
            Page.on = false; // NÃO PODE HABILITAR O BOTÃO por não ter acesso ao servidor
        }
    }else{
        //Salva localmente
        localStorage.setItem('conta', JSON.stringify(conta));
    }
    
    atualizaInfos();
};



$(document).ready(function(){
    
    
    atualizar();
    
    /*
     *
     *
     */
    $('.close').on('click', function(){
        Page.change('#header');
    });
    
    
    $('#main>*').on('click', function(e){e.stopPropagation();});//Previne bugs
    
    $('#main').on('click', function(){
        if(Page.active!='#header'){
            Page.ToPage('#header');
        }
    });
    
    $('#m-jogos').on('click', function(){
        Page.ToPage('#jogos');
    });
    $('#m-videos').on('click', function(){
        Page.ToPage('#videos');
    });
    $('#m-musicas').on('click', function(){
        Page.ToPage('#musicas');
    });
    $('#m-internet').on('click', function(){
        Page.ToPage('#internet');
    });
    $('#m-mensagens').on('click', function(){
        Page.ToPage('#mensagens');
    });
    $('#m-config').on('click', function(){
        Page.change('#config');
    });
    $('#atualizar').on('click', atualizar);
    $('#sair').on('click', function(){
        var a = prompt('Digite a senha para sair');
        if(a == 'qwerty'){  //TODO FAZER A FUNÇÂO PARA VERIFICAR SE
            alert('ok');    //A SENHA ESTA CORRETA E TROCAR POR ISSO
        }else{
            alert('err');
        }
    });
});
