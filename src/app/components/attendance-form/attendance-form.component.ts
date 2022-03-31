import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import {
  faTextHeight,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';
import { GuestService } from '../../services/guest.service';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
})
export class AttendanceFormComponent implements OnInit {
  // Icons
  faText = faTextHeight;
  faNumbers = faSortAmountUp;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numberOfGuests: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(11),
    ]),
  });

  @Output()
  isAttendingParent = new EventEmitter<boolean>();

  isAttending: boolean = false;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {}

  toggleGuestForm(attendance: boolean) {
    this.isAttending = attendance;
  }

  get name() {
    return this.form.get('name');
  }

  get numberOfGuests() {
    return this.form.get('numberOfGuests');
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid || (this.name?.valid && !this.isAttending)) {
      this.guestService
        .findGuest(this.form.get('name')?.value)
        .subscribe((x) => {});
      this.form.reset();
      this.isAttendingParent.emit(this.isAttending);
    }
  }

  onCancel() {
    this.isAttendingParent.emit(false);
    this.form.reset();
  }
}
