import { Component } from '@angular/core';
import { ServiceGeneralFunctionsService } from 'src/app/service-general-functions.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  constructor (public serviceGeneralFunctions: ServiceGeneralFunctionsService) {}

}
