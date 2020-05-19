import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularCoursesPage } from './popular-courses.page';

export const routes: Routes = [
  {
    path: '',
    component: PopularCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularCoursesPageRoutingModule {}
