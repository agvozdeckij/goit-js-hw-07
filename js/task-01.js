// const listRef = document.querySelector('#categories');
// console.log(`В списке ${listRef.children.length} категории`);

// const showElTitle = list => {
//     [...list].map(el => {
//         console.log(`Категория: ${el.querySelector('h2').textContent}`);
//         console.log(`Количество элементов:${el.querySelector('ul').children.length}`)
//     })

// };

// showElTitle(listRef.children)



const listRef = document.querySelector('#categories');
const items = document.querySelectorAll('.item')

console.log(`В списке ${listRef.children.length} категории`);

[...items].map(el => {
    console.log(`Категория:${el.querySelector('h2').textContent}`);
    console.log(`Количество элементов:${el.querySelector('ul').children.length}`);

})