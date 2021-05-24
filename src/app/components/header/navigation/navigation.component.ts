import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() menu = new EventEmitter<any>();
  @Input() author!: {
    name: string;
    avatarUrl: string;
  };
  @Input() isOpen = false;
  faTimes = faTimes;
  constructor() {}

  ngOnInit() {}

  stopPropagation(event: any): void {
    event.stopPropagation();
  }

  toggleMenu(): void {
    this.menu.emit();
  }
}
