import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

const  search_url = '/api/user/skills';

@Injectable({
  providedIn: 'root'
})
export class SearchEmployeeService {

  constructor(private http: HttpClient, private auth: AuthService ) { }

  searchBySkills(choicess: any[]) {
    let params = new HttpParams();
    choicess.forEach(id => {
      params =  params.append('id', id)
    })
    params = params.append('id_user', this.auth.Id)
    return this.http.get<any>(environment.apiURL + search_url, {params: params})

  }


}
