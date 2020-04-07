import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  private instanceOfFirebaseError(error: any): error is firebase.FirebaseError {
    return 'code' in error;
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return new Observable((observer) => {
      this.ngFireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          observer.next(userCredentials.user.toJSON());
          observer.complete();
        })
        .catch((err) => {
          let message = '';
          if (this.instanceOfFirebaseError(err)) {
            message = err.message;
          } else {
            message = 'An error occurred. Please try again';
          }
          observer.error(message);
        });
    });
  }
}
