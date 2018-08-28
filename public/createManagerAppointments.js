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
                </table>
            </div>`;
            document.getElementById('information').innerHTML = appointmentsDiv;
            // Create the basic structure of the table
            createTableOutline();
            // Put the response into an object format
            var appointmentList = JSON.parse(this.responseText);
            // Fill the table cells where the time is already taken on the specific day
            for (var i = 0; i < appointmentList.length; i++) {
                fillCells(appointmentList[i]);
            }
        }
    };

    httpRequest.open("GET", '/manager-appointments-query', true);
    httpRequest.send();

    history.replaceState(null, `Manager Appointments`, `/Manager-Appointments`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Manager Appointments`;
    // Move the user to the top of the page
    window.location = "#page";
}

function createTableOutline() {
    document.getElementById('appointmentChart').innerHTML = `<tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
    </tr>
    <tr id="0">
        <td>9:00 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr id="1">
        <td>9:30 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>10:00 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>10:30 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>11:00 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>11:30 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>12:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>12:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>1:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>1:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>3:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>3:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>4:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr id="">
        <td>4:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;
}

// Create global variables
var availableTimes = new Array('900',
    '930',
    '1000',
    '1030',
    '1100',
    '1130',
    '1200',
    '1230',
    '1300',
    '1330',
    '1400',
    '1430',
    '1500',
    '1530',
    '1600',
    '1630');

/*
 * This function checks the day and time of the appointment. It then fills the corresponding 
 * time slot in the table.
 */
function fillCells(appointment) {
    var date = new Date(appointment.date);
    var time = appointment.time;
    var duration = appointment.duration;
    var desiredTd;
    // Locate the appointment's starting time
    desiredTd = availableTimes.indexOf(time) * 7 + date.getDay();
    // Fill the appointment's cell
    document.getElementsByTagName('td')[desiredTd].style = "background-color: deeppink;"
    // Fill sufficient cells for the appointment's duration
    if (duration > 30) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
    if (duration > 60) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
    if (duration > 90) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
}