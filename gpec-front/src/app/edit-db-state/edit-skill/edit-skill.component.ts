import { Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EditSkillsService} from "../../services/edit-skills.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EditDbService} from "../../services/edit-db.service";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills: any;
  skill: any;
  categories: any;
  selectedCategorieCtr =  new FormControl('');

  constructor(private editSkillService: EditSkillsService,
              private editDBService: EditDbService,
              private snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.editSkillService.Categories.subscribe((data) => {
      this.selectedCategorieCtr = new FormControl(data[0].id_categorie)
      this.categories = data;
      this.editSkillService.getSkills(this.selectedCategorieCtr.value).subscribe((data) => {
        this.skills = data;
      })
    })

  }

  addSkill() {
   if(this.skills.map((c: any) => c.competence).includes(this.skill)) {
      this.snackBar.open("Cette compétence existe déja",'', {duration: 3000});
    }else if(this.skill === undefined || null || /^\s*$/.test(this.skill) ){
     this.snackBar.open("Categorie null",'', {duration: 3000});
   }else {

      this.editDBService.addSkill(this.skill, this.selectedCategorieCtr.value).subscribe((result: any )=> {
        if(!result.error) {
          this.snackBar.open("Une nouvelle compétence a été  ajouter",'', {duration: 3000});
          this.editSkillService.getSkills(this.selectedCategorieCtr.value).subscribe((data: any) => {
            this.skills = data;
          })
        }else {
          this.snackBar.open("Impossible d'ajouter cette compétence ",'', {duration: 3000});
        }
      })
    }

  }


  changeSkill() {
    this.editSkillService.getSkills(this.selectedCategorieCtr.value).subscribe((data) => {
      this.skills = data;
    })
  }
}
