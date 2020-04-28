import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseOverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: CourseOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewPageRoutingModule {}
