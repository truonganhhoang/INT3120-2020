import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';
import { SanitizePipe } from '../../../core/pipes/sanitize.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyProfilePageRoutingModule],
  declarations: [MyProfilePage, CompletedCoursesComponent, SanitizePipe]
})
export class MyProfilePageModule {}
