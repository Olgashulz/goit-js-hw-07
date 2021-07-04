let size = 30;
const boxContainer = document.querySelector('#boxes');
const inputEl = document.querySelector('[type="number"]');
const onCreateBtn = document.querySelector('[data-action="render"]');
const onDestroyBtn = document.querySelector('[data-action="destroy"]');

onCreateBtn.addEventListener('click', runCreateBoxes);
onDestroyBtn.addEventListener('click', destroyBoxes);
inputEl.addEventListener('input', () => {
    // console.log(inputEl.value);
    return inputEl.value;
})
 
function runCreateBoxes() {
    createBoxes(inputEl.value);
}

function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
        let color = (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(); 
        const boxEl = `<div class = "box" style="background-color: #${color}; width: ${size}px; margin: 10px; height:${size}px;"></div>`
        boxContainer.insertAdjacentHTML('beforeend', boxEl);
        size += 10;
    }
}

function destroyBoxes() {
    var element = document.getElementById('boxes');
    size = 30;
    inputEl.value = '';
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}














