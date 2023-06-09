const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add = 'item';
  listItem.textContent = ingredient;
  return listItem;
});

ingredientsEl.append( ...ingredientsArray);

