import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedCourseDetailsPageRoutingModule } from './downloaded-course-details-routing.module';

import { DownloadedCourseDetailsPage } from './downloaded-course-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DownloadedCourseDetailsPageRoutingModule],
  declarations: [DownloadedCourseDetailsPage]
})
export class DownloadedCourseDetailsPageModule {}
