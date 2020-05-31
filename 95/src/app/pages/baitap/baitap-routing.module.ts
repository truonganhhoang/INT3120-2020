import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaitapPage } from './baitap.page';

const routes: Routes = [
  {
    path: '',
    component: BaitapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaitapPageRoutingModule {}
