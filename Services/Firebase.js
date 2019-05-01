import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCbcbyCO77Fplksny8Sm8yNq6qcsoJWIxk",
    authDomain: "confapp-15042.firebaseapp.com",
    databaseURL: "https://confapp-15042.firebaseio.com",
    projectId: "confapp-15042",
    storageBucket: "confapp-15042.appspot.com",
};

//ensure that no more than one firebase is instantiated
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default db;