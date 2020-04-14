import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecommendedCourseDetailsPageRoutingModule } from './my-recommended-course-details-routing.module';

import { MyRecommendedCourseDetailsPage } from './my-recommended-course-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyRecommendedCourseDetailsPageRoutingModule],
  declarations: [MyRecommendedCourseDetailsPage]
})
export class MyRecommendedCourseDetailsPageModule {}
