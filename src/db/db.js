  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfdc07q_DAThS_iCPCo2im7VegFgVJQaA",
    authDomain: "canvas-playground.firebaseapp.com",
    databaseURL: "https://canvas-playground.firebaseio.com",
    projectId: "canvas-playground",
    storageBucket: "",
    messagingSenderId: "637371143901",
    appId: "1:637371143901:web:c1ddfbe0621c2f4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;