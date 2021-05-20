import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadeComponent } from './comunidade.component';
import { ComunidadeRoutingModule } from './comunidade-routing.module';

@NgModule({
  declarations: [ComunidadeComponent],
  imports: [CommonModule, ComunidadeRoutingModule],
  exports: [ComunidadeComponent],
})
export class ComunidadeModule {}
