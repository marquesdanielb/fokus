//Context
const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

//Card buttons
const focusBt = document.querySelector('.app__card-button--focus');
const shortBt = document.querySelector('.app__card-button--short');
const longBt = document.querySelector('.app__card-button--long');
const cardBt = document.querySelectorAll('.app__card-button');
const timer = document.querySelector('#timer');

//Start and Pause buttons
const startPauseBt = document.querySelector('#start-pause');
const startPauseSpan = document.querySelector('#start-pause span');
const startPauseImg = document.querySelector('.app__card-primary-butto-icon');

//Audio 
const musicFocusInput = document.querySelector('#alternate-music');
const music = new Audio('./sounds/luna-rise-part-one.mp3');
const soundPlay = new Audio('./sounds/play.wav');
const soundPause = new Audio('./sounds/pause.mp3');
const soundBeep = new Audio('./sounds/beep.mp3');

let elapsedTimeSeconds = 1500;
let intervalId = null;

music.loop = true;
musicFocusInput.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

focusBt.addEventListener('click', () => {
    elapsedTimeSeconds = 1500;
    changeContext('focus');
    focusBt.classList.add('active');
});

shortBt.addEventListener('click', () => {
    elapsedTimeSeconds = 300;
    changeContext('short-break');
    shortBt.classList.add('active');
});

longBt.addEventListener('click', () => {
    elapsedTimeSeconds = 900;
    changeContext('long-break');
    longBt.classList.add('active');
});

function changeContext(context) {
    showTimer();
    cardBt.forEach(function (context) {
        context.classList.remove('active');
    })

    html.setAttribute('data-context', context);
    banner.setAttribute('src', `./img/${context}.png`);
    
    switch (context) {
        case "focus":
            title.innerHTML = `
            Optimize your productivity,<br>
                <strong class="app__title-strong">by diving into what matters.</strong>
            `;

            break;
        case "short-break":
            title.innerHTML = `
            At any time any player may elect to sit out.<br>
                <strong class="app__title-strong">take a short break.</strong>
            `;
            
            break;
        case "long-break":
            title.innerHTML = `
            Take it easy and<br>
                <strong class="app__title-strong">take a long break.</strong>
            `;
            break;
        default:
            break;
    }
}

const countdown = () => {
    if (elapsedTimeSeconds <= 0) {
        soundBeep.play();
        alert('Tempo finalizado!');
        reset();
        return;
    }
    elapsedTimeSeconds -= 1;
    showTimer();
};

startPauseBt.addEventListener('click', startOrPause);

function startOrPause() {
    if (intervalId) {
        startPauseImg.setAttribute('src', './img/play_arrow.png');
        soundPause.play();
        reset();
        return;
    }
    startPauseImg.setAttribute('src', './img/pause.png');
    soundPlay.play();
    intervalId = setInterval(countdown, 1000);
    startPauseSpan.textContent = "Pause";
}

function reset() {
    clearInterval(intervalId);
    startPauseSpan.textContent = "Start";
    intervalId = null;
}

function showTimer() {
    const time = new Date(elapsedTimeSeconds * 1000);
    const formattedTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = `${formattedTime}`;
}

showTimer();