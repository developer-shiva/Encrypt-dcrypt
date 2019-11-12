firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("welcome").style.display="block";
      document.getElementById("login-div").style.display="none";
    } else {
      // No user is signed in.
      document.getElementById("welcome").style.display="none";
      document.getElementById("login-div").style.display="block";
    }
  });



function login(){
    var mail= document.getElementById("mail_field").value;
    var pass= document.getElementById("pass_field").value;
}

