import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  @Input() profil!: string;
  user!: User;
  imageurl!: SafeUrl;
  imageDefault = 'assets/images/profil.png';

  constructor(private userService: UserService, private domSanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
      this.user = user
      console.log(user)

    })


  }

  base64ToImage(data: any) {
    let TYPED_ARRAY = new Uint8Array(data);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
      return data + String.fromCharCode(byte)
    }, '');
    let base64String = btoa(STRING_CHAR);
    this.imageurl = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + base64String)
  }
}
