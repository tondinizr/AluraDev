import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadeComponent } from './comunidade.component';
import { CodeContainerModule } from 'src/app/components/code-container/code-container.module';
import { SocialButtonsModule } from 'src/app/components/social-buttons/social-buttons.module';
import { ComunidadeRoutingModule } from './comunidade-routing.module';
import { AuthorModule } from 'src/app/components/author/author.module';

@NgModule({
  declarations: [ComunidadeComponent],
  imports: [
    CommonModule,
    CodeContainerModule,
    SocialButtonsModule,
    ComunidadeRoutingModule,
    AuthorModule,
    RouterModule,
  ],
  exports: [ComunidadeComponent],
})
export class ComunidadeModule {}
