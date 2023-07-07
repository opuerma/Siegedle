import { Component, OnInit } from '@angular/core';
import { ServiceGeneralFunctionsService } from '../service-general-functions.service';
import { ServiceOperatorsService } from '../service-operators.service';
import { Operator } from '../Operator';

@Component({
  selector: 'app-view-operators',
  templateUrl: './view-operators.component.html',
  styleUrls: ['./view-operators.component.scss']
})
export class ViewOperatorsComponent implements OnInit {
  operators: Operator[];

  constructor (public serviceGeneralFunctions: ServiceGeneralFunctionsService, private serviceOperators: ServiceOperatorsService) {}

  async ngOnInit() {
    this.operators = await this.serviceOperators.getOperators();

    this.operators.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

}
