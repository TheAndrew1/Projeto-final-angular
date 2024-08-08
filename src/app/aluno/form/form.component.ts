import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formulario = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  botaoCadastrar:boolean = true;
}
