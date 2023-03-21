// JavaScript source code
var removeCartItemButtons = document.getElementsByClassName('btn')
console.log(removeCartItemButtons)
for (var i = 0; removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function () {
        console.log('Daphy')
    })

}