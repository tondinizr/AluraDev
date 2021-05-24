import { Component, HostListener } from '@angular/core';
import {
  faSearch,
  faBars,
  faTimes,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoImage = 'assets/Logo.svg';
  authorImage = 'assets/User/Photo.png';
  valueSearch = '';
  isOpen = false;
  search = false;
  mobile = false;
  faSearch = faSearch;
  faAngleUp = faAngleUp;
  faBars = faBars;
  faTimes = faTimes;
  author = {
    name: 'Harry',
    avatarUrl: '../../../assets/User/Photo.png',
  };

  constructor() {}

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

  @HostListener('window:resize')
  onResize(): void {
    this.changeWidht(window.innerWidth);
  }

  changeWidht(width: number): void {
    if (width <= 576) {
      this.mobile = true;
    } else if (width <= 810) {
      this.mobile = false;
    } else {
      this.mobile = false;
    }
  }
}
