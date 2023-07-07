import { Component } from '@angular/core';
import { ServiceGeneralFunctionsService } from '../service-general-functions.service';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent {

  constructor (public serviceGeneralFunctions: ServiceGeneralFunctionsService) {}

}
