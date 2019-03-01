// Initialize Firebase
let config = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId"
  };

  firebase.initializeApp(config);
  let firestore = firebase.firestore();
  console.log("Cloud Firestore Loaded");

  var db = firebase.firestore();

  const timestamps = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true
  };
  firestore.settings(settings);

    // Enable offline capabilities
    firebase.firestore().enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a a time.

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

/*
    var docRef = db.collection('rate').doc('feedback');
    // Update the timestamp field with the value from the server
    var updateTimestamp = docRef.update({
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(updateTimestamp);
   
    */
    