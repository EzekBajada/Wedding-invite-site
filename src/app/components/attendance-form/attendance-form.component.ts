import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faSortAmountUp, faTextHeight,} from '@fortawesome/free-solid-svg-icons';
import {GuestService} from '../../services/guest.service';
import {NotificationService} from "../../services/notification.service";
import {NotificationType} from "../../models/NotificationMessage";

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

  constructor(private guestService: GuestService, private notificationService: NotificationService) {}

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
    } else {
      this.notificationService.sendMessage({
        message: "Check form again before submitting!",
        type: NotificationType.error
      })
    }
  }

  onCancel() {
    this.isAttendingParent.emit(false);
    this.form.reset();
  }
}
