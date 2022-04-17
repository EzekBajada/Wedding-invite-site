import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/home/app.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import {FormConfirmationComponent} from "./components/form-confirmation/form-confirmation.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'form', component: AttendanceFormComponent },
  { path: 'confirm', component: FormConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
