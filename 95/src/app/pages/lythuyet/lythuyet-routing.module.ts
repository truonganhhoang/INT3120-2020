import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LythuyetPage } from './lythuyet.page';

const routes: Routes = [
  {
    path: '',
    component: LythuyetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LythuyetPageRoutingModule {}
