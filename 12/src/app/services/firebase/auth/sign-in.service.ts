import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  signInWithEmailAndPassword(email: string, password: string) {
    return new Observable((observer) => {
      this.ngFireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then((value) => {
          observer.next(value);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
