import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input() selecao:any[];
  @Output() cadastro = new EventEmitter<Aluno>();
  @Output() alteracao = new EventEmitter<any[]>();
  @Output() exclusao = new EventEmitter<Aluno>();

  formulario = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  botaoCadastrar:boolean = true;

  ngOnChanges(changes: SimpleChanges){
    if(changes["selecao"]){
      this.formulario.setValue({
        nome: this.selecao[1].nome,
        nota1: this.selecao[1].nota1,
        nota2: this.selecao[1].nota2
      });
      this.botaoCadastrar = false;
    }
  }

  cadastrar(){
    this.cadastro.emit(this.formulario.value as Aluno);
    this.formulario.reset();
  }

  alterar(){
    this.selecao[1] = this.formulario.value as Aluno;
    this.alteracao.emit(this.selecao);
    this.formulario.reset();
    this.botaoCadastrar = true;
  }
}
