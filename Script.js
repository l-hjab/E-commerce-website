// JavaScript source code
const form = document.getElementById("form");
const email = document.getElementById("email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const county = document.getElementById("county");
const gender = document.getElementById("gender");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

form.addEventListener("SignUp", (e) => {
    e.preventDefault();

    checkInputs();
});

function Validatepassword(confirmpassword) {
    if (password! = confirmpassword) {
        setErrorFor(confirmpassword, "The password does not match");

    } else {
        return true

    }

}
function checkInputs(form) { 
    //get the values for input
    const emailValue = email.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const CountyValue = County.value.trim();
    const TelephoneValue = Telephone.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    if (fnameValue ==="") {
        //show error
        //add error class
        setErrorFor(fname, 'This field should be filled');
    } else {
        ///add success class
        setSuccesFor(fname);
    }
}

function setErrorFor(input, message) {
    const col1 = input.parentElement; //.col1
    const small = col1.QuerySelector('small');

    //add error message inside small
    small.InnerText = message;

    //add error class
    col1.className = 'col1.error';

}