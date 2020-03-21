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
        children: [
          {
            path: '',
            loadChildren: () => import('./learn/learn.module').then((m) => m.LearnPageModule)
          }
        ]
      },
      {
        path: 'recommended',
        children: [
          {
            path: '',
            loadChildren: () => import('./recommended/recommended.module').then((m) => m.RecommendedPageModule)
          }
        ]
      },
      {
        path: 'downloads',
        children: [
          {
            path: '',
            loadChildren: () => import('./downloads/downloads.module').then((m) => m.DownloadsPageModule)
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () => import('./explore/explore.module').then((m) => m.ExplorePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
