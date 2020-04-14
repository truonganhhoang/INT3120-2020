import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecommendedCourseDetailsPage } from './my-recommended-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecommendedCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecommendedCourseDetailsPageRoutingModule {}
