import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsPage } from './forums.page';

const routes: Routes = [
  {
    path: '',
    component: ForumsPage,
    children: [
      {
        path: ':week',
        loadChildren: () => import('./week/week.module').then((m) => m.WeekPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsPageRoutingModule {}
