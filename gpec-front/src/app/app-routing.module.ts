import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouteGuard} from "./services/route-guard";
import {AppComponent} from "./app.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {EditDbStateComponent} from "./edit-db-state/edit-db-state.component";
import {HomeComponent} from "./home/home.component";

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
      {path: 'edit-db', component: EditDbStateComponent}
    ] ,canActivate:[RouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
