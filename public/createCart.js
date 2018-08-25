function createCartPage() {
    var cartDiv;
    cartDiv = `<div id="cart">
        <h1>Your Cart</h1>
        <div id="cartContent" class="col-12"></div>
    </div>`;
    document.getElementById('information').innerHTML = cartDiv;
    // Update the url
    history.replaceState(null, `Cart`, `/Cart`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Cart`;
    // Move the user to the top of the page
    window.location = "#page";
    // If the cart's empty, display the empty cart, else, display its contents
    if (!sessionStorage.getItem('cart')) {
        createEmptyCart();
    } else if (JSON.parse(sessionStorage.getItem('cart')).length > 0) {
        displayCartContents();
    } else {
        createEmptyCart();
    }
}

function createEmptyCart() {
    document.getElementById('cartContent').innerHTML = `You currently have no items in your cart!`;
}

function displayCartContents() {
    var cartContents;
    if (sessionStorage.getItem('cart') && JSON.parse(sessionStorage.getItem('cart')).length != 0) {
        var cartObject = JSON.parse(sessionStorage.getItem('cart'));
        var cartContent = '';
        var total = 0;
        var item = 0;
        cartContent += `<h5>Reserved products will be available for pickup within 3 business days</h5>`
        for (; item < cartObject.length; item++) {
            cartContent += `<div class='col-12 itemSection'>
            <div class="col-2"></div>
            <img src="${cartObject[item].picture}" class="col-1"/>
            <div class='nameList col-6'>${cartObject[item].name}<br />
                <a class='removeAnchor' onclick="removeFromCart('${item}')"> Remove Item</a><br />
            </div>
            <div class='priceList col-1'>$${cartObject[item].price}<br /></div>
        </div>`;
            total += JSON.parse(cartObject[item].price);
        }
        cartContent += `<form action="javascript:confirmPurchase()" method="post"">
                    <div class="col-2"></div>
                    <div class="col-4">
                        First Name:<br>
                        <input style="width: 150px;" id="firstName" type="text" 
                            name="firstName" placeholder="First Name" maxlength="20" required>
                    </div>
                    <div class="col-4">
                        Last Name:<br>
                        <input style="width: 150px;" id="lastName" type="text" 
                            name="lastName" placeholder="Last Name"  maxlength="20" required>
                    </div>
                </div>
                <div class="col-12">
                    Email/Phone (Optional):<br />
                    <input id="contact" type="text" name="contact" style="width: 400px" placeholder="Email/Password" maxlength="50">
                </div>
                <div class='nameList col-6'>Number of Item(s): ${item}</div>
                <div class='priceList col-6'> Total: $${total}</div >
                <div class='nameList col-6'>
                    <button class="bottomButton" onclick="createProductPage()">
                        Continue Browsing
                    </button>
                </div>
                <div class='priceList col-6'>
                        <button type="submit">Confirm Order</button>
                </form>`;
        document.getElementById("cartContent").innerHTML = cartContent;
    }
}

function removeFromCart(item) {
    var cartObject = JSON.parse(sessionStorage.getItem('cart'));
    cartObject.splice(item, 1);
    sessionStorage.setItem('cart', JSON.stringify(cartObject));
    createCartPage();
    updateCartIcon();
}

function confirmPurchase() {
    var cartObject = JSON.parse(sessionStorage.getItem('cart'));
    var contact = document.getElementById('contact').value;
    var name = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    // Send a request to the server for every item purchased
    for (var i = 0; i < cartObject.length; i++) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                var responseObj = JSON.parse(this.responseText);
                var responseMessage = '';
                responseMessage = '<h1>Thank you for shopping with us!</h1>';
                responseMessage += '<p> Your items will be available for pickup within 3 days.</p > ';
                document.getElementById('cart').innerHTML = responseMessage;
            }
        };
        httpRequest.open('POST', '/confirm-purchase-query', true);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(JSON.stringify({
            product: cartObject[i].name,
            price: cartObject[i].price,
            name: name,
            contact: contact
        }));
    }
    sessionStorage.clear();
    // Reset the cart icon
    updateCartIcon();
}