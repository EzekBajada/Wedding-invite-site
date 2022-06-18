import { Component } from '@angular/core';
import { weddingInfo } from '../../models/constants/environment';
import { WeddingInfo } from '../../models/WeddingInfo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  weddingInfo: WeddingInfo;
  rsvpTriggered: boolean = false;
  formSubmittedSuccessfully: boolean = false;
  inviteName: string | null = '';

  constructor() {
    this.weddingInfo = weddingInfo;
  }

  onClick() {
    this.rsvpTriggered = !this.rsvpTriggered;
  }

  formSubmitted(status: boolean) {
    this.rsvpTriggered = false;
    this.formSubmittedSuccessfully = status;
  }

  inviteNameChanged(name: string | null) {
    this.inviteName = name;
  }
}
