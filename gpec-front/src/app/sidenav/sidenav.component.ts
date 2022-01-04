import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {EditDbService} from "../services/edit-db.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements  OnInit{

  profil!: string;
  subscription!: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  notif = 0;

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private auth: AuthService,
              private route: Router,
              private  editService: EditDbService) {


  }

  async  ngOnInit() {
    this.profil = this.auth.Profil != null ? this.auth.Profil : 'user';
    this.editService.isNotif().subscribe((result: any) => {
      //this.notif = result[0].notif
      this.editService.change(result[0].notif)
    });

    this.subscription = this.editService.getEmittedValue().subscribe(item => {
      this.notif = item
    })






  }

  logout() {
    this.auth.isAuth = false
    this.route.navigateByUrl('login')

  }
}
