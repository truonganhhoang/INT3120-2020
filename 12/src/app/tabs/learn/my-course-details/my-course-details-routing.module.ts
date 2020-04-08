import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCourseDetailsPage } from './my-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCourseDetailsPageRoutingModule {}
