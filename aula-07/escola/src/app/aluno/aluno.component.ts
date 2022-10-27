import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';

@Component({
  selector: 'esc-aluno',
  templateUrl: './aluno.component.html'
})
export class AlunoComponent implements OnInit {
  @Input() aluno!: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

  fazerRequerimento(){
    console.log('Requerimento Recebido!!!');
  }

}


