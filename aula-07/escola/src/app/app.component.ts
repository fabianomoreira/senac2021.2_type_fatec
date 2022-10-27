import { Component } from '@angular/core';
import { Aluno } from './aluno/aluno.model';

@Component({
  selector: 'esc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  aluno1: Aluno = {nome:'João Santos', nota: 8, situacao: 'Aprovado', aprovado: true};
  aluno2: Aluno = {nome: 'Jorge Batista', nota: 6, situacao: 'Aprovado', aprovado: true};
}
