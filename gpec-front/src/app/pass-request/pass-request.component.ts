import { Component, OnInit } from '@angular/core';
import {EditDbService} from "../services/edit-db.service";
import {FormControl} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-pass-request',
  templateUrl: './pass-request.component.html',
  styleUrls: ['./pass-request.component.css']
})
export class PassRequestComponent implements OnInit {
  cert  = new FormControl();
  skill = new FormControl();

  constructor(private editDB: EditDbService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  passSkill() {
    this.editDB.passSkillRequest(this.skill.value).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open("Votre demande a été envoyé",'', {duration: 3000});

      }else {
        this.snackBar.open("Votre demande n'a pas pu être envoyé",'', {duration: 3000});
      }
      this.skill.reset()
    })
  }

  passCert() {
    this.editDB.passCertRequest(this.cert.value).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open("Votre demande a été envoyé",'', {duration: 3000});

      }else {
        this.snackBar.open("Votre demande n'a pas pu être envoyé",'', {duration: 3000});
      }
      this.cert.reset()
    })
  }

}
