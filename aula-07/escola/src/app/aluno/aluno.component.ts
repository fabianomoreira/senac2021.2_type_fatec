import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esc-aluno',
  templateUrl: './aluno.component.html'
})
export class AlunoComponent implements OnInit {
  nome = 'João Santos';
  nota = 7;
  situacao = 'Aprovado';
  aprovado = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
