import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mediaAluno',
  standalone: true
})
export class MediaAlunoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
