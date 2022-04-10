import { Component } from '@angular/core';
import { weddingInfo } from '../../environment/environment';
import { RsvpAction } from '../../models/enums';
import { WeddingInfo } from '../../models/WeddingInfo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  weddingInfo: WeddingInfo;
  rsvpTriggered: boolean = false;
  formSubmittedSuccessfully: boolean = false;
  inviteName: string = '';

  constructor() {
    this.weddingInfo = weddingInfo;
  }

  onClick(rsvpAction: RsvpAction) {
    switch (rsvpAction) {
      case RsvpAction.Trigger:
        this.rsvpTriggered = !this.rsvpTriggered;
        break;
      case RsvpAction.Submit:
        this.rsvpTriggered = !this.rsvpTriggered;
        break;
    }
  }

  formSubmitted(status: boolean) {
    this.rsvpTriggered = false;
    this.formSubmittedSuccessfully = status;
  }

  inviteNameChanged(name: string){
    this.inviteName = name;
  }
}
