
import { environment } from 'src/environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractCrudService } from '../core/service/abstract-crud.service'; 
import { UsuarioModel } from '../model/usuario.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService extends AbstractCrudService<UsuarioModel, number> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.urlApi}/usuarios`);
  }
  
}