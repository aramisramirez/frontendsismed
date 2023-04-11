import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {keyauth} from "../enviroment/keys";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _keyLogin: string = keyauth.login;

  constructor(private http: HttpClient) { }

  autentificacion(data: any) {
    return this.http.post(this._keyLogin, data);
  }
}
