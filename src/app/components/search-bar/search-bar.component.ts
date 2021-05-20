import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() value!: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  update(event: any): void {
    this.value = event;
    this.valueChange.emit(event);
  }
}
