import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EditSkillsService} from "../../services/edit-skills.service";
import {EditDbService} from "../../services/edit-db.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EditCertificationService} from "../../services/edit-certification.service";

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.css']
})
export class EditCertificationComponent implements OnInit {
  certifications: any;
  organismes: any;
  selectedCertificationCtr: any;
  myform = new FormGroup({
    organisme: new FormControl(''),
    titule: new FormControl('')

  });
  selectedOrg!: string;

  constructor(private editCertService: EditCertificationService,
              private editSkillService: EditSkillsService,
              private editDBService: EditDbService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.editCertService.Organismes.subscribe((result: any) => {
      this.organismes = result.data
    })
    this.editCertService.Certifications.subscribe((result: any) => {
      this.certifications = result.data
    })
  }

  addCertification() {
    this.editDBService.addCertification(this.myform.value).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open("Une nouvelle certification a été  ajouter",'', {duration: 3000});
        this.editCertService.Certifications.subscribe((data: any) => {
          this.certifications = data.data;
          this.selectedOrg = ''
        })
      }else {
        console.log(this.myform.value);
        this.snackBar.open("Impossible d'ajouter cette certification ",'', {duration: 3000});
      }
    })
  }
  getCerts() {
    this.editCertService.getCertifications(this.selectedOrg).subscribe((result: any) => {
      this.certifications = result.data
    })
  }
  getAllCerts() {
    this.editCertService.Certifications.subscribe((result: any) => {
      this.certifications = result.data
    })
    this.selectedOrg = ''

  }
}
