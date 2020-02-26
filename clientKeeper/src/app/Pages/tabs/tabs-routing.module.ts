import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'setup',
        loadChildren: () =>
          import('../../pages/setup/setup.module').then(m => m.SetupPageModule)
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../../pages/list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module').then(
            m => m.ProfilePageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
