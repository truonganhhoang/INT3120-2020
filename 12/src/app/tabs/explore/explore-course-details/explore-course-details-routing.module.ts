import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreCourseDetailsPage } from './explore-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreCourseDetailsPageRoutingModule {}
