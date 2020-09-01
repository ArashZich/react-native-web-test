import firebase from "firebase";

const config = {
  /////
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
