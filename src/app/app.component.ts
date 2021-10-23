import {Component} from '@angular/core';
import {Names} from './environment/globalVariables'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string;
  secondName: string;

  constructor() {
    this.firstName = Names.firstName;
    this.secondName = Names.secondName;
  }

  onClick(name: string) {
    //this.buttonName = name;
  }
}
