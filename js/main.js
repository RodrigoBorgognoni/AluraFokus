const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const eternoBtn = document.querySelector('.app__card-button--eterno');
const titulo = document.querySelector('.app__title');

//Botão de Iniciar e Pausar Timer;
const StartBtn = document.querySelector('.app__card-primary-button');
//O elemento HTML em que irá aparecer o temporizador;
let timer = document.querySelector('#app__card-timer');
//O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
let foto = document.querySelector('.app__image');
//O elemento HTML onde as frases de cada contexto irão trocar de posição.
let texto = document.querySelector('.app__title');

const timerFoco = 1500;
const timerCurto = 300;
const timerLongo = 900;
const timerEterno = 9999999999;

focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
});

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

eternoBtn.addEventListener('click', () => {
    alterarContexto('descanso-eterno');
});

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    foto.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br/>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br/>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície<br/>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        case 'descanso-eterno':
            titulo.innerHTML = `Lasciate ogni speranza voi ch'entrate!<br/>
            <strong class="app__title-strong">Memento Mori</strong>`;
            break;
        default:
            break;
    }
}