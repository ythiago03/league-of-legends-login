const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

const handleFocusOut = ({ target}) => {
    const span = target.previousElementSibling;
    if(target.value == ''){
        span.classList.remove('span-active')
    }
}

const handlechange = () => {
    const [username, password] = inputs;
    const button = document.querySelector('.form-conect__btn')
    const erroOrValid = document.querySelector('#error')
    if(username.value && password.value.length >= 8 ){
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handlechange));