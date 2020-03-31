import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadedCoursesListPage } from './downloaded-courses-list.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadedCoursesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadedCoursesListPageRoutingModule {}
