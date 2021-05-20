import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  @Input() color!: string;
  @Input() code!: string;
  @Input() language!: any;
  @Output() languageChange = new EventEmitter<any>();
  @Output() codeChange = new EventEmitter<string>();
  highlighted = false;
  response!: HighlightResult;
  codeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.codeForm = this.fb.group({
      code: ['', [Validators.required]],
    });
  }

  onHighlight(e: HighlightResult): void {
    this.language = e.language;
  }

  highlight(): void {
    this.highlighted = !this.highlighted;
    setTimeout(() => {
      this.languageChange.emit(this.language);
      this.codeChange.emit(this.codeForm.get('code')?.value);
    });
  }
}
