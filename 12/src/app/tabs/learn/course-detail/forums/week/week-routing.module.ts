import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekPage } from './week.page';

const routes: Routes = [
  {
    path: '',
    component: WeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekPageRoutingModule {}
