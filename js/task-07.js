const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')
inputRef.addEventListener('input', changeInputTextSize);

function changeInputTextSize(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px'

}