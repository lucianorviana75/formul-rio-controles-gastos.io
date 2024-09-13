// campo email
function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;
}
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
    
}
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}