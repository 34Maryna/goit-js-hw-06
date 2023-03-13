const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.createElement('li');
listEl.classList.add('item');
listEl.textContent = ingredients;

console.log(listEl);

document.body.appendChild(listEl);

