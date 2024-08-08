import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../../models/Aluno';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() cadastro = new EventEmitter<Aluno>();
  @Output() alteracao = new EventEmitter<Aluno>();
  @Output() exclusao = new EventEmitter<Aluno>();

  formulario = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  botaoCadastrar:boolean = true;

  cadastrar(){
    this.cadastro.emit(this.formulario.value as Aluno);
    this.formulario.reset();
  }

  alterar(){
    this.alteracao.emit(this.formulario.value as Aluno);
    this.formulario.reset();
  }
}
