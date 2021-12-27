import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EditSkillsService} from "../services/edit-skills.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.css']
})
export class UpdateSkillsComponent implements OnInit {

  skills!: any;
  levels!: any;
  formGroup!: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateSkillsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private editSkillsService: EditSkillsService,
              private userService: UserService,
              private authService: AuthService,
              private  formBuilder: FormBuilder) {
    this.skills = data;
  }

  ngOnInit(): void {
    this.editSkillsService.Levels.subscribe(data => {
      this.levels = data;
    });
    console.log(this.levels)
    this.formGroup = this.formBuilder.group({
      id_utilisateur: this.authService.Id,
      skills: this.formBuilder.array(this.createSkills())
    })
  }

  createSkills() {
    let lists: FormGroup[] = []
    this.skills.forEach((skill: any) => {
      lists.push(
        this.formBuilder.group({
          id_competence: skill.id_competence,
          val_niveau: skill.val_niveau,
          nb_experience: skill.nb_experience
        })
      )
    })
    return  lists
  }




  log(data: any) {
    console.log(data)
  }

  submitform(value: any) {
    this.userService.updateSkills(value).subscribe((result: any) => {
      this.dialogRef.close({error: result.error, data: result.message})
    })

  }
}
