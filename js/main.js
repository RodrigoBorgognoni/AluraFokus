const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const eternoBtn = document.querySelector(".app__card-button--eterno");

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
const timerEterno = 9999999999;

focoBtn.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    foto.setAttribute("src", "/imagens/foco.png")
});

curtoBtn.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    foto.setAttribute("src", "/imagens/descanso-curto.png")
});

longoBtn.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    foto.setAttribute("src", "/imagens/descanso-longo.png")
});

eternoBtn.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-eterno");
    foto.setAttribute("src", "/imagens/reaper.png")
});