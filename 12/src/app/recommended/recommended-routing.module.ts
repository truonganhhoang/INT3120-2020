import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendedPage } from './recommended.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendedPageRoutingModule {}
