import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouteGuard} from "./services/route-guard";
import {AppComponent} from "./app.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {EditDbStateComponent} from "./edit-db-state/edit-db-state.component";
import {HomeComponent} from "./home/home.component";
import {FindEmployeeComponent} from "./find-employee/find-employee.component";
import {PassRequestComponent} from "./pass-request/pass-request.component";

const routes: Routes = [

  {path: '', component: HomeComponent,canActivate:[RouteGuard]},
  {path: 'login', component: LoginComponent },
  /*{path: 'home', component: SidenavComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'edit-db', component: EditDbStateComponent}
    ] ,canActivate:[RouteGuard]}*/
  {path: 'home', component: HomeComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'pass-request', component: PassRequestComponent},
      {path: 'edit-db', component: EditDbStateComponent},
      {path: 'find-employee', component: FindEmployeeComponent}

    ] ,canActivate:[RouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
