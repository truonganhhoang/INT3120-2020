import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadedCoursesPage } from './downloaded-courses.page';

export const routes: Routes = [
  {
    path: '',
    component: DownloadedCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadedCoursesPageRoutingModule {}
