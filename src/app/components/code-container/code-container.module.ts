import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { CodeContainerComponent } from './code-container.component';
import { DotsContainerComponent } from './dots-container/dots-container.component';
@NgModule({
  declarations: [CodeContainerComponent, DotsContainerComponent],
  imports: [CommonModule, HighlightModule],
  exports: [CodeContainerComponent],
})
export class CodeContainerModule {}
