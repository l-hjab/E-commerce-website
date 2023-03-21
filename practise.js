// JavaScript source code
function verifypassword() {
    var pw = document.getElementById('password').value;
    //check if password is empty
    if (pw == "") {
        document.getElementById("message").innerHTML = "Fill the password please!";
        return false;
    }

    //minimum password length validation
    if (pw.length < 8) {
        document.getElementById("message").innerHTML 
    }
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "password length must not exceed 15 characters!";
        return false;
    }
    else {
        alert("password is correct");
    }

}
