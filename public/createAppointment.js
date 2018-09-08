// Create global variables
const tableTimes        = createTableTimes();
const closingTime       = 1700;
var weekDates           = new Array();
var appointmentOverlap  = false;
var appointmentDuration = 45;
var selectedTd;
var previousDuration;
var service;
var bookedAppointments;
var appointmentTime;
var appointmentDate;

/*
 * This function creates an array of all of the times listed in the table.
 */
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
 * This function creates the basic elements for the appointment page and calls other functions
 * to create the more complex parts, which is the table.
 */
function createAppointmentPage() {
    var appointmentDiv;
    appointmentDiv = `<div id="appointment"> 
            <h1>Create an Appointment</h1>
            <form action="javascript:submitAppointment()" onsubmit="return validateForm()" method="post">
                <select id="serviceSelector" onchange="updateServiceDescription()" required>
                    <option value="0">Men's cut</option>
                    <option value="1">Women's cut</option>
                    <option value="2">Child's cut</option>
                    <option value="3">Color</option>
                    <option value="4">Color retouch</option>
                    <option value="5">Deep condition and scalp massage</option>
                    <option value="6">Makeup</option>
                    <option value="7">Manicure</option>
                    <option value="8">Pedicure</option>
                    <option value="9">Acrylic</option>
                    <option value="10">Perm</option>
                    <option value="11">Special occasion makeup</option>
                    <option value="12">Facial</option>
                    <option value="13">Brow wax</option>
                    <option value="14">Upper lip wax</option>
                    <option value="15">Chin wax</option>
                </select>
                <div id="serviceDetails" class="col-12">
                    <input type="hidden" id="service" value="Men's cut" />
                    <input type="hidden" id="duration" value="45" />
                    <input type="hidden" id="cost" value="20" />
                    <div class="col-2"></div>
                    <div class="col-4"><u>Service Name</u><br />Men's cut</span></div>
                    <div class="col-2"><u>Duration</u><br />45</span> minutes</div>
                    <div class="col-1"><u>Cost</u><br />$20</span></div>
                </div>
                <div class="col-12">
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
                <div class="col-12">
                    Additional Information for Service Provider (Optional):<br />
                    <textarea id="info" rows="4" cols="50" maxlength="250" placeholder="Additional Information"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit">Confirm Appointment</button>
                </div>
            </form>
            <h1>Appointments</h1>
            <button onclick="displayPreviousWeek()">Previous Week</button>
            <button onclick="displayNextWeek()">Next Week</button>
                <table id="appointmentChart" class="col-12">
                </table>
            </div>`;
    document.getElementById('information').innerHTML = appointmentDiv;
    const today = new Date();
    getWeekDates(today);
    createTableOutline();
    getBookedAppointments();

    // Update the url
    history.replaceState(null, `Reserve Appointment`, `/Appointment`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Reserve Appointment`;
    // Move the user to the top of the page
    window.location = "#page";
}

/*
 * This function gets the current date and then utlizes that date to fill
 * the array with the week's dates.
 */
function getWeekDates(date) {
    for (var i = 0; i < 7; i++) {
        if (i < date.getDay()) {
            date.setDate(date.getDate() - (date.getDay() - i));
            weekDates[i] = new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
        } else if (i == date.getDay()) {
            weekDates[i] = new Date(date);
        } else if (i > date.getDay()) {
            date.setDate(date.getDate() + (i - date.getDay()));
            weekDates[i] = new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
        }
    }
}

/*
 * This function creates the basic structure for the appointments selection table.
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
        <th>9:00 am</th>
        <td><a onclick="updateAppointment(900, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(900, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(900, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(900, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(900, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(900, 6)">&nbsp;</a></td>
    </tr>
    <tr id="1">
        <th>9:30 am</th>
        <td><a onclick="updateAppointment(930, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(930, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(930, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(930, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(930, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(930, 6)">&nbsp;</a></td>
    </tr>
    <tr>
        <th>10:00 am</th>
        <td><a onclick="updateAppointment(1000, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1000, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1000, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1000, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1000, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1000, 6)">&nbsp;</a></td>
    </tr>
    <tr>
        <th>10:30 am</th>
        <td><a onclick="updateAppointment(1030, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1030, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1030, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1030, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1030, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1030, 6)">&nbsp;</a></td>
    </tr>
    <tr>
        <th>11:00 am</th>
        <td><a onclick="updateAppointment(1100, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1100, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1100, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1100, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1100, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1100, 6)">&nbsp;</a></td>
    </tr>
    <tr>
        <th>11:30 am</th>
        <td><a onclick="updateAppointment(1130, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1130, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1130, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1130, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1130, 5)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1130, 6)">&nbsp;</a></td>
    </tr>
    <tr>
        <th>12:00 pm</th>
        <td><a onclick="updateAppointment(1200, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1200, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1200, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1200, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1200, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; background-color: darkgray;"><span></span></td>
    </tr>
    <tr>
        <th>12:30 pm</th>
        <td><a onclick="updateAppointment(1230, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1230, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1230, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1230, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1230, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>1:00 pm</th>
        <td><a onclick="updateAppointment(1300, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1300, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1300, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1300, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1300, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>1:30 pm</th>
        <td><a onclick="updateAppointment(1330, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1330, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1330, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1330, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1330, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>2:00 pm</th>
        <td><a onclick="updateAppointment(1400, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1400, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1400, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1400, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1400, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; text-align: center; background-color: darkgray;">Closed</td>
    </tr>
    <tr>
        <th>2:30 pm</th>
        <td><a onclick="updateAppointment(1430, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1430, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1430, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1430, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1430, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>3:00 pm</th>
        <td><a onclick="updateAppointment(1500, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1500, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1500, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1500, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1500, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>3:30 pm</th>
        <td><a onclick="updateAppointment(1530, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1530, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1530, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1530, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1530, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr>
        <th>4:00 pm</th>
        <td><a onclick="updateAppointment(1600, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1600, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1600, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1600, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1600, 5)">&nbsp;</a></td>
        <td style="border-bottom: none; border-top: none; background-color: darkgray;"></td>
    </tr>
    <tr id="">
        <th>4:30 pm</th>
        <td><a onclick="updateAppointment(1630, 1)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1630, 2)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1630, 3)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1630, 4)">&nbsp;</a></td>
        <td><a onclick="updateAppointment(1630, 5)">&nbsp;</a></td>
        <td style="border-top: none; background-color: darkgray;"></td>
    </tr>`;
}

/*
 * This function sends a query to the DB for the booked appointments' date, time, 
 * and duration.
 */
function getBookedAppointments() {
    // Query the DB for the appointments
    const httpRequest = new XMLHttpRequest();
    var date;
    var month;
    if (weekDates[0].getDate() < 10) {
        date = "0" + weekDates[0].getDate();
    } else {
        date = weekDates[0].getDate();
    }
    if (weekDates[0].getMonth() + 1 < 10) {
        month = "0" + (weekDates[0].getMonth() + 1);
    } else {
        month = weekDates[0].getMonth() + 1;
    }
    const weekStartDate = `${weekDates[0].getFullYear()}/${month}/${date}`;
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Put the response into an object format
            bookedAppointments = JSON.parse(this.responseText);
            // Fill the table cells where the time is already taken on the specific day
            for (var i = 0; i < bookedAppointments.length; i++) {
                fillCells(bookedAppointments[i]);
            }
        }
    };

    httpRequest.open("GET", `/client-appointment-query?sunday=${weekDates[0]}`, true);
    httpRequest.send();
}

/*
 * This function checks the day and time of the appointment. It then fills the corresponding 
 * time slot in the table.
 */
function fillCells(appointment) {
    // Get the appointment's information
    const date = new Date(appointment.date);
    const time = appointment.time;
    const duration = appointment.duration;
    // Get the table's information
    const daysInRow = 6;
    const rowDuration = 30;
    const indexOffset = 1;

    // Locate the appointment's starting time
    var desiredTd = tableTimes.indexOf(time) * daysInRow + date.getDay() - indexOffset;
    // Fill the appointment's cell
    document.getElementsByTagName('td')[desiredTd].style = "background-color: deeppink;"
    // Insert the information into the correct cell
    document.getElementsByTagName('td')[desiredTd].innerHTML = `Booked`;
    // Fill sufficient cells for the appointment's duration
    if (duration > rowDuration) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; background-color: deeppink";
        desiredTd += daysInRow;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
        document.getElementsByTagName('td')[desiredTd].innerHTML = ``;
    }
    if (duration > rowDuration * 2) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += daysInRow;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
        document.getElementsByTagName('td')[desiredTd].innerHTML = ``;
    }
    if (duration > rowDuration * 3) {
        document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: deeppink";
        desiredTd += daysInRow;
        document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: deeppink";
        document.getElementsByTagName('td')[desiredTd].innerHTML = ``;
    }
}

/*
 * This function dynamically changes the service information displayed based on the 
 * service selected from the drop-down.
 */ 
function updateServiceDescription() {
    const serviceId = document.getElementById('serviceSelector').value;
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var serviceObj = JSON.parse(this.responseText);
            var serviceInformation = `<input type="hidden" id="service" value="${serviceObj.Service}" />
                                         <input type="hidden" id="duration" value="${serviceObj.Duration}" />
                                         <input type="hidden" id="cost" value="${serviceObj.Cost}" />
                                         <div class="col-2"></div>
                                         <div class="col-4"><u>Service Name</u><br />${serviceObj.Service}</div>
                                         <div class="col-2"><u>Duration</u><br />${serviceObj.Duration} minutes</div>
                                         <div class="col-1"><u>Cost</u><br />$${serviceObj.Cost}</div>`;
            document.getElementById("serviceDetails").innerHTML = serviceInformation;
            appointmentDuration = serviceObj.Duration;
            updateAppointment(appointmentTime, appointmentDate.getDay());
        }
    };

    httpRequest.open("GET", `/services-query?serviceId=${serviceId}`, true);
    httpRequest.send();
}

function displayNextWeek() {
    weekDates[0].setDate(weekDates[0].getDate() + 7);
    getWeekDates(weekDates[0]);
    createTableOutline();
    getBookedAppointments();
    // Reset the necessary table variables
    appointmentOverlap = false;
    appointmentDate = null;
    appointmentTime = null;
    selectedTd = null;
}

function displayPreviousWeek() {
    weekDates[0].setDate(weekDates[0].getDate() - 7);
    getWeekDates(weekDates[0]);
    createTableOutline();
    getBookedAppointments();
    // Reset the necessary table variables
    appointmentOverlap = false;
    appointmentDate = null;
    appointmentTime = null;
    selectedTd = null;
}

function updateAppointment(time, day) {
    if (appointmentTime && appointmentDate) {
        resetPreviousSelection();
    }
    appointmentDate = weekDates[day];
    appointmentTime = time;
    previousDuration = appointmentDuration;
    previousTime = appointmentTime;
    if (time % 100 == 0) {
        selectedTd = (time / 100 - 9) * 12 + day - 1;
    } else {
        selectedTd = (((time - 30) / 100 - 9) * 12) + 6 + day - 1;
    }
    displayPossibleAppointment();
}

function resetPreviousSelection() {
    // Get the table's information
    const daysInRow = 6;
    const rowDuration = 30;
    // Locate the appointment's starting time
    var desiredTd = selectedTd;
    // Fill the appointment's cell
    document.getElementsByTagName('td')[desiredTd].style = "background-color: light-gray;";
    // Fill sufficient cells for the appointment's duration
    if (previousDuration > rowDuration &&
        appointmentTime + convertTimeToDecimal(rowDuration * 2) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>")
        {
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black; background-color: light-gray";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black; background-color: light-gray";
        }
    }
    if (previousDuration > rowDuration * 2 &&
        appointmentTime + convertTimeToDecimal(rowDuration * 3) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>")
        {
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black; background-color: light-gray";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black;background-color: light-gray";
        }
    }
    if (previousDuration > rowDuration * 3 &&
        appointmentTime + convertTimeToDecimal(rowDuration * 4) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>")
        {
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black; background-color: light-gray";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border: groove; border-color: black; background-color: light-gray";
        }
    }
}

function displayPossibleAppointment() {
    appointmentOverlap = false;
    // Get the table's information
    const daysInRow = 6;
    const rowDuration = 30;
    // Locate the appointment's starting time
    var desiredTd = selectedTd;
    // Fill the appointment's cell
    document.getElementsByTagName('td')[desiredTd].style = "background-color: lime;";
    // Fill sufficient cells for the appointment's duration
    if (appointmentDuration > rowDuration &&
        appointmentTime + convertTimeToDecimal(rowDuration * 2) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>") {
            document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; background-color: lime";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: lime";
        } else {
            appointmentOverlap = true;
        }
    } 
    if (appointmentDuration > rowDuration * 2 &&
        appointmentTime + convertTimeToDecimal(rowDuration * 3) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>") {
            document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: lime";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: lime";
        } else {
            appointmentOverlap = true;
        }
    } 
    if (appointmentDuration > rowDuration * 3 &&
        appointmentTime + convertTimeToDecimal(rowDuration * 4) <= closingTime)
    {
        if (document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "Booked" &&
            document.getElementsByTagName('td')[desiredTd + daysInRow].innerHTML != "<span></span>") {
            document.getElementsByTagName('td')[desiredTd].style = "border-bottom: none; border-top: none; background-color: lime";
            desiredTd += daysInRow;
            document.getElementsByTagName('td')[desiredTd].style = "border-top: none; background-color: lime";
        } else {
            appointmentOverlap = true;
        }
    } 
}

/*
 * This function checks if the date selected is on a Sunday or in the past. If so,
 * it will return false, or else it will return true.
 */ 
function validateForm() {
    if (appointmentDate && appointmentTime) {
        if (appointmentDate <= new Date()) {
            alert("Please provide atleast 24 hours notice before scheduling an appointment.");
            return false;
        } else if (appointmentTime + convertTimeToDecimal(appointmentDuration) > closingTime) {
            alert("The appointment time you selected will go past closing time. Please select an earlier time.");
            return false;
        } else if (appointmentOverlap) {
            alert("The appointment you selected will overlap into an appointment that is already booked.\nPlease select another time.");
            return false;
        } else {
            return true;
        }
    } else {
        alert("Please select a time and date from the table below.");
        return false;
    }
}

/*
 * This function should only fire after validateForm() returns true. It takes all of the user's input and sends a 
 * request to be added to the DB. It the request was successful, it will update the innerHTML to the confirmation
 * page.
 */ 
function submitAppointment() {
    const httpRequest = new XMLHttpRequest();
    service = document.getElementById('service').value;
    const duration = document.getElementById('duration').value;
    const cost = document.getElementById('cost').value;
    const info = document.getElementById('info').value;
    const contact = document.getElementById('contact').value;
    const name = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    // Change the innerHTML to a confirmation page once the request has successfully been sent and the response received
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            createAppointmentConfirmationPage();
        }
    }

    httpRequest.open('POST', '/create-appointment-query', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify({
        service: service,
        cost: cost,
        duration: duration,
        date: `${appointmentDate.getFullYear()}/${appointmentDate.getMonth() + 1}/${appointmentDate.getDate()}`,
        time: appointmentTime,
        info: info,
        name: name,
        contact: contact
    }));

}

/*
 * This function turns time, which is Sexagesimal, with a range of 30 to 120 to the Decimal system.
 */
function convertTimeToDecimal(duration) {
    switch (duration) {
        case 60:
            return 100;
            break;
        case 90:
            return 130;
            break;
        case 120:
            return 200;
            break;
        default:
            return duration;
            break;
    }
}