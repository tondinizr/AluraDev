import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

import { PlatformService } from 'src/app/services/platform/platform.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  platform: Observable<string>;
  color = '#6BD1FF';
  code = '';
  language = '';

  constructor(private pS: PlatformService) {
    window.dispatchEvent(new Event('resize'));
    this.platform = pS.getPlatform();
  }
}
