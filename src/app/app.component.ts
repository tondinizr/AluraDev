import { Component, OnInit, HostListener } from '@angular/core';
import { PlatformService } from './services/platform/platform.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'alura-challenge';
  platform = '';
  isOpen = false;

  constructor(private pS: PlatformService) {}

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.changeWidht(window.innerWidth);
  }

  changeWidht(width: number): void {
    if (width <= 576) {
      this.platform = 'Mobile';
    } else if (width <= 810) {
      this.platform = 'Tablet';
    } else {
      this.platform = 'Desktop';
    }
    setTimeout(() => {
      this.pS.setPlatform(this.platform.toLowerCase());
    });
  }
}
