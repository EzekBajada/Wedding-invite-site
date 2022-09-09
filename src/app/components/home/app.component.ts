import { Component } from '@angular/core';
import { weddingInfo } from '../../models/constants/environment';
import { WeddingInfo } from '../../models/WeddingInfo';
import { MoveDirection, OutMode, Container, Engine, RotateDirection, StartValueType, DestroyType } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  weddingInfo: WeddingInfo;
  rsvpTriggered: boolean = false;
  formSubmittedSuccessfully: boolean = false;
  inviteName: string | null = '';
  id = "tsparticles";

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

  particlesOptions = {
    "fullScreen": {
      "zIndex": 1
    },
    "particles": {
      "number": {
        "value": 0
      },
      "color": {
        "value": [
          "#00FFFC",
          "#FC00FF",
          "#fffc00"
        ]
      },
      "shape": {
        "type": "circle",
        "options": {}
      },
      "opacity": {
        "value": 1,
        "animation": {
          "enable": true,
          "minimumValue": 0,
          "speed": 2,
          "startValue": StartValueType.max,
          "destroy": DestroyType.max
        }
      },
      "size": {
        "value": 4,
        "random": {
          "enable": true,
          "minimumValue": 2
        }
      },
      "links": {
        "enable": false
      },
      "life": {
        "duration": {
          "sync": true,
          "value": 5
        },
        "count": 1
      },
      "move": {
        "enable": true,
        "gravity": {
          "enable": true,
          "acceleration": 10
        },
        "speed": {
          "min": 10,
          "max": 20
        },
        "decay": 0.1,
        "direction": MoveDirection.none,
        "straight": false,
        "outModes": {
          "default": OutMode.destroy,
          "top":  OutMode.none
        }
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": RotateDirection.random,
        "move": true,
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "move": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 25
        },
        "enable": true,
        "speed": {
          "min": 15,
          "max": 25
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "move": true,
        "speed": {
          "min": -15,
          "max": 15
        }
      }
    },
    "emitters": {
      "life": {
        "count": 0,
        "duration": 0.1,
        "delay": 0.4
      },
      "rate": {
        "delay": 0.1,
        "quantity": 150
      },
      "size": {
        "width": 0,
        "height": 0
      }
    }
  }


  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
