window.addEventListener('load', function(){
    const formRegister = document.querySelector('form.form-register');

    /* REGISTER */

    formRegister.addEventListener('submit', function(event){

    let errors = [];
    let inputName = document.querySelector('#name');
    if (inputName.value == '') {
        errors.push('Nombre es un Campo obligatorio')
    } else if (inputName.value.length < 2) {
        errors.push('El campo Nombre debe tener al menos 2 caracteres')
    }


    let inputLastName = document.querySelector('#lastName');
    if(inputLastName.value == '') {
        errors.push('Apellido es un Campo obligatorio')
    } else if (inputLastName.value.length < 2) {
        errors.push('El campo Apellido debe tener al menos 2 caracteres')
    }

    let inputUser = document.querySelector('#user');
    if (inputUser.value == '') {
        errors.push('Usuario es un Campo obligatorio')
    } 

    let inputEmail = document.querySelector('#email');
    if (inputEmail.value == '') {
        errors.push('Email es un Campo obligatorio')
    } 

    let inputPassword = document.querySelector('#password');
    if (inputPassword.value == '') {
        errors.push('Contrasena es un Campo obligatorio')
    } else if (inputPassword.value.length < 2) {
        errors.push('El campo Contrasena debe tener al menos 8 caracteres')
    } else if (inputPassword.value.indexOf(number) == -1) {
        errors.push('El campo Contrasena debe tener al menos un número')
    }
    
    /*const inputAvatar = document.querySelector('#avatar');
    if (inputAvatar.value) */

    if(errors.length > 0){
        event.preventDefault();
        let ulErrors = document.querySelector('div.errors ul');
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += '<li>' + errors[i] + '<li>'
        }
    }

    })
})