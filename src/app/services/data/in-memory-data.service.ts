import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Code } from './code';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const codes = [
      {
        id: 0,
        codigo:
          '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8"/>\n<title>Document</title>\n</head>\n<body>\n<!-- Conteúdo -->\n</body>\n</html>',
        color: '#FFC46B',
        description: 'Template padrão de código HTML, com o Body vazio',
        language: 'HTML ',
        name: 'Código em Html',
        socialData: {
          comments: 5,
          likes: 33,
          liked: true,
        },
      },
      {
        id: 1,
        codigo:
          'h1{\n  font-style: italic;\n}\n#fundo{\n  background-c…\n  color: red;\n}\n.paragrafo2{\n  color: #0018ff;\n}',
        color: '#6BD1FF',
        description: 'Exemplo de código Css',
        language: 'Css',
        name: 'Código em Css',
        socialData: {
          comments: 15,
          likes: 0,
          liked: false,
        },
      },
      {
        id: 2,
        codigo: "int main(){\n    printf(''Hello World'');\n    return 0;\n}",
        color: '#FF6BCD',
        description: 'C',
        language: 'C',
        name: 'Exemplo de Código em C',
        socialData: {
          comments: 0,
          likes: 0,
          liked: false,
        },
      },
      {
        id: 3,
        codigo:
          "import { Component, Input, OnInit } from '@angular/core';\n\n @Component({ \n   selector: 'app-page-template',\n   templateUrl: './page-template.component.html', \n   styleUrls: ['./page-template.component.scss'], \n }) \n\n export class PageTemplateComponent implements OnInit {\n\n  constructor() {}\n\n  ngOnInit(): void {}\n}",
        color: '#6B83FF',
        description:
          'Pedaço de código Typescript desenvolvido utilizando o Angular',
        language: 'Typescript',
        name: 'Código em Typescript',
        socialData: {
          comments: 1,
          likes: 1,
          liked: true,
        },
      },
    ];
    return { codes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(codes: Code[]): number {
    return codes.length > 0
      ? Math.max(...codes.map((code) => code.id)) + 1
      : 11;
  }
}
