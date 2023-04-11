let arr = [];

if (sessionStorage.arr != null) {
    arr = JSON.parse(sessionStorage.arr);
}

let Name;
let Password;
let Email;
let number;

let input = document.getElementById("input");

input.addEventListener("submit", function (event) {
    event.preventDefault();

    Name = event.target.fullname.value;
    Password = event.target.password.value;
    Email = event.target.email.value;
    number = event.target.phonenumber.value;

    if (validateName() && validatePassword() && validateEmail() && validateNumber()) {
        arr.push(Name);
        sessionStorage.setItem('arr', JSON.stringify(arr));
        input.reset();
    }

});

function validateName() {
    Name = Name.toLowerCase();
    if (Name == "") {
        alert("Name must be filled out");
        return false;

    } else if (Name.includes(" ")) {
        alert("Name must be filled with no spaces");
        return false;
    } else if (arr.includes(Name)) {

        alert("Username already exists. welcome " + Name);
        return false;
    }

    return true;

}


function validatePassword() {
    let password = Password;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character");
        return false;
    }
    return true;
}


function validateEmail() {
    if (!/\S+@\S+\.\S+/.test(Email)) // search for at least non-whitespace characters
    {
        alert("E-mail must be in a valid format such as example@gmail.com");
        return false;
    }
    return true;

}


// Validate phone number to be " 10 digits starts with 07 "
function validateNumber() {
    if (!/^07[0-9]{8}$/.test(number)) {
        alert("Phone number must be 10 digits starting with 07");
        return false;
    }
    return true;
}








