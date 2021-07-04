const onDecrBtn = document.querySelector('button[data-action="decrement"]');
const onIncrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let value = +valueEl.textContent;

onDecrBtn.addEventListener('click', () => {
    --value;
    return valueEl.textContent = value;
    
});

onIncrBtn.addEventListener('click', () => {
    ++value;
    return valueEl.textContent = value;
});
