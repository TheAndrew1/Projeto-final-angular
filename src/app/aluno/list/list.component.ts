import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../models/Aluno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() alunos:Aluno[];
  @Output() selecao = new EventEmitter<Aluno>();


  selecionar(aluno:Aluno){
    this.selecao.emit(aluno);
  }
}
