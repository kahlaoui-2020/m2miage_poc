import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {



  constructor(public auth: AuthService, public router: Router) {}


  canActivate(): boolean {
    if(!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
