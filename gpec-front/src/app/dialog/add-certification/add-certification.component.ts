import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AddSkillsComponent} from "../add-skills/add-skills.component";
import {EditCertificationService} from "../../services/edit-certification.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {

  certifications!: any;
  selectedCert!: any;
  form = new FormGroup({
    mat_certification: new FormControl(''),
    score: new FormControl(''),
    date_d: new FormControl(''),
    date_f: new FormControl(''),

  });

  constructor(private dialogRef: MatDialogRef<AddSkillsComponent>,
              private editCert: EditCertificationService) { }

  ngOnInit(): void {
    this.editCert.Certifications.subscribe((result: any) => {
      console.log(result)
      this.certifications = result.data
    })

  }


  selectCert(e: any) {
    this.selectedCert = e[0]._value;
  }

  onSubmit() {
    let value = this.form.value
    value.id_certification = this.selectedCert.id_certification
    this.editCert.setUser_certification(value).subscribe((result: any) => {
      this.dialogRef.close({error: result.error})
    })


  }
}
