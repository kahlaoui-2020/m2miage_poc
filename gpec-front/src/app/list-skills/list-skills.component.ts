import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogSkillsComponent} from "../dialog-skills/dialog-skills.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SelectionModel} from "@angular/cdk/collections";
import {AuthService} from "../services/auth.service";
import {UpdateSkillsComponent} from "../update-skills/update-skills.component";

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.css']
})
export class ListSkillsComponent implements OnInit {

  skills!: any[];
  displayedColumns: string[] = ["checked", "skill",
    "level", "yearExp"];
  selection = new SelectionModel<any>(true, []);

  constructor(private snackBar: MatSnackBar,
              private userService: UserService,
              private authService: AuthService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.userSkills.subscribe((data) => {
      this.skills = data;
      console.log(data)
    })
  }

  check() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogSkillsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) {

      } else if(!result.error) {
        this.snackBar.open("compétences ajouté avec succées",'', {duration: 3000});
        this.userService.userSkills.subscribe((data) => {
          this.skills = data;
        })
      } else {
        this.snackBar.open("Erreur: compétences n'est pas ajouté",'', {duration: 3000});
      }
    })

  }

  removeSkills() {
    let data = {
      id_utilisateur: this.authService.Id,
      id_competences: this.selection.selected.map(s => s.id_competence)

    };
    this.userService.removeSkills(data).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open("Compétences supprimer avec succées",'', {duration: 3000});
        this.userService.userSkills.subscribe((data) => {
          this.skills = data;
        })
      }else {
        this.snackBar.open("Impossible de supprimer les compétences selectionné",'', {duration: 3000});

      }
    })
  }

  updateSkills() {
    let ids = this.selection.selected.map(s => s.id_competence);
    if(ids.length) {
      let data = this.skills.filter(s => {
        if(ids.includes(s.id_competence))
          return s;
      })
      const dialogRef = this.dialog.open(UpdateSkillsComponent, {
        data: data
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result === undefined) {
          console.log(this.selection.selected)
        } else if(!result.error) {
          this.snackBar.open( "mise à jour avec succée",'', {duration: 3000});
          this.userService.userSkills.subscribe((data) => {
            this.skills = data;
          })
        } else {
          this.snackBar.open("Erreur de mise à jour",'', {duration: 3000});
        }
        this.selection = new SelectionModel<any>(true, []);
      })
    }else {
      this.snackBar.open("Sélectionner un/des compétences avant de poursuivre l'action",'', {duration: 3000});

    }




  }
}
