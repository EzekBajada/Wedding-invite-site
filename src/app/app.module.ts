import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './home-component/app.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { FacebookConfig } from "./environment/models";
import { LoginComponent } from './login-component/login.component';
import {RouterModule} from "@angular/router";
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { RsvpComponent } from './rsvp/rsvp.component';
import {MatDialogModule} from '@angular/material/dialog';

let config = new AuthServiceConfig([
{
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(FacebookConfig.AppId)
}
]);

export function provideConfig()
{
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule.initialize(config),
    RouterModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule1 { }
