import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private ngFireAuth: AngularFireAuth) {}

  currentUser(): Observable<firebase.User> {
    return this.ngFireAuth.user;
  }

  sendEmailVerification() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification();
  }

  updateEmail(newEmail: string) {
    return this.ngFireAuth.auth.currentUser.updateEmail(newEmail);
  }

  updatePassword(newPassword: string) {
    return this.ngFireAuth.auth.currentUser.updatePassword(newPassword);
  }
}
