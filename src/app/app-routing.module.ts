import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //pathMatch verifica toda a URL e redireciona para home quando tiver vazio ou /
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'group', redirectTo: 'grupos' },
  { path: 'goals', redirectTo: 'metas' },

  //criando os lazy loading para cada página
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'grupos',
    loadChildren: () =>
      import('./group/group.module').then((m) => m.GroupModule),
  },
  {
    path: 'metas',
    loadChildren: () =>
      import('./goals/goals.module').then((m) => m.GoalsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
