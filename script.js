const html = document.querySelector('html');

const focusBt = document.querySelector('.app__card-button--focus');
const shortBt = document.querySelector('.app__card-button--short');
const longBt = document.querySelector('.app__card-button--long');
const banner = document.querySelector('.app__image');


focusBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'focus');
    banner.setAttribute('src' ,'./img/focus.png');
});

shortBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'short');
    banner.setAttribute('src' , './img/short-break.png');
});

longBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'long');
    banner.setAttribute('src' , './img/long-break.png');
});