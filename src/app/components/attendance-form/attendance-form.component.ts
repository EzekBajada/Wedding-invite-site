import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import {faTextHeight, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';
import {GuestService} from "../../services/guest.service";

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
})
export class AttendanceFormComponent implements OnInit {
  // Icons
  faText = faTextHeight;
  faNumbers = faSortAmountUp

  form: FormGroup;

  @Output()
  isAttendingParent = new EventEmitter<boolean>();
  isAttending: boolean = false;

  constructor(private guestService: GuestService) {
    this.form = new FormGroup({
      name: new FormControl(),
      numberOfGuests: new FormControl()
    });
  }

  ngOnInit(): void {
    this.isAttendingParent.subscribe(x=> {
      this.isAttending = x
    })
  }

  toggleGuestForm(attendance: boolean) {
      this.isAttendingParent.emit(attendance);
  }

  onSubmit() {
    if(this.form.valid) {
      this.guestService.findGuest(this.form.get('name')?.value).subscribe(x=> {
          
      })
      this.form.reset()
    }
  }

  onCancel() {
    this.isAttendingParent.emit(false);
    this.form.reset()
  }
}
