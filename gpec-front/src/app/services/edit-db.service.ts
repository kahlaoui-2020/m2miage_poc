import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const  editDB_url = '/api/edit-db/';

@Injectable({
  providedIn: 'root'
})
export class EditDbService {

  constructor(private http: HttpClient) { }

  addCategorie(categorie: any) {
    return this.http.put(environment.apiURL + editDB_url + 'categorie', {categorie})
  }

  addSkill(skill: any, id_categorie: any) {
    return this.http.put(environment.apiURL + editDB_url + 'skill', {skill, id_categorie})
  }
  addCertification(form: any) {
    return this.http.put(environment.apiURL + editDB_url + 'certification', form)
  }
}
