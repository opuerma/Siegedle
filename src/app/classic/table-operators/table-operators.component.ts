import { Component } from '@angular/core';
import { Operator } from 'src/app/Operator';
import { ServiceGeneralFunctionsService } from 'src/app/service-general-functions.service';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

@Component({
  selector: 'app-table-operators',
  templateUrl: './table-operators.component.html',
  styleUrls: ['./table-operators.component.scss']
})
export class TableOperatorsComponent {
  operatorsTried: Operator[] = []
  todaysOperator: Operator;
  

  constructor(private serviceOperators: ServiceOperatorsService, public serviceFunctions: ServiceGeneralFunctionsService) {
    //this.operatorsTried = this.serviceOperators.getOperatorsTried();
    this.operatorsTried = this.serviceOperators.getOperators();
    this.todaysOperator = this.serviceOperators.getTodaysOperator();
  }


}
