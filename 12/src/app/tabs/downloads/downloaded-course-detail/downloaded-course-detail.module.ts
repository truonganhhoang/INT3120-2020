import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedCourseDetailPageRoutingModule } from './downloaded-course-detail-routing.module';

import { DownloadedCourseDetailPage } from './downloaded-course-detail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DownloadedCourseDetailPageRoutingModule],
  declarations: [DownloadedCourseDetailPage]
})
export class DownloadedCourseDetailsPageModule {}
