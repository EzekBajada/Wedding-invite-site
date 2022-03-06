import {Component} from '@angular/core';
import {weddingInfo} from '../environment/models'
import {GuestService} from "../services/guest.service";
import {Guest} from "../models/Guest";
import {RsvpAction} from "../models/enums";
import {WeddingInfo} from "../models/WeddingInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weddingInfo: WeddingInfo;
  rsvpTriggered: boolean = false;
  guests: Guest[] = [];

  constructor(private guestService: GuestService) {
    this.weddingInfo = weddingInfo;
    this.guestService.getAllGuests().subscribe((guests)=> {
      this.guests = guests;
    })
  }

  onClick(rsvpAction: RsvpAction) {
    switch (rsvpAction) {
      case RsvpAction.Trigger:
        this.rsvpTriggered = !this.rsvpTriggered;break;
      case RsvpAction.Submit:
        this.rsvpTriggered = !this.rsvpTriggered;break;
    }
  }
}
