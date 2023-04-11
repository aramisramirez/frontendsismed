import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {keyauth, keygetusuario} from "../enviroment/keys";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  _keyobtenerusuario: string = keygetusuario.usuario;

  constructor(private http: HttpClient) { }

  obtenerusuarioactivo() {
    return this.http.get(this._keyobtenerusuario);
  }
}
