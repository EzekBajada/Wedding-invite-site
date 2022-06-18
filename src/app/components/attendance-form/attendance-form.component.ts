import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { GuestService } from '../../services/guest.service';
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from '../../models/NotificationMessage';
import { Guest } from '../../models/Guest';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AttendanceFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    numberOfGuests: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(11),
    ]),
  });

  @Output()
  formSubmittedSuccessfully = new EventEmitter<boolean>();

  @Output()
  inviteName = new EventEmitter<string | null>();

  isAttending: boolean = false;

  constructor(
    private guestService: GuestService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  toggleGuestForm(attendance: boolean) {
    this.isAttending = attendance;
  }

  get name() {
    return this.form.get('name');
  }

  get surname() {
    return this.form.get('surname');
  }

  get numberOfGuests() {
    return this.form.get('numberOfGuests');
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid || (this.name?.valid && !this.isAttending)) {
      let guest = <Guest>{
        name: this.name?.value,
        surname: this.surname?.value,
        isAttending: this.isAttending,
        numberOfGuests: this.numberOfGuests?.value
          ? 0
          : this.numberOfGuests?.value,
      };

      this.guestService.upsertGuest(guest).subscribe((guestUpserted) => {
        this.formSubmittedSuccessfully.emit(true);
        this.inviteName.emit(this.name?.value);
        this.form.reset();
      });
    } else {
      this.notificationService.sendMessage({
        message: 'Check form again before submitting!',
        type: NotificationType.error,
      });
    }
  }

  onCancel() {
    this.formSubmittedSuccessfully.emit(false);
    this.form.reset();
  }

  isRequiredError(controlToCheck: AbstractControl | null) {
    return (
      controlToCheck?.invalid &&
      (controlToCheck?.dirty || controlToCheck.touched)
    );
  }
}
