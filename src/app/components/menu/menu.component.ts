import { Observable } from 'rxjs';
import { PlatformService } from './../../services/platform/platform.service';
import { Component, Input, OnInit } from '@angular/core';
import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  platform: Observable<string>;
  isOpen!: '';
  faCode = faCode;
  faUsers = faUsers;

  constructor(pS: PlatformService) {
    this.platform = pS.getPlatform();
  }

  ngOnInit() {}
}
