import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
})
export class FormConfirmationComponent implements OnInit {

  @Input()
  inviteName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
