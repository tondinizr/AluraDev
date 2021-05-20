import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTemplateComponent } from './page-template.component';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
  declarations: [PageTemplateComponent],
  imports: [CommonModule, MenuModule],
  exports: [PageTemplateComponent],
})
export class PageTemplateModule {}
