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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/data/in-memory-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    PageTemplateModule,
    HighlightModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
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
