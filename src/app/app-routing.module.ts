import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor',
  },
  {
    path: 'comunidade',
    loadChildren: () =>
      import('./pages/comunidade/comunidade.module').then(
        (m) => m.ComunidadeModule
      ),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./pages/editor/editor.module').then((m) => m.EditorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
