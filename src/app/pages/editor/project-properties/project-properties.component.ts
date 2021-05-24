import { CodeService } from './../../../services/data/code.service';
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
  @Input() color = '';
  @Input() language!: string;
  @Input() codigo!: string;
  @Output() colorChange = new EventEmitter<string>();
  propertiesForm!: FormGroup;
  platform: Observable<any>;
  count = 0;

  colors = ['#6BD1FF', '#9AFF6B', '#6B83FF', '#FFC46B', '#FF6BCD'];

  constructor(
    private fb: FormBuilder,
    pS: PlatformService,
    private codeService: CodeService
  ) {
    this.platform = pS.getPlatform();
  }

  ngOnInit() {
    this.propertiesForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      language: ['', [Validators.required]],
      color: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
    });
    this.onColorChange();
  }

  sendData() {
    var code = {
      ...this.propertiesForm.value,
      socialData: {
        comments: 0,
        likes: 0,
        liked: false,
      },
    };
    this.codeService.addCode(code).subscribe((code) => {
      console.log(code);
    });
  }

  onColorChange() {
    const cor = this.colors[this.count];
    if (this.count < this.colors.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.color = cor;
    this.colorChange.emit(cor);
    this.propertiesForm.get('color')?.setValue(cor);
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
