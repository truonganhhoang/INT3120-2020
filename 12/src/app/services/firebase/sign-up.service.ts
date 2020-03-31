import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  signUpWithEmailAndPassword(email: string, password: string, fullName: string) {
    return new Observable((observer) => {
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          if (user) {
            user.additionalUserInfo.username = fullName;
            observer.next(user);
            observer.complete();
          }
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
