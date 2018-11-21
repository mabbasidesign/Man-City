import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCzl7kNfn-vuY6oONaYoDSrnVhp2XgxcIY",
    authDomain: "m-city-14405.firebaseapp.com",
    databaseURL: "https://m-city-14405.firebaseio.com",
    projectId: "m-city-14405",
    storageBucket: "m-city-14405.appspot.com",
    messagingSenderId: "1007936504096"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  
//   firebaseDB.ref('matches').once('value').then((snapshot) => {
//       console.log(snapshot.val());
//   })

const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}