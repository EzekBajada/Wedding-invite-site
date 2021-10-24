import {Component} from '@angular/core';
import {weddingInfo} from './environment/models'
import {faChurch, faGlassCheers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weddingInfo: any;
  faChurch: any = faChurch;
  faGlassCheers: any = faGlassCheers;
  constructor() {
    this.weddingInfo = weddingInfo;
  }

  onClick(name: string) {
    //this.buttonName = name;
  }
}
