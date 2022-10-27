import { Component } from '@angular/core';
import { Aluno } from './aluno/aluno.model';

@Component({
  selector: 'esc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  alunos: Aluno[] = [
                     {nome:'João Santos', nota: 8, aprovado: true},
                     {nome: 'Jorge Batista', nota: 6, aprovado: true},
                     {nome: 'Carlos da Gama', nota: 1, aprovado: false}
                    ];
}
