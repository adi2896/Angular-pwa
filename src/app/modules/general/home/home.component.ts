import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Feature } from './feature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Array<Feature>;

  constructor() {

    this.features =
      [
        {
          name: 'Service Risks',
          description: '',
          icon: 'SummarySR.PNG',
          link: 'bootstrap',
          image: '<img src="./assets/params/images/SummarySR.PNG" class="img-fluid">'
        },
        {
          name: 'Awaiting Response',
          description: '',
          icon: "AwaitingCusRes.PNG",
          link: 'components',
          image: '<img src="./assets/params/images/AwaitingCusRes.PNG" class="img-fluid">'
        },
        {
          name: 'Open SRs',
          description: '',
          icon: "OpenSR.PNG",
          link: 'components',
          image: '<img src="./assets/params/images/AwaitingCusRes.PNG" class="img-fluid">'
        },
        {
          name: 'Escalations',
          description: '',
          icon: "Escalations.PNG",
          link: 'components',
          image: '<img src="./assets/params/images/AwaitingCusRes.PNG" class="img-fluid">'
        },
      ];
  }


}
