import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profil: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.profil = this.auth.Profil != null ? this.auth.Profil : 'user'

  }

}
