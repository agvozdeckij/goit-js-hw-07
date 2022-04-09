const inputRef = document.querySelector('#controls').firstElementChild;
console.log(inputRef);
const btnRenderRef = document.querySelector('[ data-action="render"]');
console.log(btnRenderRef);
const btnDestroyRef = document.querySelector('[ data-action="destroy"]');
console.log(btnDestroyRef);
const boxesRef = document.querySelector('#boxes');
console.log(boxesRef);

let amount = 0;

function onInputNumberValueChange(event) {
    amount = event.currentTarget.value;
    return amount;
}
inputRef.addEventListener('input', onInputNumberValueChange);

    
btnRenderRef.addEventListener('click', () => {
    for (let i = 1, boxSize = 30; i <= amount; i += 1, boxSize += 10){
       boxesRef.insertAdjacentHTML("beforeend",`<div style= "width: ${boxSize}px; height: ${boxSize}px;  background-color: rgb(${Math.floor(
        Math.random() * 255,
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255,
      )}); margin: 5px"></div>`,)
    }
})

btnDestroyRef.addEventListener('click', () => {
    boxesRef.innerHTML = '';
})