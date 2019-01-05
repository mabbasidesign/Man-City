import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
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

//   firebaseDB.ref('matches').once('value').then((snapshot) => {
//       console.log(snapshot.val());
//   })

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}