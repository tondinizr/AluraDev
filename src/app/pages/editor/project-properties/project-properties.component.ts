import { Observable } from 'rxjs';
import { PlatformService } from './../../../services/platform/platform.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-properties',
  templateUrl: './project-properties.component.html',
  styleUrls: ['./project-properties.component.scss'],
})
export class ProjectPropertiesComponent implements OnInit {
  @Input() color = '#6BD1FF';
  @Input() language!: string;
  @Input() codigo!: string;
  @Output() colorChange = new EventEmitter<string>();
  propertiesForm!: FormGroup;
  platform: Observable<any>;

  constructor(private fb: FormBuilder, pS: PlatformService) {
    this.platform = pS.getPlatform();
  }

  ngOnInit() {
    this.propertiesForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      language: ['', [Validators.required]],
      color: [this.color, [Validators.required]],
      codigo: ['', [Validators.required]],
    });
    this.onColorChange();
  }

  onColorChange(): void {
    const cor = this.propertiesForm.get('color')?.value;
    this.colorChange.emit(cor);
  }

  handleChange(event: any): void {
    console.log(event);
    console.log(this.language);
    console.log(this.codigo);
  }

  sendData() {
    console.table(this.propertiesForm.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.language !== undefined) {
      if (changes?.language.currentValue !== '') {
        this.propertiesForm
          .get('language')
          ?.setValue(changes.language.currentValue);
      }
    }
    if (changes.language !== undefined) {
      if (changes.codigo.currentValue !== '') {
        this.propertiesForm
          .get('codigo')
          ?.setValue(changes.codigo.currentValue);
      }
    }
  }
}
