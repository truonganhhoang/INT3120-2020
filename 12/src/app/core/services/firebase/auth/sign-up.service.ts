import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  signUpWithEmailAndPassword(email: string, password: string, fullName: string) {
    return new Observable((observer) => {
      this.ngFireAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          if (userCredentials) {
            observer.next(userCredentials.user);
          }
          return userCredentials.user;
        })
        .then((user) => {
          user.updateProfile({ displayName: fullName });
          user.sendEmailVerification();
        })
        .catch((err: firebase.FirebaseError) => {
          let message: string;
          switch (err?.code) {
            case 'auth/invalid-email':
              message = 'Invalid email.';
              break;
            case 'auth/invalid-password':
              message = 'Invalid password';
              break;
            case 'auth/email-already-in-use':
              message = 'A Coursera account with that email address already exists. Please login with your email.';
              break;
            default:
              message = 'An error occurred. Please try again.';
              break;
          }
          observer.error(message);
        });
    });
  }
}
