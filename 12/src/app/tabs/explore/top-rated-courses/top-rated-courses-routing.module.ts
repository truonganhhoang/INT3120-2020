import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopRatedCoursesPage } from './top-rated-courses.page';

export const routes: Routes = [
  {
    path: '',
    component: TopRatedCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRatedCoursesPageRoutingModule {}
