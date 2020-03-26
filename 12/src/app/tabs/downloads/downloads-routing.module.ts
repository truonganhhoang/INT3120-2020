import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadsPage } from './downloads.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadsPage
  },
  {
    path: 'downloaded-courses-list',
    loadChildren: () =>
      import('./downloaded-courses-list/downloaded-courses-list.module').then((m) => m.DownloadedCoursesListPageModule)
  },
  {
    path: 'downloaded-course-details',
    loadChildren: () =>
      import('./downloaded-course-details/downloaded-course-details.module').then(
        (m) => m.DownloadedCourseDetailsPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsPageRoutingModule {}
