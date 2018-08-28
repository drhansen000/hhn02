function createAppointmentConfirmationPage() {
    var appointmentConfirmationDiv;
    appointmentConfirmationDiv = `<div id="appointmentConfirmation">
    <h1>See you soon!</h1>
    <p>Thank you for creating an appointment with us.<br>
    See you on <b>${formatDate(appointmentDate)}</b> at <b>${formatTime(appointmentTime)}</b><br>
    for your <b>${service}</b>!</p>
</div>`;
    document.getElementById('information').innerHTML = appointmentConfirmationDiv;
    // Update the title (the above method doesn't do it anymore)
    document.title = `Appointment Confirmation`;
    // Move the user to the top of the page
    window.location = "#page";
}