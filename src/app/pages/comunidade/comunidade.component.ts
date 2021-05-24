import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Code } from 'src/app/services/data/code';
import { CodeService } from 'src/app/services/data/code.service';
@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.scss'],
})
export class ComunidadeComponent implements OnInit {
  codes: Code[] = [];
  codeId!: number;
  authorImg = 'assets/User/Photo.png';

  constructor(
    private codeService: CodeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.codeId = this.activatedRoute.snapshot.params.id;
    this.codeId ? this.getCode(this.codeId) : this.getCodes();
  }

  getCodes(): void {
    this.codeService.getCodes().subscribe((codes) => (this.codes = codes));
  }

  getCode(id: number) {
    this.codeService.getCode(id).subscribe((code) => this.codes.push(code));
  }
}
