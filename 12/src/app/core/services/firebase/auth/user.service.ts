import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private ngFireAuth: AngularFireAuth, private signInService: SignInService) {}

  currentUser(): Observable<firebase.User> {
    return this.ngFireAuth.user;
  }

  sendEmailVerification() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification();
  }

  signInMethods() {
    const email = this.ngFireAuth.auth.currentUser.email;
    return this.ngFireAuth.auth.fetchSignInMethodsForEmail(email);
  }

  /**
   *
   * For user who use facebook provider only
   */
  async setPassword(newPassword: string) {
    await this.signInService.signInWithFacebook().toPromise();
    this.ngFireAuth.auth.currentUser.updatePassword(newPassword);
  }

  /**
   *
   * For user who use email and password
   */
  async updatePassword(currentPassword: string, newPassword: string) {
    const email = this.ngFireAuth.auth.currentUser.email;
    const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
    await this.ngFireAuth.auth.currentUser.reauthenticateWithCredential(credential);
    await this.ngFireAuth.auth.currentUser.updatePassword(newPassword);
  }
}
