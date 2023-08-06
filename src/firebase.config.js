import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYbD0rZtDB_D50IXGWspHXOFHRiStGubs",
  authDomain: "ekidos.firebaseapp.com",
  databaseURL: "https://ekidos-default-rtdb.firebaseio.com",
  projectId: "ekidos",
  storageBucket: "ekidos.appspot.com",
  messagingSenderId: "37292180865",
  appId: "1:37292180865:web:264e539305c34ee5d79480",
  measurementId: "G-E0ZR4W84P6",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
