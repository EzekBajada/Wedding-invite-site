import {Component} from '@angular/core';
import {weddingInfo} from '../environment/models'
import {faChurch, faGlassCheers} from '@fortawesome/free-solid-svg-icons';
import {GuestService} from "../services/guest.service";
import {Guest} from "../models/Guest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weddingInfo: any;
  faChurch: any = faChurch;
  faGlassCheers: any = faGlassCheers;
  guests: Guest[] = [];

  constructor(private guestService: GuestService) {
    this.weddingInfo = weddingInfo;
    this.guestService.getAllGuests().subscribe((guests)=> {
      this.guests = guests;
    })
  }

  onClick(name: string) {
    //this.buttonName = name;
  }
}
