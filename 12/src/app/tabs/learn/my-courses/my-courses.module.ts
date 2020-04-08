import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCoursesPageRoutingModule } from './my-courses-routing.module';

import { MyCoursesPage } from './my-courses.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyCoursesPageRoutingModule],
  declarations: [MyCoursesPage]
})
export class MyCoursesPageModule {}
