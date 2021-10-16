import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string;
  secondName: string;
  buttonName: string = 'RSVP';

  constructor() {
    this.firstName = 'SYLVANA ZAHRA';
    this.secondName = 'EZEKIEL BAJADA';
  }

  onClick(name: string) {
    this.buttonName = name;
  }
}
