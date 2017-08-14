import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBmqnozIr5Hl-zSKGmxtrR-nXfswHjiBMc",
    authDomain: "youtubetutorial-a5e25.firebaseapp.com",
    databaseURL: "https://youtubetutorial-a5e25.firebaseio.com",
    projectId: "youtubetutorial-a5e25",
    storageBucket: "youtubetutorial-a5e25.appspot.com",
    messagingSenderId: "506275237288"
  };
  firebase.initializeApp(config);

  export default firebase;
