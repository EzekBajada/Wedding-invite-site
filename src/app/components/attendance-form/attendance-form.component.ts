import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Attendance} from "../../models/enums";

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
})
export class AttendanceFormComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      numberOfGuests: new FormControl(),
      attendance: new FormControl((Attendance.Yes.toString()))
    });
  }

  ngOnInit(): void {
  }

}
