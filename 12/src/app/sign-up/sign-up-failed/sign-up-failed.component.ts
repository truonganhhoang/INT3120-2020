import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up-failed',
  templateUrl: './sign-up-failed.component.html',
  styleUrls: ['./sign-up-failed.component.scss']
})
export class SignUpFailedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
