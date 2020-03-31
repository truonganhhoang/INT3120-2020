import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private fireAuth: AngularFireAuth) {}

  signInWithEmailAndPassword(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(console.log);
  }
}
