import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingCoursesListPage } from './trending-courses-list.page';

const routes: Routes = [
  {
    path: '',
    component: TrendingCoursesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingCoursesListPageRoutingModule {}
