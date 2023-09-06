const validate =({email, password})=>{
    let errors= {};
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexPassword = /^[^\s]+$/;


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