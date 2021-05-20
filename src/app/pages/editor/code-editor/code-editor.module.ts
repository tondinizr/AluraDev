import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';

import { CodeEditorComponent } from './code-editor.component';

@NgModule({
  declarations: [CodeEditorComponent],
  imports: [CommonModule, HighlightModule, ReactiveFormsModule],
  exports: [CodeEditorComponent],
})
export class CodeEditorModule {}
