import { Component, OnInit } from '@angular/core';
import {EditDbService} from "../../services/edit-db.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  requests: any[] = [];

  constructor(private editDBService: EditDbService,private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.editDBService.getAllRequets().subscribe((result: any) => {
      this.requests = result.data
      console.log(this.requests)
    })
  }

  removeRequest(id_request: any, index: number) {
    this.editDBService.removeRequest(id_request).subscribe((result: any) => {
      if(!result.error) {
        this.snackBar.open("La demande a été supprimée ",'', {duration: 3000});
        this.requests.splice(index, 1);
        console.log(this.requests)
        this.editDBService.change(this.requests.length)

      }else {
        this.snackBar.open("Erreur",'', {duration: 3000});
      }
    } )

  }
}
