function validateFields() {
    //pegar o valor do campo de email
    const emaiValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emaiValid;
    const password = isEmailValid();
    document.getElementById('login-button').disabled = !emaiValid || !isPasswordValid;
    /*
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById('recover-password-button').disabled = true;
    } else if (validateEmail(email)) {
        document.getElementById('recover-password-button').disabled = false;
    } else {
        document.getElementById('recover-password-button').disabled = true;
    }
    */
    //verificar se o email não é vazio e o email é válido
    //se verdadeiro, então habilitar o botão de recuperar senha
    //se falso, então desabilitar o botão de recuperar senha
}
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}
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