var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^([A-Za-z])*\s{1}([A-Za-z])*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email required";
        return false;
    }
    // if(!email.match(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+(.[a-z]+)$/)){
    //     emailError.innerHTML = "Invalid email";
    //     return false;
    // }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById("password").value;

    if(password.length == 0){
        passwordError.innerHTML = "Fill the password";
        return false;
    }
    if(password.length < 8){
        passwordError.innerHTML = "must have 8 characters";
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
        passwordError.innerHTML = "Invalid Password";
        return false;
    }
    passwordError.innerHTML = "Valid password";
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword()){
        submitError.innerHTML = "Fix errors to submit";
        return false;
    }
}
