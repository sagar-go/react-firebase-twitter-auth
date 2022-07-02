import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
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