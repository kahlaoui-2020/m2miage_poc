import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {EditSkillsComponent} from "../edit-skills/edit-skills.component";
import {DialogSkillsComponent} from "../dialog-skills/dialog-skills.component";

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.css']
})
export class ListSkillsComponent implements OnInit {

  skills: any;
  displayedColumns: string[] = ["checked", "position", "skill",
    "level", "yearExp"];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.userSkills.subscribe((data) => {
      this.skills = data;
    })
  }

  check() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogSkillsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })

  }
}
