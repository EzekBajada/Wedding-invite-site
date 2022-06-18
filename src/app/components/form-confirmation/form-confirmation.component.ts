import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
})
export class FormConfirmationComponent implements OnInit {
  @Input()
  inviteName: string | null = '';

  @Output()
  formConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onConfirmed() {
    this.formConfirmed.emit(false);
  }
}
