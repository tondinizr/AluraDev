import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-container',
  templateUrl: './code-container.component.html',
  styleUrls: ['./code-container.component.scss'],
})
export class CodeContainerComponent implements OnInit {
  @Input() highlighted = false;
  @Output() highlightedChange = new EventEmitter<any>();
  @Input() code = '';
  @Output() codeChange = new EventEmitter<any>();
  @Input() color = 'rgb(107, 209, 255)';
  @Output() colorChange = new EventEmitter<any>();
  @Input() language!: any;
  @Output() languageChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    if (this.code!) {
      this.highlight();
    }
  }

  onHighlight(e: HighlightResult): void {
    this.language = e.language;
  }

  highlight(): void {
    this.highlighted = !this.highlighted;
    setTimeout(() => {
      this.languageChange.emit(this.language);
      this.codeChange.emit(this.code);
    });
  }
}
