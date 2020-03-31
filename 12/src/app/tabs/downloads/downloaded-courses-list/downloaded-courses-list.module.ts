import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedCoursesListPageRoutingModule } from './downloaded-courses-list-routing.module';

import { DownloadedCoursesListPage } from './downloaded-courses-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DownloadedCoursesListPageRoutingModule],
  declarations: [DownloadedCoursesListPage]
})
export class DownloadedCoursesListPageModule {}
