const categories = document.querySelectorAll('.item');

const category = [...categories].map(el => {
    console.log('Категория:', el.firstElementChild.textContent);
    console.log('Количество элементов:', el.lastElementChild.querySelectorAll('li').length);
});