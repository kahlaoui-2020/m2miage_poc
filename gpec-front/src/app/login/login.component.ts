import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    passwd: new FormControl(''),
  });

  // @ts-ignore
  @Input() error: string | null;


  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.authService.checkAuth(this.form.value).subscribe((result) => {
      console.log(result)
      if(result) {

        this.authService.Logged = true;
        this.authService.Id = result.id_utilisateur
        this.authService.Profil = result.profil
        this.route.navigate(['home']);
      }
    })

  }

}
