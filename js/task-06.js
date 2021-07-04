const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlur);
inputEl.addEventListener('focus', onFocus);

const datasetLength = parseInt(inputEl.dataset.length);

function onFocus(event) {
    inputEl.classList.remove('invalid') || inputEl.classList.remove('valid');
}

function onBlur(event) {    
    return event.currentTarget.value.length === +inputEl.dataset.length ?
         inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}


