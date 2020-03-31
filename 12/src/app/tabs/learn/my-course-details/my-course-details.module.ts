import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCourseDetailsPageRoutingModule } from './my-course-details-routing.module';

import { MyCourseDetailsPage } from './my-course-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyCourseDetailsPageRoutingModule],
  declarations: [MyCourseDetailsPage]
})
export class MyCourseDetailsPageModule {}
