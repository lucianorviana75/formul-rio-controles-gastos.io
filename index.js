// campo email e password
function onChangeEmail() {
    emailErros();
    buttonsDisable();
}
function onChangePassword() {
    passwordErro();
    buttonsDisable();
}
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
    
}
//função criada expor mensagens de erros.
function emailErros() {
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";

    }
    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
        
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
    
}
function passwordErro() {
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById("password-required-erro").style.display = "block";
        
    } else {
        document.getElementById('password-required-erro').style.display = "none";
    }
        
    
    
}
function buttonsDisable() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !email || !passwordValid
    
}
//função criada para retorno se é falso ou verdadeiro para a validade da senha.
function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}