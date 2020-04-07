import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  sendPasswordResetEmail(email: string): Observable<void> {
    return new Observable((observer) => {
      this.ngFireAuth.auth
        .sendPasswordResetEmail(email)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
