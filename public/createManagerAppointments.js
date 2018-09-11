// Make global variables
var appointmentList;
var weekDates = new Array();
const tableTimes = createTableTimes();

function createManagerAppointmentsPage() {
    var appointmentsDiv;
    appointmentsDiv = `<div id="appointments">
            <h1>Appointments</h1>
            <button onclick="displayPreviousWeek()">Previous Week</button>
            <button onclick="displayNextWeek()">Next Week</button>
            <table id="appointmentChart" class="col-12">
            </table>
        </div>`;
    document.getElementById('information').innerHTML = appointmentsDiv;
    getWeekDates(new Date());
    // Create the basic structure of the table
    createTableOutline();
    getBookedAppointments();
    history.replaceState(null, `Manager Appointments`, `/Manager-Appointments`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Manager Appointments`;
    // Move the user to the top of the page
    window.location = "#page";
}

function getBookedAppointments() {
    // Query the DB for the appointments
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Put the response into an object format
            appointmentList = JSON.parse(this.responseText);
            // Fill the table cells where the time is already taken on the specific day
            for (var i = 0; i < appointmentList.length; i++) {
                if (appointmentList[i].info == '') {
                    appointmentList[i].info = 'None';
                }
                fillCells(appointmentList[i], i);
            }
        }
    };

    httpRequest.open("GET", `/manager-appointments-query?sunday=${weekDates[0]}`, true);
    httpRequest.send();
}

/*
 * This function gets the current date and then utlizes that date to fill
 * the array with the week's dates.
 */
function getWeekDates(date) {
    for (var i = 0; i < 7; i++) {
        if (i < date.getDay()) {
            weekDates[i] = new Date();
            weekDates[i].setDate(date.getDate() - (date.getDay() - i));
        } else if (i == date.getDay()) {
            weekDates[i] = date;
        } else if (i > date.getDay()) {
            weekDates[i] = new Date();
            weekDates[i].setDate(date.getDate() + (i - date.getDay()));
        }
    }
}

/*
 * This function creates the basic structure for the appointments booked table.
 */
function createTableOutline() {
    document.getElementById('appointmentChart').innerHTML = `<tr>
        <th>Time</th>
        <th>Monday<br>${weekDates[1].getMonth() + 1}/${weekDates[1].getDate()}/${weekDates[1].getFullYear()}</th>
        <th>Tuesday<br>${weekDates[2].getMonth() + 1}/${weekDates[2].getDate()}/${weekDates[2].getFullYear()}</th>
        <th>Wednesday<br>${weekDates[3].getMonth() + 1}/${weekDates[3].getDate()}/${weekDates[3].getFullYear()}</th>
        <th>Thursday<br>${weekDates[4].getMonth() + 1}/${weekDates[4].getDate()}/${weekDates[4].getFullYear()}</th>
        <th>Friday<br>${weekDates[5].getMonth() + 1}/${weekDates[5].getDate()}/${weekDates[5].getFullYear()}</th>
        <th>Saturday<br>${weekDates[6].getMonth() + 1}/${weekDates[6].getDate()}/${weekDates[6].getFullYear()}</th>
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
        <td style="border-bottom: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>12:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>1:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>1:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>2:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;">Closed</td>
    </tr>
    <tr>
        <td>2:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>3:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>3:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <td>4:00 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr id="">
        <td>4:30 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="border-top: none; background-color: darkgray;"></td>
    </tr>`;
}

function createTableTimes() {
    return new Array(900,
        930,
        1000,
        1030,
        1100,
        1130,
        1200,
        1230,
        1300,
        1330,
        1400,
        1430,
        1500,
        1530,
        1600,
        1630);
}

/*
 * This function checks the day and time of the appointment. It then fills the corresponding 
 * time slot in the table.
 */
function fillCells(appointment, i) {
    // Get the appointment's information
    const date     = new Date(appointment.date);
    const time     = appointment.time;
    const duration = appointment.duration;
    const service = appointment.service;
    // Get the table's information
    const daysInTable = 7;
    const rowDuration = 30;

    // Locate the appointment's starting time
    var desiredTd = tableTimes.indexOf(time) * daysInTable + date.getDay()
    // Fill the appointment's cell
    document.getElementsByTagName('td')[desiredTd].style = "background-color: deeppink;"
    // Insert the information into the correct cell
    document.getElementsByTagName('td')[desiredTd].innerHTML = `<a 
        href="javascript:displayAppointmentInformation(${i})">${service}</a>`;
    // Fill sufficient cells for the appointment's duration
    if (duration > rowDuration) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
    if (duration > rowDuration * 2) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
    if (duration > rowDuration * 3) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += 7;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
    }
}

/*
 * This function displays additional information about the appointment.
 */
function displayAppointmentInformation(i) {
    const appointmentInformation = `Name:   ${appointmentList[i].name}\n` +
        `Service: ${appointmentList[i].service}\n` +
        `Date:     ${formatDate(appointmentList[i].date)}\n` +
        `Time:     ${formatTime(appointmentList[i].time)}\n` +
        `Contact: ${appointmentList[i].contact}\n` +
        `Additional Information:\n` +
        `${appointmentList[i].info}`;
    alert(appointmentInformation);
}

function displayNextWeek() {
    weekDates[0].setDate(weekDates[0].getDate() + 7);
    getWeekDates(weekDates[0]);
    createTableOutline();
    getBookedAppointments();
}

function displayPreviousWeek() {
    weekDates[0].setDate(weekDates[0].getDate() - 7);
    getWeekDates(weekDates[0]);
    createTableOutline();
    getBookedAppointments();
}