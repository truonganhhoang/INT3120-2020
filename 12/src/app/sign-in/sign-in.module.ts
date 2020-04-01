import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';
import { SignInPage } from './sign-in.page';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInService } from '../services/firebase/auth/sign-in.service';
import { ForgotPasswordService } from '../services/firebase/auth/forgot-password.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SignInPageRoutingModule
  ],
  declarations: [SignInPage, ForgotPasswordComponent],
  providers: [SignInService, ForgotPasswordService]
})
export class SignInPageModule {}
