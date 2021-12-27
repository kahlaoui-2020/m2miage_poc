import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {catchError, Observable, tap} from "rxjs";

const optionHeader = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  })
}

const  user_url = '/api/user/';
const  user_skills_url = '/api/user-skills/';
const  user_new_skills_url = '/api/user-skills/skills';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private authService: AuthService) { }


  get user() {
    let id_utilisateur = this.authService.Id;

    let params = new HttpParams().set('id_utilisateur', id_utilisateur);
    return this.http.get<User>(environment.apiURL + user_url,{params: params});
  }

  get userSkills() {
    let params =  new HttpParams().set('id_utilisateur', this.authService.Id);
    return this.http.get<any>(environment.apiURL + user_skills_url, {params: params})
  }

  setSkills(skills: any) {
    return this.http.post(environment.apiURL + user_new_skills_url, skills)

  }

  removeSkills(skills: any) {
    return this.http.delete(environment.apiURL + user_new_skills_url, {body: skills})
  }


  updateSkills(skills: any) {
    return this.http.put(environment.apiURL + user_new_skills_url, skills)

  }

}
