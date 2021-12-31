import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EditCertificationService} from "../services/edit-certification.service";
import {EditSkillsService} from "../services/edit-skills.service";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-edit-db-state',
  templateUrl: './edit-db-state.component.html',
  styleUrls: ['./edit-db-state.component.css']
})
export class EditDbStateComponent implements OnInit{

  categories!: any[];
  skills!: any[];
  certifications!: any[];
  tabIndex = 0;
  constructor(private editCertService: EditCertificationService,
              private editSkillsService: EditSkillsService) { }

  ngOnInit(): void {

    this.editSkillsService.Categories.subscribe((data: any) => {
      this.categories = data;
    })
    this.editCertService.Certifications.subscribe((data: any) => {
      this.certifications = data.data;
    })

  }

  changeTab(event: MatTabChangeEvent) {
    this.tabIndex = event.index
  }
}
