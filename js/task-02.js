const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');


const products = ingredients.map(product => {
  const itemEl = document.createElement('li');
  itemEl.textContent = product;
  return itemEl;
});

ingredientsList.append(...products);
