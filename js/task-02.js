const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const listIngredients = document.querySelector('#ingredients');


// const createListItem = list => {
//    return list.map(el => {
//         const addEl = document.createElement('li');
//         addEl.textContent = el;
//         return addEl;
//     })

// }
// const fnCreateListItem = createListItem(ingredients)
// listIngredients.append(...fnCreateListItem)

const listRef = document.querySelector('#ingredients');

const fnCreateListItem = createListItem(ingredients)
function createListItem(arr) {
 return arr.map(el => {
    const addLiEl = document.createElement('li');
    addLiEl.textContent = el;
    return addLiEl
  })
}

listRef.append(...fnCreateListItem)