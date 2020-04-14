import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadedCourseDetailPage } from './downloaded-course-detail.page';
import { NotFoundComponent } from 'src/app/core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadedCourseDetailPage
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadedCourseDetailPageRoutingModule {}
