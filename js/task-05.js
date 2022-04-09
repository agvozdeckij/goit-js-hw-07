const refs = {
    input: document.querySelector('#name-input'),
    nameLable : document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputLabelChange)

function onInputLabelChange(event) {
    refs.nameLable.textContent = event.currentTarget.value
}