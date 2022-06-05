import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/home/app.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
import { ToastrModule } from 'ngx-toastr';
import {
  faArrowUp19,
  faChampagneGlasses,
  faChurch,
  faCircleCheck,
  faICursor,
} from '@fortawesome/free-solid-svg-icons';
import { FormConfirmationComponent } from './components/form-confirmation/form-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AttendanceFormComponent,
    FormConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule1 {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(
      faArrowUp19,
      faICursor,
      faCircleCheck,
      faChurch,
      faChampagneGlasses
    );
  }
}
