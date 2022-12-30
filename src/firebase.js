import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAWiWziw3NrTCkpQqlFccd7qU2Cltfnm98",
	authDomain: "twitter-ec99c.firebaseapp.com",
	projectId: "twitter-ec99c",
	storageBucket: "twitter-ec99c.appspot.com",
	messagingSenderId: "266812276098",
	appId: "1:266812276098:web:89a2041e6fce3a0541a39b",
	measurementId: "G-TK1R3VEGCT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
