import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingsPageRoutingModule, MatDialogModule],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
