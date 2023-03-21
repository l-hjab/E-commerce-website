// JavaScript source code
window.Onscroll = function () { myFunction() };

//header
var header = document.getElementsByClassName('header-head');
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}