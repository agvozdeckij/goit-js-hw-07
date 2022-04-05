const listRef = document.querySelector('#categories');
console.log(`В списке ${listRef.children.length} категории`);

const showElTitle = list => {
    [...list].map(el => {
        console.log(`Категория: ${el.querySelector('h2').textContent}`);
        console.log(`Количество элементов:${el.querySelector('ul').children.length}`)
    })

};

showElTitle(listRef.children)