import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private platform: Platform, private ngFireAuth: AngularFireAuth, private facebook: Facebook) {}

  private instanceOfFirebaseError(error: any): error is firebase.FirebaseError {
    return 'code' in error;
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return new Observable<firebase.User>((observer) => {
      this.ngFireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          observer.next(userCredentials.user);
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

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.signInWithFacebookNative();
    }
    return this.signInWithFacebookWeb();
  }

  signInWithFacebookNative() {
    return new Observable<firebase.User>((observer) => {
      this.facebook
        .login(['public_profile', 'email'])
        .then((facebookResponse) => {
          const credential = firebase.auth.FacebookAuthProvider.credential(facebookResponse.authResponse.accessToken);
          return this.ngFireAuth.auth.signInWithCredential(credential);
        })
        .then((userCredentials) => {
          observer.next(userCredentials.user);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err?.message);
        });
    });
  }

  signInWithFacebookWeb() {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return new Observable<firebase.User>((observer) => {
      this.ngFireAuth.auth
        .signInWithPopup(facebookProvider)
        .then((userCredentials) => {
          observer.next(userCredentials.user);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err?.message);
        });
    });
  }
}
