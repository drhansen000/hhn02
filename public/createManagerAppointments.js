function createManagerAppointmentsPage() {
    var appointmentsDiv;
    appointmentsDiv = `ERROR`;
    // Query the DB for the appointments
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            appointmentsDiv = `<div id="appointments">
        <h1>Appointments</h1>
        <table id="appointmentChart" class="col-12">
            <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
        </table>
    </div>`;
            document.getElementById('information').innerHTML = appointmentsDiv;
        }
        console.log(this.responseText);
    };

    httpRequest.open("GET", '/manager-appointments-query', true);
    httpRequest.send();

    history.replaceState(null, `Manager Appointments`, `/Manager-Appointments`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Manager Appointments`;
    // Move the user to the top of the page
    window.location = "#page";
}