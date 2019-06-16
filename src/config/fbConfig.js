import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBVjOBH--WHkYZtOGzCgSfddvkNiTTS-CE",
  authDomain: "my-planner-9266d.firebaseapp.com",
  databaseURL: "https://my-planner-9266d.firebaseio.com",
  projectId: "my-planner-9266d",
  storageBucket: "my-planner-9266d.appspot.com",
  messagingSenderId: "671404049097",
  appId: "1:671404049097:web:76ff28d1dd5914c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;