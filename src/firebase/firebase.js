import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB40AKf7vG04OX-ICjNDi0SfQyYYxqz6Dk",
    authDomain: "elearning-hannibal.firebaseapp.com",
    databaseURL: "https://elearning-hannibal.firebaseio.com",
    projectId: "elearning-hannibal",
    storageBucket: "elearning-hannibal.appspot.com",
    messagingSenderId: "157791558052",
    appId: "1:157791558052:web:6f25b9254ae2c692440931"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'valeron'
  })

  export default firebase;