const html = document.querySelector('html');
const focusBt = document.querySelector('.app__card-button--focus');
const shortBt = document.querySelector('.app__card-button--short');
const longBt = document.querySelector('.app__card-button--long');
const cardBt = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const musicFocusInput = document.querySelector('#alternate-music');
const music = new Audio('./sounds/luna-rise-part-one.mp3');
music.loop = true;

musicFocusInput.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

focusBt.addEventListener('click', () => {
    changeContext('focus');
    focusBt.classList.add('active');
});

shortBt.addEventListener('click', () => {
    changeContext('short-break');
    shortBt.classList.add('active');
});

longBt.addEventListener('click', () => {
    changeContext('long-break');
    longBt.classList.add('active');
});

function changeContext(context) {
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
