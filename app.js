(function () {
  var config = {
    apiKey: "AIzaSyBWNELtSmonXVenGpeSL2qxl8Zt_gJtkXA",
    authDomain: "hyndiv-79a53.firebaseapp.com",
    databaseURL: "https://hyndiv-79a53.firebaseio.com",
    projectId: "hyndiv-79a53",
    storageBucket: "",
    messagingSenderId: "375008346472"
  };
  firebase.initializeApp(config);

  // Get elemens
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const divPassword = document.getElementById('divPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const btnResestPassword = document.getElementById('btnResestPassword');
  const btnSupport = document.getElementById('btnSupport');
  const btnBack = document.getElementById('btnBack');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => console.log("Code is: " + e.code));
  })

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO: CHECK FOR REAL EMAIL
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => console.log("Code is: " + e.code));
  });

  // Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  btnResestPassword.addEventListener('click', e => {

    console.log("Clicked reset password");
    //sendPasswordResetEmail()
    if(divPassword.classList.contains('hide')) {
      // Password Input Field is Hidden
      console.log("Password input is hidden");

      const email = txtEmail.value;
      if(email == null) {
        console.log("No email was specified");
        return;
      }

      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        console.log('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          console.log(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          console.log(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });

    } else {
      // Password Input Field is on the page
      console.log("Password input is shown, adding hide class");
      divPassword.classList.add('hide');
      btnLogin.classList.add('hide');
      btnSignUp.classList.add('hide');
      btnSupport.classList.add('hide');
      btnBack.classList.remove('hide');
    }

  });

  btnBack.addEventListener('click', e => {
    divPassword.classList.remove('hide');
    btnLogin.classList.remove('hide');
    btnSignUp.classList.remove('hide');
    btnSupport.classList.remove('hide');
    btnBack.classList.add('hide');
  });

  btnSupport.addEventListener('click', e => {
    console.log("No support for you");
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
      document.getElementById('auth').classList.add('hide');
      document.getElementById('home').classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
      document.getElementById('auth').classList.remove('hide');
      document.getElementById('home').classList.add('hide');
    }
  });

}());
