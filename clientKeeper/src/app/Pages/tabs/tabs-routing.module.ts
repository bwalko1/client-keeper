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
          import('../../Pages/setup/setup.module').then(m => m.SetupPageModule)
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../../Pages/list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../Pages/profile/profile.module').then(
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
