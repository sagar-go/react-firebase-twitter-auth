import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD80SxwHT8mPkdHH7tBfqhTqk9zzHLxTCI",
    authDomain: "webhook-5de83.firebaseapp.com",
    projectId: "webhook-5de83",
    storageBucket: "webhook-5de83.appspot.com",
    messagingSenderId: "228260902292",
    appId: "1:228260902292:web:896d2a192afaae3d18cb81"
  };

class Firebase{
    constructor() {
        this.app2 = app.initializeApp(firebaseConfig);
        this.token='';
        this.secret='';
    }

    signUserIn = async() => {
        const provider = new app.auth.TwitterAuthProvider();
        app.auth().signInWithPopup(provider)
        .then((user) => {
          console.log(user.credential.secret);
        console.log(user.credential.accessToken);
        })
}

}


export default Firebase;