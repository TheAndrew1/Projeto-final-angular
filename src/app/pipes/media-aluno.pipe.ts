import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Pipe({
  name: 'mediaAluno',
  standalone: true
})
export class MediaAlunoPipe implements PipeTransform {

  transform(aluno:Aluno):number{
    return (aluno.nota1 + aluno.nota2) / 2;
  }
}
