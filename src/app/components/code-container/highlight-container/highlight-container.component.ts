import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-highlight-container',
  templateUrl: './highlight-container.component.html',
  styleUrls: ['./highlight-container.component.scss'],
})
export class HighlightContainerComponent implements OnInit {
  @Input() highlighted = false;
  @Input() code = '';
  @Output() highlightedEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onHighlight(e: any): void {
    this.highlightedEmitter.emit(e);
  }
}
