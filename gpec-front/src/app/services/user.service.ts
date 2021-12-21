import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {catchError, tap} from "rxjs";

const optionHeader = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  })
}

const  user_url = '/api/user/';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  get user() {
    let id_utilisateur = this.authService.Id;

    let params = new HttpParams().set('id_utilisateur', id_utilisateur);
    return this.http.get<User>(environment.apiURL + user_url + id_utilisateur, optionHeader);
  }
}
