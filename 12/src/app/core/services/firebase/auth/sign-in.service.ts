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
    return new Observable<any>((observer) => {
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
    const platforms = this.platform.platforms();

    if (platforms.includes('cordova')) {
      /**
       *
       * TODO
       */
      return new Observable<any>((observer) => {
        this.facebook
          .login(['public_profile', 'email'])
          .then((response) => {
            observer.next(response);
          })
          .catch((err) => {
            observer.error(err);
          });
      });
    }

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return new Observable<any>((observer) => {
      this.ngFireAuth.auth
        .signInWithPopup(facebookProvider)
        .then((userCredentials) => {
          observer.next(userCredentials.user);
          observer.complete();
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
}
