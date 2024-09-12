const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaInput = document.querySelector("#alternar-musica");

let musica = new Audio();
musica.loop = true;

/*
play(): inicia a reprodução do áudio;
pause(): pausa a reprodução do áudio;
currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.
*/

musicaInput.addEventListener("change", () => {
    if (musica.paused) {
        switch (focoBtn.classList[2] || curtoBtn.classList[2] || longoBtn.classList[2]) {
            case focoBtn.classList[2]:
                musica = new Audio("/sons/F_This_Job.mp3");
                break;
            case curtoBtn.classList[2]:
                musica = new Audio("/sons/For_Whom_the_Bell_Tolls.mp3");
                break;
            default:
                musica = new Audio("/sons/Senua_Chant.mp3");
                musica.currentTime = 40;
                musica.volume = 1;
                break;
        }
        musica.play();
    } else musica.pause();
});

//Botão de Iniciar e Pausar Timer;
const StartBtn = document.querySelector(".app__card-primary-button");
//O elemento HTML em que irá aparecer o temporizador;
let timer = document.querySelector("#app__card-timer");
//O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
let foto = document.querySelector(".app__image");
//O elemento HTML onde as frases de cada contexto irão trocar de posição.
let texto = document.querySelector(".app__title");

const timerFoco = 1500;
const timerCurto = 300;
const timerLongo = 900;
const timerEterno = 39960;

focoBtn.addEventListener("click", () => {
    alterarContexto("foco", "foco.png");
    focoBtn.classList.add("active");
});

curtoBtn.addEventListener("click", () => {
    alterarContexto("descanso-curto", "descanso-curto.png");
    curtoBtn.classList.add("active");
});

longoBtn.addEventListener("click", () => {
    alterarContexto("descanso-longo", "descanso-longo.png");
    longoBtn.classList.add("active");
});

eternoBtn.addEventListener("click", () => {
    alterarContexto("descanso-eterno", "descanso-eterno.png");
    eternoBtn.classList.add("active");
});

function alterarContexto(contexto, imagem) {
    html.setAttribute("data-contexto", contexto);
    foto.setAttribute("src", `/imagens/${imagem}`);

    botoes.forEach(function (contexto) {
        contexto.classList.remove("active");
    });

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br/>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br/>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície<br/>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        case "descanso-eterno":
            titulo.innerHTML = "";
            //titulo.innerHTML = `Lasciate ogni speranza voi ch'entrate!<br/>
            //<strong class="app__title-strong">Memento Mori</strong>`;
            break;
        default:
            break;
    }
}

function validarSons(sons) {
    document.querySelectorAll(".app__card-button");
}
