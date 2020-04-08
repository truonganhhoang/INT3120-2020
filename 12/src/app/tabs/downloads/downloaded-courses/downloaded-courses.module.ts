import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedCoursesPageRoutingModule } from './downloaded-courses-routing.module';

import { DownloadedCoursesPage } from './downloaded-courses.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DownloadedCoursesPageRoutingModule],
  declarations: [DownloadedCoursesPage]
})
export class DownloadedCoursesListPageModule {}
