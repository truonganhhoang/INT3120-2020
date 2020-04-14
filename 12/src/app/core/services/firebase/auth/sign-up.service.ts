import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  private instanceOfFirebaseError(error: any): error is firebase.FirebaseError {
    return 'code' in error;
  }

  signUpWithEmailAndPassword(email: string, password: string, fullName: string) {
    return new Observable<firebase.User>((observer) => {
      this.ngFireAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          if (userCredentials) {
            observer.next(userCredentials.user);
          }
          return userCredentials.user;
        })
        .then((user) => {
          return user.updateProfile({ displayName: fullName });
        })
        .then(() => {
          observer.complete();
        })
        .catch((err) => {
          let message: string;
          if (this.instanceOfFirebaseError(err)) {
            message = err.message;
          } else {
            message = 'An error occurred. Please try again.';
          }
          observer.error(message);
        });
    });
  }
}
