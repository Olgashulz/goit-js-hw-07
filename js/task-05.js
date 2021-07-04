const inputEl = document.querySelector('#name-input');
const valueName = document.querySelector('#name-output')

inputEl.addEventListener('input', (event) => {
       return event.currentTarget.value.length > 0 ?
        valueName.textContent = event.currentTarget.value :
        valueName.textContent = 'незнакомец';
    })

inputEl.addEventListener('blur', (event) => {
    return event.currentTarget.value = "";
});



