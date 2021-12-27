import { Component, OnInit } from '@angular/core';
import {EditSkillsService} from "../services/edit-skills.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatListOption} from "@angular/material/list";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-skills',
  templateUrl: './dialog-skills.component.html',
  styleUrls: ['./dialog-skills.component.css']
})
export class DialogSkillsComponent implements OnInit {

  categories: any[] = [];
  skills: any[] = [];
  selectedCategorieCtr =  new FormControl('');
  selectedLevelCtr =  new FormControl();

  formGroup!: FormGroup;


  levels: any[] = [];
  selectedSkills: any[] = [];

  arrayForm: any[] = [];



  constructor(private dialogRef: MatDialogRef<DialogSkillsComponent>,
              private editSkillsService: EditSkillsService,
              private userService: UserService,
              private authService: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editSkillsService.Categories.subscribe((data) => {
      this.selectedCategorieCtr = new FormControl(data[0].id_categorie)
      this.categories = data;
    })
    this.formGroup = this.formBuilder.group({
      id_utilisateur: this.authService.Id,
      id_categorie: 0,
      skills: this.formBuilder.array([])

    })

  }

  getSkills(): void {
    this.editSkillsService.getSkills(this.selectedCategorieCtr.value).subscribe((data) => {
      this.skills =  data;
    })
  }

  getLevels(): void {
    this.editSkillsService.Levels.subscribe((data) => {
      this.selectedLevelCtr = new FormControl(data[0].id_level)
      this.levels =  data;
    });
   this.initFormGroup();

  }

  private initFormGroup() {
    this.formGroup = this.formBuilder.group({
      id_utilisateur: this.authService.Id,
      id_categorie: this.selectedSkills[0].id_categorie,
      skills: this.formBuilder.array(this.createSKills())
    })
  }
  createSKills(): FormGroup[] {
    let lists: FormGroup[] = []
    this.selectedSkills.forEach(skill => {
      lists.push(
        this.formBuilder.group({
          id_competence: skill.id_competence,
          competence: skill.competence,
          val_niveau: 0,
          nb_experience: 0
        })
      )
    })
    return  lists

  }
  get formData() {
    return <FormArray>this.formGroup.get('skills');
  }

  submitForm(data: any) {
    this.userService.setSkills(data).subscribe((result: any) => {
      this.dialogRef.close({error: result.error, data: data.skills})
    });
  }

  selectedLevels(e: any) {
    this.selectedSkills = e._value;

  }



}
