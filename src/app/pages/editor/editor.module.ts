import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { CodeEditorModule } from './code-editor/code-editor.module';
import { ProjectPropertiesModule } from './project-properties/project-properties.module';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    CodeEditorModule,
    ProjectPropertiesModule,
  ],
  exports: [EditorComponent],
})
export class EditorModule {}
