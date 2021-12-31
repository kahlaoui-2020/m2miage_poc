import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatTabsModule} from "@angular/material/tabs";
import { UserProfileComponent } from './user-profile/user-profile.component';
import {HttpClientModule} from "@angular/common/http";
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddSkillsComponent } from './dialog/add-skills/add-skills.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateSkillsComponent } from './dialog/update-skills/update-skills.component';
import { ListCertificationsComponent } from './list-certifications/list-certifications.component';
import { AddCertificationComponent } from './dialog/add-certification/add-certification.component';
import { EditDbStateComponent } from './edit-db-state/edit-db-state.component';
import { HomeComponent } from './home/home.component';
import { EditCategoriesComponent } from './edit-db-state/edit-categories/edit-categories.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { EditSkillComponent } from './edit-db-state/edit-skill/edit-skill.component';
import { EditCertificationComponent } from './edit-db-state/edit-certification/edit-certification.component';
import { ProfileResumeComponent } from './profile-resume/profile-resume.component';
import {NgChartsModule} from "ng2-charts";
import { FindEmployeeComponent } from './find-employee/find-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    UserProfileComponent,
    EditSkillsComponent,
    ListSkillsComponent,
    AddSkillsComponent,
    UpdateSkillsComponent,
    ListCertificationsComponent,
    AddCertificationComponent,
    EditDbStateComponent,
    HomeComponent,
    EditCategoriesComponent,
    EditSkillComponent,
    EditCertificationComponent,
    ProfileResumeComponent,
    FindEmployeeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,

        NgChartsModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatTableModule,
        MatCheckboxModule,
        MatDialogModule,
        MatStepperModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
