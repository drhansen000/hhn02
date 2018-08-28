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
    var day = dateObj.getUTCDate() - 1; //it was a day ahead for some reason
    var year = dateObj.getUTCFullYear();
    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }
    return (currentDate = year + "-" + month + "-" + day);
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

// Submit information to DB

/*
 * This function creates an appointment by adding the information that the client selected to the Firebase DB.
 */
app.post('/create-appointment-query', (req, res) => {
    var appRef = db.db.ref(`/Appointment`).push({
        date: req.body.date,
        info: req.body.info,
        service: req.body.service,
        duration: req.body.duration,
        cost: req.body.cost,
        time: req.body.time,
        name: req.body.name,
        contact: req.body.contact
    });
    res.status(200).send({ status: 'ok' });
});

app.post('/confirm-purchase-query', (req, res) => {
    var purchaseRef = db.db.ref(`/Reserved-Products`).push({
        Product: req.body.product,
        Price: req.body.price,
        Name: req.body.name,
        Contact: req.body.contact,
        Date: getCurrentDate()
    });
    res.status(200).send({ status: 'ok' });
});

app.post('/login-query', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(() => {
            res.status(200).send({ status: 'ok' });
        })
        .catch((error) => {
            res.send({ status: 'invalid' });
        });
});

app.get('/logout-query', (req, res) => {
    firebase.auth().signOut().then(function () {
        res.render('login.hbs');
    }, function (error) {
        console.log(error.message);
    });
});

app.get('/manager-appointments-query', (req, res) => {
    var futureAppRef = db.db.ref(`/Appointment`).orderByChild('date');
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

// Update information in DB

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});