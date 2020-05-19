import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  signOut() {
    return new Observable<any>((observer) => {
      this.ngFireAuth.auth
        .signOut()
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
