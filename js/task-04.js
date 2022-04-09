const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');


btnDecrRef.addEventListener('click', function () {
    valueRef.innerText = --valueRef.innerText;

});


btnIncrRef.addEventListener('click', function () {
    valueRef.textContent = ++valueRef.textContent;

});