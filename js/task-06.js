const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', changeBorderColorInput);



function changeBorderColorInput(event) {
    const inputDatalength = Number(inputRef.getAttribute('data-length'));
    const currentDataLength = event.currentTarget.value.length;

    if (inputDatalength === currentDataLength) {
        inputRef.classList.add('valid');
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        }
    } else {
        inputRef.classList.add('invalid');
        if (inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid');
        }
    }
    if (currentDataLength === 0 && inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid');
    }
}