import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  alunos:Aluno[];

  cadastrar(aluno:Aluno){
    this.alunos.push(aluno);
  }
}