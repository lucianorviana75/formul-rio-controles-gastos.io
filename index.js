// campo email
function validateFields() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("recover-password-button").disabled = true;
    }
    else if (validateEmail(email)) {
        document.getElementById("recover-password-button").disabled = false;
    }
    else {
        document.getElementById("recover-password-button").disabled = true;
    }

        
    
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