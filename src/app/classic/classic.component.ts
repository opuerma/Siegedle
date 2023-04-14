import { Component } from '@angular/core';
import { Operator } from '../Operator';
import { ServiceOperatorsService } from '../service-operators.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {

  constructor(private serviceOperators: ServiceOperatorsService) { }

}
