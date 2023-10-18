
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageRequest } from './core/model/page-request.model';
import { SortDirection } from './core/model/sort-direction.enum';
import { Sort } from './core/model/sort.model';
import { UsuarioParamOutput } from './model/dto-param/usuario-param-output.model';
import { PageEvent } from '@angular/material/paginator';

import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';
import { Uteis } from './util/uteis';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private servico : UsuarioService,
              private snackBar: MatSnackBar
           
           
) {}

private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
private verticalPosition: MatSnackBarVerticalPosition = 'top'

public addForm : FormGroup = {} as FormGroup;
public usuario: UsuarioModel = {} as UsuarioModel;



ngOnInit(): void {
this.buildForm();
}

private buildForm(): void {
this.addForm = this.formBuilder.group({
id: [this.usuario.id],
nome: [this.usuario.nome, Validators.required],
email: [this.usuario.email, Validators.required],
senha: [this.usuario.senha, Validators.required],
confirmacaoSenha: [this.usuario.confirmacaoSenha, Validators.required],

});
}

public cancelar(){

}

public gravar(){
  this.servico.save(this.addForm.value).subscribe(
 
    (data : any) => {
      this.showMensagem("Sucesso","Usuário Gravado com Sucesso!");
      console.log("gravou corretamente sem erros, veja o json retornado pelo back-end com os dados :\n" + 
      JSON.stringify(data));
     

    },

    (error :any) => {
      this.showMensagem("Erro",error.error.mensagem);
      console.log("deu erro. Veja o json persolizado retormado pelo back-end a reposta de validações bean validator ou erros: \n" + 
      JSON.stringify(error.error));
    
    }

  );
}

public showMensagem(cabecalho : string, mensagem : string) {

  this.snackBar.open(cabecalho, mensagem, {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

}