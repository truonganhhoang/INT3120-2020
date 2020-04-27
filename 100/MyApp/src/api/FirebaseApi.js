import { auth } from "firebase";

export function  SignOut(){
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}
export function NoSingIn(){
    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
        });
}
