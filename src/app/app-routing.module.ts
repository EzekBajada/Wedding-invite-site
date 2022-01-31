import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login-component/login.component";
import {AppComponent} from "./home-component/app.component";
import {RsvpComponent} from "./rsvp/rsvp.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent},
  { path: 'rsvp', component: RsvpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
