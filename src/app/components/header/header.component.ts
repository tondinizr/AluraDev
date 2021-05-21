import { Component } from '@angular/core';
import {
  faSearch,
  faBars,
  faTimes,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PlatformService } from 'src/app/services/platform/platform.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoImage = '../../../assets/Logo.svg';
  authorImage = '../../../assets/User/Photo.png';
  valueSearch = '';
  platform: Observable<string>;
  isOpen = false;
  search = false;
  faSearch = faSearch;
  faAngleUp = faAngleUp;
  faBars = faBars;
  faTimes = faTimes;
  author = {
    name: 'Harry',
    avatarUrl: '../../../assets/User/Photo.png',
  };

  constructor(private pS: PlatformService) {
    this.platform = pS.getPlatform();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleSearch(): void {
    this.search = !this.search;
    this.clearSearch();
  }

  clearSearch(): void {
    this.valueSearch = '';
  }

  stopPropagation(event: any): void {
    event.stopPropagation();
  }
}
