function createContactPage() {
    // Insert contact information into information div (which is underneath the banner section)
    var informationDiv;
    informationDiv = `<div id="contactInformation">`;
    informationDiv += `<h1>Contact Information</h1>`;
    informationDiv += `<h2>Please feel free to call or email!</h2>`;
    informationDiv += `<p>Salon hours are:<br/>`;
    informationDiv += `Mon-Fri: 9am to 5pm<br/>`;
    informationDiv += `Sat: 9am to 12pm<br/>`;
    informationDiv += `Sun: Closed<br/></p>`;
    informationDiv += `<p>Phone: (208)969-0270<br/>`;
    informationDiv += `Email: dwkbeaver@gmail.com</p>`;
    informationDiv += `</div>`;

    document.getElementById('information').innerHTML = informationDiv;
    // Update the url
    history.replaceState(null, `Contact Us`, `/Contact`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Contact Us`;
    // Move the user to the top of the page
    window.location = "#page";
}