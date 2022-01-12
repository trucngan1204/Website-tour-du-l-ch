import firebase from "firebase";
import "firebase/storage"
const config = {
    apiKey: "AIzaSyCWMGEKks2xhW-NUq7SpgN8jcvqAMNHpIE",
    authDomain: "my-tour-project-81b6e.firebaseapp.com",
    projectId: "my-tour-project-81b6e",
    storageBucket: "my-tour-project-81b6e.appspot.com",
    messagingSenderId: "470548202352",
    appId: "1:470548202352:web:9e5baf837e305e9e0f05b5",
    measurementId: "G-YXE5FG754Z"
};

firebase.initializeApp(config)

const storage = firebase.storage()
export { storage, firebase as default }