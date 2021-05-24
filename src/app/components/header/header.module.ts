import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { AuthorModule } from '../author/author.module';
import { MenuModule } from '../menu/menu.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    SearchBarModule,
    AuthorModule,
    MenuModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
