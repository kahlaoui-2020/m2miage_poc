import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

const  editDB_url = '/api/edit-db/';
const  user_url = '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class EditDbService {


  @Output() value: EventEmitter<number> = new EventEmitter()

  constructor(private http: HttpClient, private authService: AuthService) { }

  addCategorie(categorie: any) {
    return this.http.put(environment.apiURL + editDB_url + 'categorie', {categorie})
  }

  addSkill(skill: any, id_categorie: any) {
    return this.http.put(environment.apiURL + editDB_url + 'skill', {skill, id_categorie})
  }
  addCertification(form: any) {
    return this.http.put(environment.apiURL + editDB_url + 'certification', form)
  }

  passCertRequest(cert: string) {
    let params = new HttpParams().set('id_utilisateur', this.authService.Id);
    params = params.append('cert', cert);
    return this.http.put(environment.apiURL + user_url + 'cert', params);
  }
  passSkillRequest(skill: string) {
    let params = new HttpParams().set('id_utilisateur', this.authService.Id);
    params = params.append('skill', skill);
    return this.http.put(environment.apiURL + user_url + 'skill',  params);
  }

  removeRequest(id_request: any) {
    return this.http.delete(environment.apiURL + user_url + 'deleteRequest/' + id_request)
  }

  getAllRequets() {
    return this.http.get(environment.apiURL + user_url +'requests')
  }




  change(value: number) {
    this.value.emit(value)
  }
getEmittedValue() {
    return this.value
}
  isNotif() {
   return  this.http.get(environment.apiURL + user_url +'notifs');
  }
}
