import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const auth_url = '/api/auth';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Access-Control-Allow-Credentials' : 'true'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  private id: number = 0;
  private profil: string = '';
  constructor(private http: HttpClient) { }

  checkAuth(form: any) {
    return this.http.post<any>(environment.apiURL+auth_url, form, httpOptions);
  }
  isLogged(): boolean {
    return this.isAuth;
    // return JSON.parse(localStorage.getItem('isAuth')!) || false;
  }
  set Logged(auth: boolean) {
    this.isAuth = auth;
    // localStorage.setItem('isAuth', '' + auth)
  }
  set Id(id: number) {
    this.id = id;
    // localStorage.setItem('id', '' + id)
  }

  get Id() {
    //return  JSON.parse(localStorage.getItem('id')!) || this.id
    return  this.id
  }

  set Profil(profil: string) {
    this.profil = profil;
    // localStorage.setItem('profil', profil)
  }

  get Profil() {
    return this.profil
  }
}
