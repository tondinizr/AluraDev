import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SocialButtonsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SocialButtonsComponent],
})
export class SocialButtonsModule {}
