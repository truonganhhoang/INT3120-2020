import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingCoursesPage } from './trending-courses.page';

export const routes: Routes = [
  {
    path: '',
    component: TrendingCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingCoursesPageRoutingModule {}
