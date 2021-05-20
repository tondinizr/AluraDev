import { PlatformService } from './../../services/platform/platform.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements OnInit {
  platform: Observable<string>;

  constructor(pS: PlatformService) {
    this.platform = pS.getPlatform();
  }

  ngOnInit(): void {}
}
