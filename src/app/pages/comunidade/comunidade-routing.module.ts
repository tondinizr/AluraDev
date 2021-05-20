import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComunidadeComponent } from './comunidade.component';

const routes: Routes = [
  {
    path: '',
    component: ComunidadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunidadeRoutingModule {}
