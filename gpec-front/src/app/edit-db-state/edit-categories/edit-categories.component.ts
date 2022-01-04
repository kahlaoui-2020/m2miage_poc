import { Component, OnInit} from '@angular/core';
import {EditSkillsService} from "../../services/edit-skills.service";
import {EditDbService} from "../../services/edit-db.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit{

  categories!: any[];
  categorie!: string;
  constructor(private editSkillsService: EditSkillsService,
              private editDBService: EditDbService,
              private snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.editSkillsService.Categories.subscribe((data: any) => {
      this.categories = data;
    })



  }
  addCategorie() {
    if(this.categories.map(c => c.categorie).includes(this.categorie)) {
      this.snackBar.open("Cette catégorie existe déja",'', {duration: 3000});
    } else if(this.categorie === undefined || null || /^\s*$/.test(this.categorie) ){
      this.snackBar.open("Categorie null",'', {duration: 3000});
    }else {

      this.editDBService.addCategorie(this.categorie).subscribe((result: any )=> {
        if(!result.error) {
          this.snackBar.open("Une nouvelle catégorie a été  ajouter",'', {duration: 3000});
          this.editSkillsService.Categories.subscribe((data: any) => {
            this.categories = data;
          })
        }else {
          this.snackBar.open("Impossible d'ajouter la categorie ",'', {duration: 3000});
        }
      })
    }


  }
}


