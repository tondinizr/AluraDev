import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthorComponent],
})
export class AuthorModule {}
