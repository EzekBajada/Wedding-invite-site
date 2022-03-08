import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./components/home/app.component";
import {RsvpComponent} from "./components/rsvp/rsvp.component";
import {AttendanceFormComponent} from "./components/attendance-form/attendance-form.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent},
  { path: 'rsvp', component: RsvpComponent},
  { path: 'form', component: AttendanceFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
