import { Component, OnInit } from '@angular/core';
import { Code } from 'src/app/services/data/code';
import { CodeService } from 'src/app/services/data/code.service';
@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.scss'],
})
export class ComunidadeComponent implements OnInit {
  codes: Code[] = [];
  authorImg = 'assets/User/Photo.png';

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.getCodes();
  }

  getCodes(): void {
    this.codeService.getCodes().subscribe((codes) => (this.codes = codes));
  }
}
