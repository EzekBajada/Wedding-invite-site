import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: SocialUser = new SocialUser;
  resultMessage: string = '';

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    //some code
  }

  logInWithFacebook(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    this.authService.signIn(platform).then(
      (response) => {
        this.userData = response;
      },
      (error) => {
        console.log(error);
        this.resultMessage = error;
      });
  }

  signOut(): void {
    this.authService.signOut();
  }
}
