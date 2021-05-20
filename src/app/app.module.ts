import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';
import 'highlightjs-line-numbers.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './components/header/header.module';
import { PageTemplateModule } from './pages/page-template/page-template.module';
import { PlatformService } from './services/platform/platform.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    PageTemplateModule,
    HighlightModule,
  ],
  providers: [
    PlatformService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
      } as HighlightOptions,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
