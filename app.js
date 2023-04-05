let arr = [];

if (sessionStorage.arr != null) {
    arr = JSON.parse(sessionStorage.arr);
}



let input = document.getElementById("input")
input.addEventListener("submit", function (event) {
    event.preventDefault()


    let Name = event.target.fullname.value
    let Phonenumber = event.target.phonenumber.value
    let Email = event.target.email.value
    let Password = event.target.password.value



    if (validateName() && validatePhonenumber() && validateEmail && validatePassword()) {
        return arr.push(Name);
        sessionStorage.setItem("arr", JSON.stringify(arr))
    }
    else { return false }


});


validateName()
{
    let username = Name.tolowercase()
    if (username == "" || username.includes(" ")) {
        alert("the username must be filled as well ");
        return false
    }


    else if (arr.includes(username)) {
        alert(" the name is exists");
        return false
    }

    else { return true }

}



validatePassword(){

    let password = Password
    let spchar = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
    let passwordregx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordregx.test(password)) {
        alert
            ("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character")
    }
    return false
}

function validateEmail() {
    let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
    let Email = userEmail.toLowerCase();
    if (!Email.includes("@") || !Email.includes(".com")) {
        alert("Please enter a valid Email EX.. majdi@gamil.com");
        return false;
    }
    for (let i = 0; i < Email.length; i++) {
        if (iChars.indexOf(Email.charAt(i)) != -1) {
            alert("The Email has special characters. \nThese are not allowed.\n");
            return false;
        }
    }
    return true;
}
function validateNumber() {
    let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
    let Number = Phonenumber;

    if (!(Number.includes("07")) || !(Number.length == 10)) {
        alert("Please enter a valid number ex. 0799855850");
        return false;
    }

    for (let i = 0; i < Number.length; i++) {
        if (iChars.indexOf(Number.charAt(i)) != -1) {
            alert("The Number has special characters. \nThese are not allowed.\n");
            return false;
        }
    }
    return true;
}








