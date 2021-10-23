import {Component} from '@angular/core';
import {Names} from './environment/globalVariables'
import {faChurch, faGlassCheers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string;
  secondName: string;
  faChurch: any = faChurch;
  faGlassCheers: any = faGlassCheers;
  constructor() {
    this.firstName = Names.firstName;
    this.secondName = Names.secondName;
  }

  onClick(name: string) {
    //this.buttonName = name;
  }
}
