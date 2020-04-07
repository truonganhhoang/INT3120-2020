import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-failed',
  templateUrl: './sign-in-failed.component.html',
  styleUrls: ['./sign-in-failed.component.scss']
})
export class SignInFailedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
