const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientItem = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientItem.appendChild(li);
});

ingredientsList.appendChild(ingredientItem);