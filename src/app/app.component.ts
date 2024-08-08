import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from "./aluno/aluno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlunoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-final-alunos';
}
