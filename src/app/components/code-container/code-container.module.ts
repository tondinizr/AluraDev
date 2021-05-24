import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { CodeContainerComponent } from './code-container.component';
import { DotsContainerComponent } from './dots-container/dots-container.component';
import { HighlightContainerComponent } from './highlight-container/highlight-container.component';
@NgModule({
  declarations: [
    CodeContainerComponent,
    DotsContainerComponent,
    HighlightContainerComponent,
  ],
  imports: [CommonModule, HighlightModule],
  exports: [CodeContainerComponent],
})
export class CodeContainerModule {}
