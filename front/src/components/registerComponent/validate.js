const validate =({name, email, password})=>{
    let errors= {};
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexName = /([0-9])+/;
    let regexPassword = /^[^\s]+$/;

    if(!name.trim()) {
        errors.name= "Ingrese un nombre."
    } else if (name.length > 40 || name.length < 2) {
        errors.name= "Ingrese un nombre mayor a dos caracteres."
    } else if (regexName.test(name.trim())) {
        errors.name= "Ingrese un nombre válido."
    }

    if(!email.trim()) {
        errors.email= "Ingrese un email."
    } else if (regexEmail.test(email.trim())) {
        errors.email= "Ingrese un email válido."
    }

    if(!password.trim()) {
        errors.password= "Ingrese una contraseña."
    } else if (regexPassword.test(password.trim())) {
        errors.password= "Ingrese una contraseña válida."
    }

    return errors

 





}
export default validate;