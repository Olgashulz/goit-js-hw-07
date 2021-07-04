const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `16px`


inputEl.addEventListener('input', onInputChange);

function onInputChange() {    
    textEl.style.fontSize = `${inputEl.value}px`;    
};    
