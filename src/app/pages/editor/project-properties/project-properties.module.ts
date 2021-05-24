import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectPropertiesComponent } from './project-properties.component';

@NgModule({
  declarations: [ProjectPropertiesComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ProjectPropertiesComponent],
})
export class ProjectPropertiesModule {}
