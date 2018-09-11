const firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyABF4DX0oZ7JgfgFLMJLbpWpC62vjvP7qA",
    authDomain: "hhnsalon.firebaseapp.com",
    databaseURL: "https://HHNSalon.firebaseio.com",
    projectId: "HHNSalon",
    storageBucket: "hhnsalon.appspot.com",
};
var app = firebase.initializeApp(config);

var db = app.database();


module.exports = {
    db
};