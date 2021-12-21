import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouteGuard} from "./services/route-guard";
import {AppComponent} from "./app.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: SidenavComponent,
    children: [
      {path: '', component: DashboardComponent}
    ] ,canActivate:[RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
