import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { UserService } from '../../../core/services/firebase/auth/user.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingsPageRoutingModule],
  declarations: [SettingsPage],
  providers: [UserService]
})
export class SettingsPageModule {}
