const html = document.querySelector('html');

const focusBt = document.querySelector('.app__card-button--focus');
const shortBt = document.querySelector('.app__card-button--short');
const longBt = document.querySelector('.app__card-button--long');

focusBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'focus');
});

shortBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'short');
});

longBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'long');
});