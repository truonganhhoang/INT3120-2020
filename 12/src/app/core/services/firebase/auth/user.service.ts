import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private ngFireAuth: AngularFireAuth,
    private ngFireFunctions: AngularFireFunctions,
    private ngFireStorage: AngularFireStorage,
    private signInService: SignInService
  ) {}

  currentUser(): Observable<firebase.User> {
    return this.ngFireAuth.user;
  }

  /**
   * @description
   * write user data to firestore
   */
  updateUserData() {
    const currentUser = this.ngFireAuth.auth.currentUser;
    const jsonUser = JSON.parse(JSON.stringify(currentUser));
    return this.ngFireFunctions.httpsCallable('updateUserData')({
      displayName: jsonUser.displayName,
      email: jsonUser.email,
      phoneNumber: jsonUser.phoneNumber,
      photoURL: jsonUser.photoURL,
      uid: jsonUser.uid,
      createdAt: jsonUser.createdAt
    });
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
