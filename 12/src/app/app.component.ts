import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.authenticate();
    });
  }

  async authenticate(): Promise<void> {
    const allowAnonymousPaseRegex = /^\/(intro|sign\-in|sign\-up)/;
    const currentUrl = window.location.pathname;
    if (!localStorage.getItem('token')) {
      if (!allowAnonymousPaseRegex.test(currentUrl)) {
        this.router.navigate(['/intro']);
      }
    } else {
      if (allowAnonymousPaseRegex.test(currentUrl)) {
        this.router.navigate(['/tabs/learn']);
      }
    }
  }
}
