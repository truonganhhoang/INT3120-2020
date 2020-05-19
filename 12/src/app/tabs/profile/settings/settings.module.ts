import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordForEmailProviderComponent } from './change-password/email-provider/email-provider.component';
import { SetPasswordForFacebookProviderComponent } from './change-password/facebook-provider/facebook-provider.component';
import { UserService } from '../../../core/services/firebase/auth/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage,
    ChangePasswordComponent,
    ChangePasswordForEmailProviderComponent,
    SetPasswordForFacebookProviderComponent
  ],
  providers: [UserService]
})
export class SettingsPageModule {}
