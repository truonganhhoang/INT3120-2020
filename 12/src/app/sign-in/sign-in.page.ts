import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
  hidePassword = true;

  constructor() {}

  ngOnInit() {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}
