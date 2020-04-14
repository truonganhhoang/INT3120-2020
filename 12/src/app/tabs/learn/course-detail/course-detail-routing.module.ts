import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailPage } from './course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewPageModule)
      },
      {
        path: 'grades',
        loadChildren: () => import('./grades/grades.module').then((m) => m.GradesPageModule)
      },
      {
        path: 'forums',
        loadChildren: () => import('./forums/forums.module').then((m) => m.ForumsPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then((m) => m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: 'overview'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailPageRoutingModule {}
