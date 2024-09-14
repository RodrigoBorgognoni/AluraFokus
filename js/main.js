const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaInput = document.querySelector("#alternar-musica");
const startBtn = document.getElementById("start-pause");

let musica = new Audio();
musica.loop = true;

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioFim = new Audio('./sons/beep.mp3')

let tempoDecorrido = 10;
let intervalo = null;

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
        default:
            break;
    }
}


startBtn.addEventListener("click", iniciarPausar);

const contagemRegressiva = () => {
    if (tempoDecorrido <= 0) {
        audioFim.volume = 0.5;
        audioFim.currentTime = 3;
        audioFim.play();
        zerar();
        console.log(`Temporizador: ${tempoDecorrido}`);
        return;
    }
    console.log(`Temporizador: ${tempoDecorrido}`);
    tempoDecorrido -= 1;
};

function iniciarPausar() {
    if (intervalo) {
        zerar();
        audioPausa.volume = 1;
        audioPausa.play();
        return;
    }
    audioPlay.play();
    intervalo = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervalo);
    intervalo = null;
}
