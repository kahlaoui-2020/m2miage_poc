import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";


const  certification_url = '/api/edit-certs/';


@Injectable({
  providedIn: 'root'
})
export class EditCertificationService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  get Certifications() {
    return this.http.get(environment.apiURL + certification_url);
  }

  get CertsTree() {
    return this.http.get(environment.apiURL + certification_url + 'tree');
  }

  getCertifications(organisme: any) {
    return this.http.get(environment.apiURL + certification_url + 'certifications/'+organisme, {params: organisme});
  }
  get Organismes() {
    return this.http.get(environment.apiURL + certification_url + 'organismes');
  }
  getUser_certification(id?: any) {
    let id_user = id? id: this.auth.Id
    return this.http.get(environment.apiURL + certification_url + id_user)
  }

  setUser_certification(cert: any, id?: any) {
    let id_user = id? id: this.auth.Id
    return this.http.post(environment.apiURL + certification_url + id_user, cert)
  }

  remove_UserCert(id_certs: any, id?: any) {
    let id_user = id? id: this.auth.Id
    return this.http.delete(environment.apiURL + certification_url + id_user, {body: id_certs})

  }
}
