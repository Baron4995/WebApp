let date = new Date();
let tdate = date.getDate();
let month = date.getMonth() + 1;
let year = date.getUTCFullYear();

if(tdate < 10){
    tdate = "0" + tdate;
}
if(month < 10){
    month = "0" + month;
}

let minDate = year + "-" + month + "-" + tdate;
let maxDate = year + "-" + 12 + "-" + 31
// let maxDate = new Date(new Date().getFullYear(), 11, 31);

document.getElementById("date").setAttribute("min", minDate);
document.getElementById("date").setAttribute("max", maxDate);

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error")

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
    nameError.innerHTML = "";
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
    emailError.innerHTML = "";
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phoneError.innerHTML = "";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Invalid phone number";
        return false;
    }

    if(phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Valid phone number";
        return true;
    }
}
