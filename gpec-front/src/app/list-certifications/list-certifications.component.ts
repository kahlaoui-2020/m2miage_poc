import { Component, OnInit } from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {EditCertificationService} from "../services/edit-certification.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCertificationComponent} from "../dialog/add-certification/add-certification.component";

@Component({
  selector: 'app-list-certifications',
  templateUrl: './list-certifications.component.html',
  styleUrls: ['./list-certifications.component.css']
})
export class ListCertificationsComponent implements OnInit {

  certifications!: any;

  displayedColumns: string[] = ["checked", "certification",
    "organisme", "code", "date_d", "date_f", "score"];
  selection = new SelectionModel<any>(true, []);

  constructor(private snackBar: MatSnackBar,
              private userService: UserService,
              private authService: AuthService,
              private dialog: MatDialog,
              private editCert: EditCertificationService,
              ) { }

  ngOnInit(): void {
    this.editCert.getUser_certification().subscribe((result:any) => {
      this.certifications = result.data;
    })
  }

  addCert() {
    const dialogRef = this.dialog.open(AddCertificationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) {
      }else if(!result.error) {
        this.snackBar.open( "La certification a été ajoutée",'', {duration: 3000});
        this.editCert.getUser_certification().subscribe((data: any) => {
          this.certifications = data.data;
        })
      } else {
        this.snackBar.open("Erreur d'ajout'",'', {duration: 3000});
      }
    })

  }

  removeCert() {
    let id_certs = this.selection.selected.map(c => c.id_certification)
    this.editCert.remove_UserCert(id_certs , this.authService.Id).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open( "La certification a été supprimé",'', {duration: 3000});
        this.editCert.getUser_certification().subscribe((data: any) => {
          this.certifications = data.data;
        })
      } else {
        this.snackBar.open("Erreur de suppression'",'', {duration: 3000});
      }
    })
    this.selection = new SelectionModel<any>(true, []);
  }
}
