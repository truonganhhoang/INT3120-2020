import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularCoursesListPage } from './popular-courses-list.page';

const routes: Routes = [
  {
    path: '',
    component: PopularCoursesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularCoursesListPageRoutingModule {}
