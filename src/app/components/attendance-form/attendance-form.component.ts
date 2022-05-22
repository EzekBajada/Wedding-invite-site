import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
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
    name: new FormControl('', [
      Validators.required,
      this.surnameValidator(/\s[a-z]+/),
    ]),
    numberOfGuests: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(11),
    ]),
  });

  @Output()
  formSubmittedSuccessfully = new EventEmitter<boolean>();

  @Output()
  inviteName = new EventEmitter<string>();

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

  get numberOfGuests() {
    return this.form.get('numberOfGuests');
  }

  onSubmit() {
    this.form.markAllAsTouched();

    let nameSplit = this.name?.value.split(' ');
    if (this.form.valid || (this.name?.valid && !this.isAttending)) {
      let guest = <Guest>{
        name: nameSplit[0],
        surname: nameSplit[1],
        isAttending: this.isAttending,
        numberOfGuests:
          this.numberOfGuests?.value == '' ? 0 : this.numberOfGuests?.value,
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

  surnameValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isThereWordAfterSpace = regExp.test(control.value);
      return !isThereWordAfterSpace
        ? { noSurname: { value: control.value } }
        : null;
    };
  }

  get isRequiredError() {
    return (
      this.name?.invalid &&
      this.name?.errors &&
      this.name?.errors['required'] &&
      (this.name?.dirty || this.name?.touched)
    );
  }

  get noSurnameError() {
    return (
      this.name?.invalid &&
      this.name?.errors &&
      this.name?.errors['noSurname'] &&
      (this.name?.dirty || this.name?.touched)
    );
  }
}
