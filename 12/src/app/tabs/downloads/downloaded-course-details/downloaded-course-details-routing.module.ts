import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadedCourseDetailsPage } from './downloaded-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadedCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadedCourseDetailsPageRoutingModule {}
