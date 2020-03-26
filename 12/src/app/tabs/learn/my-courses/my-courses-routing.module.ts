import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCoursesPage } from './my-courses.page';

const routes: Routes = [
  {
    path: '',
    component: MyCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCoursesPageRoutingModule {}
