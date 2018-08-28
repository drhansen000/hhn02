function createManagerLoginPage() {
    var loginDiv;
    loginDiv = `<div id="login">
        <h1>Sign in to your account</h1>
        <div id="errorMessage" >Invalid Email or Password</div>
        <div class="col-12">Email address</div>
        <div class="col-12">
            <input id="emailInput" type="email" required />
        </div>
        <div class="col-12">Password</div>
        <div class="col-12">
            <input id="passwordInput" type="password" required />
        </div>
        <button onclick="login()">Sign In</button>
    </div>`;
    document.getElementById('information').innerHTML = loginDiv;
    history.replaceState(null, `Manager Login`, `/Manager`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Manager Login`;
    // Move the user to the top of the page
    window.location = "#page";
}

function login() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var queryStatus = JSON.parse(this.responseText);
            if (queryStatus.status === 'ok') {
                window.location.href = "/Manager-Appointments";
            } else {
                document.getElementById("errorMessage").style.display = "block";
            }
        }
    };

    httpRequest.open("POST", '/login-query', true);
    //this is required for post method only
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify({ email: email, password: password }));
}