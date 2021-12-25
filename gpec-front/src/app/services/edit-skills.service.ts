import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

const optionHeader = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  })
}


const  categories_url = '/api/edit-skills/';

@Injectable({
  providedIn: 'root'
})
export class EditSkillsService {

  constructor(private http: HttpClient) {}

  get Categories() {
    return this.http.get<any>(environment.apiURL + categories_url + 'categories');
  }

  getSkills(id_categorie: number) {
    let params = new HttpParams().set('id_categorie', id_categorie);
    return this.http.get<any>(environment.apiURL + categories_url + 'skills', {params: params});
  }


  get Levels() {
    return this.http.get<any>(environment.apiURL + categories_url + 'levels');

  }
}

