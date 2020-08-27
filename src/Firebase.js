import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDXjVnmh3Esxl0jm-J9E8Gdb_tuRaW1rXg",
  authDomain: "simple-3e46c.firebaseapp.com",
  databaseURL: "https://simple-3e46c.firebaseio.com",
  projectId: "simple-3e46c",
  storageBucket: "simple-3e46c.appspot.com",
  messagingSenderId: "735795837342",
  appId: "1:735795837342:web:db8cc69c12faee73313e8f",
  measurementId: "G-M7J3SWPB44",
};
export const initializeFirebase = () => firebase.initializeApp(config);

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("user token firebase: ", token);
    return token;
  } catch (error) {
    console.error(error);
  }
};
