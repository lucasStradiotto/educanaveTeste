$(document).ready(function(){
    $('#inputCelular').mask('(00) 0 0000-0000');
    let planeta = 0;
    let prints = document.querySelectorAll('.prints');
    let screen = verifyScreenWidth();
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
    $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos planetas/titulo1.png');
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
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
        } else {
            planeta = 0;
            nextPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
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
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
        } else {
            planeta = 8;
            prevPlanet(planetClicked, planeta);
            prints.forEach((value, i) => {
                value.src = './assets/Prints Conteudo Educanave/'+planeta+'/'+i+'.png';
            });
            let screen = verifyScreenWidth();
            $('#tituloPlaneta').attr('src', './assets/'+screen+'/Titulos planetas/titulo'+planeta+'.png');
            $('#textoAmbiente').html(texto[planeta]);
        }
    });
});

function nextPlanet(planetClicked) {
    removeResize();
    let proximoPlaneta = planetClicked.nextElementSibling;
    if(proximoPlaneta){
        proximoPlaneta.classList.add('resize');
    } else {
        $('#planetDigital').addClass('resize');
    }
}

function prevPlanet(planetClicked) {
    removeResize();
    let anteriorPlaneta = planetClicked.previousElementSibling;
    if(anteriorPlaneta){
        anteriorPlaneta.classList.add('resize');
    } else {
        $('#planetEmocoes').addClass('resize');
    }
}

function removeResize() {
    $('.planetas').removeClass('resize');
}

function verifyScreenWidth() {
    let screenWidth = window.innerWidth;
        let pasta;
        switch (screenWidth) {
            case 2560:
                pasta = '4K';
                return pasta;
            case 1920:
                pasta = '1920';
                return pasta;
            case 1536:
                pasta = '1440';
                return pasta;
            case 1440:
                pasta = '1440';
                return pasta;
            case 1366:
                pasta = '1440';
                return pasta;
            case 768:
                pasta = 'Tablet';
                return pasta;
            case 425:
                pasta = 'Celular';
                return pasta;
            default:
                return 0;
        }
}

// const prints = document.querySelectorAll('.prints');
// const titulos1 = document.querySelector('.tituloPlanet1');
// const titulos2 = document.querySelector('.tituloPlanet2');
// const text1 = document.querySelector('.ambienteText1');
// const text2 = document.querySelector('.ambienteText2');
// const nextButton = document.querySelector('#setaDireita');
// const prevButton = document.querySelector('#setaEsquerda');
// const printsImgs = [0,1,2,3];
// let currentPlanetIndex = 1;

// function showPlanets() {
//     planets.forEach((planet, index) => {
//         if(index >= currentPlanetIndex - 2 && index <= currentPlanetIndex + 2) {
//             planet.classList.remove('planetsOffScreen');
//         } else {
//             planet.classList.add('planetsOffScreen');
//         }
//     });
//     titulos1.src = "./assets/1440/Titulos Planetas/titulo0.png";
//     titulos2.src = "./assets/1440/Titulos Planetas/titulo0.png";
    
//     text1.innerHTML = texto[0];
//     text2.innerHTML = texto[0];
// }

// function showPlanet(index, otherPlanetsIndex) {
//     planets.forEach((planet) => {
//       planet.classList.remove('active');
//     });
//     planets[index].classList.add('active');
//     planets[index].src = "./assets/CARROSEL_PLANETAS/gif" + index + ".gif";
//     planets[otherPlanetsIndex].src = "./assets/CARROSEL_PLANETAS/planeta" + otherPlanetsIndex + ".png";
//     printsImgs.forEach((print) => {
//         prints[print].src = "./assets/Prints Conteudo Educanave/" + index + "/" + print + ".png";
//     });
//     titulos1.src = "./assets/1440/Titulos Planetas/titulo" + index + ".png";
//     titulos2.src = "./assets/1440/Titulos Planetas/titulo" + index + ".png";
//     text1.innerHTML = texto[index];
//     text2.innerHTML = texto[index];
// }

// function goToNextPlanet() {
//     currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
//     let prevIndex = currentPlanetIndex - 1;
//     if(currentPlanetIndex === 0){
//         prevIndex = 8;
//     }
//     showPlanets();
//     showPlanet(currentPlanetIndex, prevIndex);
// }

// function goToPrevPlanet() {
//     currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
//     let nextIndex = currentPlanetIndex + 1;
//     if(currentPlanetIndex === 8) {
//         nextIndex = 0;
//     }
//     showPlanets();
//     showPlanet(currentPlanetIndex, nextIndex);
// }

// prevButton.addEventListener('click', () => {
//     goToPrevPlanet();
// });
  
// nextButton.addEventListener('click', () => {
//     goToNextPlanet();
// });

// showPlanets();