/*
 * This function updates the number of items displayed in the cart. If the session
 * variable hasn't been created yet display '0 In Cart'. Otherwise, display the number of 
 * items in the cart.
 */ 
function updateCartIcon() {
    var cartIconString;
    if (!sessionStorage.getItem('cart')) {
        cartIconString = `0 In Cart`;
    } else if (JSON.parse(sessionStorage.getItem('cart')).length > 0) {
        cartIconString = `${JSON.parse(sessionStorage.getItem('cart')).length} In Cart`;
    } 
    document.getElementById('cartIcon').innerHTML = cartIconString;
    
}