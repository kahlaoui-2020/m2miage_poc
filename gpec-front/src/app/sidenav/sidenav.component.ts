import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements  OnInit{

  profil!: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private auth: AuthService,
              private route: Router) {


  }

  ngOnInit(): void {
    this.profil = this.auth.Profil != null ? this.auth.Profil : 'user'
  }

  logout() {
    this.auth.isAuth = false
    this.route.navigateByUrl('login')

  }
}
