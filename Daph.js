//Shopping cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
 //Delete Items From Cart
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName("shop-item-button")
    for (var i = 0; i < addToCartButtons; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }
}

//delete function
function removeCartItem(event) {
    var buttonClicked = event.target
         buttonClicked.parentElement.parentElement.remove()
         updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value=1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target

}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('Ksh', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(price * quantity)
    }
    total = Math.round(total*100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Ksh' +  total
}

var addToCartButtons = document.getElementsByClassName('btn')
console.log(addToCartButtons)
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    var button = event.target
    shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imgSrc = shopItem.getElementsByClassName('item-image')[0].src
    console.log(title, price, imgSrc)

    addItemToCart(title, price, imgSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imgSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-itemtitle')

    alert('Succesfully added to Cart' );

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already been added,just add the quantity")
            return
        }
    }
    var cartRowContents = `
      <div class="cart-column1">
               <img class="item-image" src="${imgSrc}" width="100" height="100" alt="DAPHY" />
                 <span class="cart-itemtitle">${title}</span>

                </div>
                <span class="cart-item-price">${price}</span>
                <div class="cart-column2">
                    <input class="cart-quantity" type="number" value="1" />
                    <button class="btn-remove" id="btn" type="button">Empty-cart</button>
                </div>
`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

//popup
document.getElementById('close-button').addEventListener('click', function () {
    document.querySelector('.popup-shopping-cart').style.display = 'none';
})

document.getElementById('popup-cart').addEventListener('click', function () {
    document.querySelector('.popup-shopping-cart').style.display = 'block';
})