import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecommendedListPage } from './my-recommended-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecommendedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecommendedListPageRoutingModule {}
