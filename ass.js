function darkmode() {

    if (document.getElementById('darkmode').style.backgroundColor == 'white') {
        document.getElementById('darkmode').style.backgroundColor = 'black';
        document.getElementById('darkmode').style.color = 'white';
        document.getElementById('btn').innerHTML('Light Mode');

    }

    else {
        document.getElementById('darkmode').style.backgroundColor = 'white';
        document.getElementById('darkmode').style.color = 'black';
        document.getElementById('btn').innerHTML('Dark Mode');
    }
}

function isEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.match(pattern)) {
        return true;
    }
    return false;
}

function FormValidation() {
    let errors = [];
    let sname = document.getElementById('sname').value;
    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let age = document.getElementById('age').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    let nationality = document.getElementById('nationality').value;
    let agetype = typeof age;
    let checkEmail = isEmail(email);

    if (sname == "") {
        let message = "Surname must not be empty";
        errors.push(message);
    }

    if (fname == "") {
        let message = "First Name must not be empty";
        errors.push(message);
    }

    if (email == "") {
        let message = "Email must not be empty";
        errors.push(message);
    }

    if (phonenumber == "") {
        let message = "Phone Number must not be empty";
        errors.push(message);
    }

    if (age < 18) {
        let message = "Age must not be less than 18";
        errors.push(message);
    }

    if (phonenumber.length > 15) {
        let message = "Phone Number must not be more than 15";
        errors.push(message);
    }
    if (nationality = "") {
        let message = "Nationality must not be empty";
        errors.push(message);
    }

    if (age == "") {
        let message = "Age must not be empty";
        errors.push(message);
    }
    if (password == "") {
        let message = "Password must not be empty";
        errors.push(message);
    }
    if (cpassword == "") {
        let message = "Field required";
        errors.push(message);
    }

    if (password != cpassword) {
        let message = "Password does not match";
        errors.push(message);
    }

    if (errors.length > 0) {
        alert(errors);
        return false;
    }
    return true;
}

var input = window.prompt("Enter your age");

if (input < 18) {
    window.close();
}

else {
    alert("Welcome");
}