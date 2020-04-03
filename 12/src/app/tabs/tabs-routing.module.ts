import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'learn',
        loadChildren: () => import('./learn/learn.module').then((m) => m.LearnModule)
      },
      {
        path: 'recommended',
        loadChildren: () => import('./recommended/recommended.module').then((m) => m.RecommendedModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('./explore/explore.module').then((m) => m.ExploreModule)
      },
      {
        path: 'downloads',
        loadChildren: () => import('./downloads/downloads.module').then((m) => m.DownloadsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: '/tabs/learn/courses'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
