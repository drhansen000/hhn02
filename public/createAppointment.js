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
                        Date:<br />
                        <input style="width: 150px;" 
                                id="appointmentDate" type="date" name="date" 
                                onchange="updateNormalHours()" required>
                    </div>
                    <div class="col-4">
                        Time:<br />
                        <select id="appointmentTime" name="time" required>
                            <option value="900">9:00 am</option>
                            <option value="930">9:30 am</option>
                            <option value="1000">10:00 am</option>
                            <option value="1030">10:30 am</option>
                            <option value="1100">11:00 am</option>
                            <option value="1130">11:30 am</option>
                            <option value="1200">12:00 pm</option>
                            <option value="1230">12:30 pm</option>
                            <option value="1300">1:00 pm</option>
                            <option value="1330">1:30 pm</option>
                            <option value="1400">2:00 pm</option>
                            <option value="1430">2:30 pm</option>
                            <option value="1500">3:00 pm</option>
                            <option value="1530">3:30 pm</option>
                            <option value="1600">4:00 pm</option>
                            <option value="1630">4:30 pm</option>
                        </select>
                    </div>
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
            </div>`;
    document.getElementById('information').innerHTML = appointmentDiv;
    // Update the url
    history.replaceState(null, `Reserve Appointment`, `/Appointment`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Reserve Appointment`;
    // Move the user to the top of the page
    window.location = "#page";
}

// Create global variables
const saturdayAvailabilities = createSaturdayAvailabilities();
const weekdayAvailabilities = createWeekdayAvailabilities();
var service;
var appointmentDate;
var appointmentTime;

/*
 * Create an array of the normal hours of operation on Saturday.
 */
function createSaturdayAvailabilities() {
    return new Array(
        "9:00 am",
        "9:30 am",
        "10:00 am",
        "10:30 am",
        "11:00 am",
        "11:30 am"
    );
}

/*
 * Create an array of the normal hours of operation on weekdays.
 */
function createWeekdayAvailabilities() {
    return new Array(
        "9:00 am",
        "9:30 am",
        "10:00 am",
        "10:30 am",
        "11:00 am",
        "11:30 am",
        "12:00 pm",
        "12:30 pm",
        "1:00 pm",
        "1:30 pm",
        "2:00 pm",
        "2:30 pm",
        "3:00 pm",
        "3:30 pm",
        "4:00 pm",
        "4:30 pm"
    );
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
        }
    };

    httpRequest.open("GET", `/services-query?serviceId=${serviceId}`, true);
    httpRequest.send();
}

/*
 * This function updates the available timeslots based on the selected 
 * day's normal hours of operation.
 */ 
function updateNormalHours() {
    // Create the variables that will be used during the function
    const appointmentDate = new Date(document.getElementById("appointmentDate").value);
    var dayAvailabilities;
    var timeValue = 900;
    // Change the timeslot options depending on the day selected
    switch (appointmentDate.getDay()) {
        case 6:
            dayAvailabilities = `<option>Closed</option>`;
            break;
        case 5:
            for (var i = 0; i < saturdayAvailabilities.length; i++) {
                dayAvailabilities += `<option value="${timeValue}">
                                    ${saturdayAvailabilities[i]}</option>`;
                timeValue = incrementTime(timeValue, i);
            }
            break;
        default:
            for (var i = 0; i < weekdayAvailabilities.length; i++) {
                dayAvailabilities += `<option value="${timeValue}">
                                    ${weekdayAvailabilities[i]}</option>`;
                timeValue = incrementTime(timeValue, i);
            }
            break;
    };
    // Insert the options into the page
    document.getElementById('appointmentTime').innerHTML = dayAvailabilities;
};

/*
 * This function checks if the date selected is on a Sunday or in the past. If so,
 * it will return false, or else it will return true.
 */ 
function validateForm() {
    var appointmentDate = new Date(document.getElementById("appointmentDate").value);
    var today = new Date();
    today.setDate(today.getDate() - 1);

    if (appointmentDate.getDay() == 6) {
        alert("We're not open on Sunday!");
        return false;
    } else if (appointmentDate < today) {
        alert("Can't schedule an appointment for the past!");
        return false;
    } else {
        return true;
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
    const date = new Date(document.getElementById('appointmentDate').value);
    appointmentDate = document.getElementById('appointmentDate').value;
    appointmentTime = document.getElementById('appointmentTime').value;
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
        date: appointmentDate,
        time: appointmentTime,
        info: info,
        name: name,
        contact: contact}));
}

/*
 * This function will check if the index is even or odd. If it's even, it'll add 30 to the time value.
 * If it's odd, it'll add 70 to make it an even hundred.
 */
function incrementTime(timeValue, index) {
    if (index % 2 == 0) {
        return timeValue += 30;
    } else {
        return timeValue += 70;
    }
}