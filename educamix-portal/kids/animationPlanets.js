$(document).ready(function(){
    $('#inputCelular').mask('(00) 0 0000-0000');
    let planeta = 0;
    let prints = document.querySelectorAll('.prints');
    let screen = verifyScreenWidth();
    console.log(screen);
    const texto = [
        "Auxilia no processo de alfabetização e no reconhecimento das letras do alfabeto.",
        "Incentiva a compreensão e a valorização da identidade, o respeito às diferenças e o entendimento dos direitos e deveres das crianças.",
        "Colabora na percepção do corpo e de como ele permite o movimento, sendo essencial para o desenvolvimento físico e cognitivo das crianças.",
        "Ajuda na compreensão de conceitos como tempo e espaço, no reconhecimento e na compreensão de quantidades e noções básicas de adição e subtração.",
        "Permite o compartilhamento de ideias, encorajando as crianças a explorarem a imaginação e a criatividade por meio de atividades artísticas e literárias.",
        "Envolve o aprendizado sobre a importância do respeito pela natureza e pelas pessoas.",
        "Valoriza a prática de contar e ler histórias, para que as crianças possam se envolver com as narrativas e desenvolver habilidades de escuta e compreensão.",
        "Promove a compreensão da educação emocional, auxiliando as crianças a cultivarem relacionamentos saudáveis e a fortalecer a resiliência emocional.",
        "Possibilita que as crianças compreendam conceitos básicos de tecnologia, como a lógica de programação e a resolução de problemas simples por meio de atividades interativas."
    ];
    $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos Planetas/titulo0.png');
    $('#textoAmbiente').html(texto[0]);
    $('#setaDireita').on('click', function (){
        let planetClicked = document.querySelector('.resize');
        planeta++;
        if(planeta <= 8) {
            nextPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos Planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
        } else {
            planeta = 0;
            nextPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            if(screen != 0){
                $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos Planetas/titulo'+planeta+'.png');
                $('#textoAmbiente').html(texto[planeta]);
            }
        }
    });
    $('#setaEsquerda').on('click', function (){
        let planetClicked = document.querySelector('.resize');
        planeta--;
        if(planeta >= 0) {
            prevPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            console.log(screen);
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos Planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
        } else {
            planeta = 8;
            prevPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            if(screen != 0){
                $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos Planetas/titulo'+planeta+'.png');
                $('#textoAmbiente').html(texto[planeta]);
            }
        }
    });
});

function nextPlanet(planetClicked) {
    removeResize(planetClicked);
    $(planetClicked).attr('src', './assets/'+planetClicked.id+'.png');
    let proximoPlaneta = planetClicked.nextElementSibling;
    if(proximoPlaneta){
        $(proximoPlaneta).attr('src', './assets/CARROSEL_PLANETAS/'+proximoPlaneta.id+'.gif');
        proximoPlaneta.classList.add('resize');
    } else {
        $('#planetAbc').addClass('resize');
        $('#planetAbc').attr('src', './assets/CARROSEL_PLANETAS/planetAbc.gif');
    }
}

function prevPlanet(planetClicked) {
    removeResize(planetClicked);
    $(planetClicked).attr('src', './assets/'+planetClicked.id+'.png');
    let anteriorPlaneta = planetClicked.previousElementSibling;
    if(anteriorPlaneta){
        $(anteriorPlaneta).attr('src', './assets/CARROSEL_PLANETAS/'+anteriorPlaneta.id+'.gif');
        anteriorPlaneta.classList.add('resize');
    } else {
        $('#planetDigital').addClass('resize');
        $('#planetDigital').attr('src', './assets/CARROSEL_PLANETAS/planetDigital.gif');
    }
}

function removeResize(planetClicked) {
    $(planetClicked).removeClass('resize');
    $(planetClicked).addClass('downsize');
    setTimeout(() => {
        $(planetClicked).removeClass('downsize');
    }, 1000);
}

function verifyScreenWidth() {
    let screenWidth = document.documentElement.clientWidth;
    let pasta;

    console.log("screenWidth ",screenWidth);
    if(screenWidth > 1921 && screenWidth < 2561) {
        pasta = '4K';
        return pasta;
    } else if(screenWidth > 1535 && screenWidth < 1921) {
        pasta = '1920';
        return pasta;
    } else if(screenWidth > 769 && screenWidth < 1535) {
        pasta = '1440';
        return pasta;
    } else if(screenWidth > 426 && screenWidth < 769) {
        pasta = 'Tablet';
        return pasta;
    } else if(screenWidth > 392 && screenWidth < 426) {
        pasta = 'Celular';
        return pasta;
    }
}

// Detecta se está em modo retrato ou paisagem no momento
function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        console.log("Modo retrato (vertical)");
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        console.log("Modo paisagem (horizontal)");
    }
}

// Detecta mudanças de orientação em tempo real
window.matchMedia("(orientation: portrait)").addEventListener('change', function(e) {
    if (e.matches) {
        console.log("Mudou para modo retrato (vertical)");
    } else {
        console.log("Mudou para modo paisagem (horizontal)");
    }
});

// Chamada inicial para verificar a orientação
checkOrientation();