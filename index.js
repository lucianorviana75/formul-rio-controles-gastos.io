// campo email
function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !email || !passwordValid
}
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
    
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