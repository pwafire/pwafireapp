const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const addUser = (userData, context) => {
    return db.collection('users').doc(userData.uid).set({
      email: userData.email,
      displayName: userData.displayName,
    }).catch(console.error);
  };
  
  module.exports = {
    authOnCreate: functions.auth.user().onCreate(addUser),
  };
