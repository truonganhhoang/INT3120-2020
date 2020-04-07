import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopRatedCoursesListPage } from './top-rated-courses-list.page';

const routes: Routes = [
  {
    path: '',
    component: TopRatedCoursesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRatedCoursesListPageRoutingModule {}
