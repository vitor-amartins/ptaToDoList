const firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDaYyOHb9HseEKX6bNt3AGSnk9htf_ji8c",
    authDomain: "pta-to-do-list.firebaseapp.com",
    databaseURL: "https://pta-to-do-list.firebaseio.com",
    projectId: "pta-to-do-list",
    storageBucket: "",
    messagingSenderId: "790865204763",
    appId: "1:790865204763:web:e9533b0a82941762"
});

module.exports = firebase.database();