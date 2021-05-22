import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeContainerComponent } from './code-container.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [CodeContainerComponent],
  imports: [CommonModule, HighlightModule],
  exports: [CodeContainerComponent],
})
export class CodeContainerModule {}
