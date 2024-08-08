import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../models/Aluno';
import { CommonModule } from '@angular/common';
import { MediaAlunoPipe } from '../../pipes/media-aluno.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MediaAlunoPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() alunos:Aluno[];
  @Output() selecao = new EventEmitter<number>();

  selecionar(indice:number){
    this.selecao.emit(indice);
  }
}
