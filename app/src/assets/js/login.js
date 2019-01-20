
/* 
    if logged in 
*/

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      // Add the snackbar to show guide
      document.getElementById("snackbar").innerHTML = "Share an amazing trendy article : )";
      var snackbar = document.getElementById("snackbar");

      // Add the "show" class to div
      snackbar.className = "show";
      
      // After 5 seconds, remove the show class from div
      setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 5000);
      
      // Add user is logged in
      document.getElementById("auth_in").innerHTML = "Logged in : )";
      var auth_in = document.getElementById("auth_in");

      // Add the "show" class to div
      auth_in.className = "auth-in";
      // After 5 seconds, remove the auth-in class from div
      setTimeout(function(){ auth_in.className = auth_in.className.replace("auth_in", ""); });

    } else {
      // User is signed out.
      // ...
      console.log("You are signed out!");
    }
    // ...
  });
