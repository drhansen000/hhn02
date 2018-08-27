function createManagerProductsPage() {
    var productsDiv;
    productsDiv = `<div id="products">
            <h1>Products</h1>
    </div>`;
	document.getElementById('information').innerHTML = productsDiv;
	history.replaceState(null, `Manager Products`, `/Manager-Products`);
	// Update the title (the above method doesn't do it anymore)
	document.title = `Manager Products`;
	// Move the user to the top of the page
	window.location = "#page";
}