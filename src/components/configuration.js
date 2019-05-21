import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBpGOTjxg3ICkwhd87z76y_LUaISTO8Rqk",
    authDomain: "hello-b74ce.firebaseapp.com",
    databaseURL: "https://hello-b74ce.firebaseio.com",
    projectId: "hello-b74ce",
    storageBucket: "hello-b74ce.appspot.com",
    messagingSenderId: "936404029165",
    appId: "1:936404029165:web:d9b48877e5cd1df7"
};

firebase.initializeApp (config);
export default firebase;