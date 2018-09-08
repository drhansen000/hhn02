const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');
var app = express();
var db = require('./db');

const PORT = process.env.PORT || 3000;

// Make it so that I don't have to configure for every html page. Anything within the Public folder is visible
app.use(express.static(__dirname + '/public'));
// This allows me to read elements within the request. I use it before sending the request.
app.use(bodyParser.json());
// This allows the program to read html pages
app.engine('html', require('ejs').renderFile);

/*
 * Any one of these extensions should bring the user to the HH&N html page.
 */ 
app.get(['/', '/About', '/Contact', '/Appointment', '/Product-List', '/Cart'], (req, res) => {
    res.render('HH&N.html');
});

/*
 * Create a seperate page for the manager.
 */
app.get(['/Manager', '/Manager-Appointments', '/Manager-Products'], (req, res) => {
    res.render('manager.html');
});

// Formatting and information for other functions
/*
 * This function returns the current date in a YYYY-MM-DD format.
 */ 
var getCurrentDate = () => {
    var currentDate;
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate(); //it was a day ahead for some reason
    var year = dateObj.getUTCFullYear();
    //if (day < 10) {
    //    day = `0${day}`;
    //}
    //if (month < 10) {
    //    month = `0${month}`;
    //}
    return (currentDate = year + "/" + month + "/" + day);
}

// View information from DB

/*
 * This function gets a service description, depending on the id provided.
 */
app.get('/services-query', (req, res) => {
    console.log(req.query.serviceId);
    var serviceRef = db.db.ref(`/Service/${req.query.serviceId}`);
    serviceRef.once('value', (snapshot) => {
        res.status(200).send(snapshot);
    }).catch((e) => {
        console.log(e);
    });
});

/*
 * This function should get all of the future appointments' dates and times from the DB and 
 * send it back to the client in a JSON format.
 */
app.get('/client-appointment-query', (req, res) => {
    var futureAppRef = db.db.ref(`/clientAppointments`);
    futureAppRef.once('value', (snapshot) => {
        var filteredFutureApp = new Array();
        // Create the range for desired appointment dates
        const weekStartDate = new Date(req.query.sunday);
        var weekEndDate = new Date(req.query.sunday);
        weekEndDate.setDate(weekEndDate.getDate() + 6);
        var appointmentDate;
        snapshot.forEach((childSnapshot) => {
            appointmentDate = new Date(childSnapshot.val().date);
            console.log("Appointment Date: " + appointmentDate);
            if (appointmentDate >= weekStartDate && appointmentDate <= weekEndDate) {
                filteredFutureApp.push(childSnapshot);
                console.log("It was pushed");
            }
        });
        res.status(200).json(filteredFutureApp);
    }).catch((e) => {
        console.log(`Query Error Message: ${e}`);
    });
});

/*
 * This query should get all of the future appointments and their information and 
 * send it back to the client in a JSON format.
 */
app.get('/manager-appointments-query', (req, res) => {
    var futureAppRef = db.db.ref(`/managerAppointments`).orderByChild('date');
    futureAppRef.once('value', (snapshot) => {
        var filteredFutureApp = new Array();
        var numberOfAppointments = 0;
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().date >= getCurrentDate()) {
                filteredFutureApp.push(childSnapshot);
            }
        });
        res.status(200).json(filteredFutureApp);
    }).catch((e) => {
        console.log(`Query Error Message: ${e}`);
    });
});

app.get('/manager-products-query', (req, res) => {

});

// Submit information to DB

/*
 * This function creates an appointment by adding the information that the client selected to the Firebase DB.
 * It inserts all of the information into the manager's appointments and only the appointment time, date, and 
 * duration into the clients' apppointments.
 */
app.post('/create-appointment-query', (req, res) => {
    db.db.ref(`/managerAppointments`).push({
        date: req.body.date,
        info: req.body.info,
        service: req.body.service,
        duration: req.body.duration,
        cost: req.body.cost,
        time: req.body.time,
        name: req.body.name,
        contact: req.body.contact
    });
    db.db.ref(`/clientAppointments`).push({
        date: req.body.date,
        duration: req.body.duration,
        time: req.body.time
    });
    res.status(200).send({ status: 'ok' });
});

app.post('/confirm-purchase-query', (req, res) => {
    db.db.ref(`/reservedProducts`).push({
        Product: req.body.product,
        Price: req.body.price,
        Name: req.body.name,
        Contact: req.body.contact,
        Date: getCurrentDate()
    });
    res.status(200).send({ status: 'ok' });
});

/*
 * This function logs the user into the DB, giving him/her certain privilages.
 */
app.post('/login-query', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(() => {
            res.status(200).send({ status: 'ok' });
        })
        .catch((error) => {
            res.send({ status: 'invalid' });
        });
});

/*
 * This function logs the user out of the DB, providing more security.
 */
app.get('/logout-query', (req, res) => {
    firebase.auth().signOut().then(function () {
        res.render('login.hbs');
    }, function (error) {
        console.log(error.message);
    });
});



// Update information in DB

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});