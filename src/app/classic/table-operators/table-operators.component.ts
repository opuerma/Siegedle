import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from 'src/app/Operator';
import { ServiceDailyOperatorService } from 'src/app/service-daily-operator.service';
import { ServiceGeneralFunctionsService } from 'src/app/service-general-functions.service';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

@Component({
  selector: 'app-table-operators',
  templateUrl: './table-operators.component.html',
  styleUrls: ['./table-operators.component.scss']
})
export class TableOperatorsComponent implements OnInit {
  
  operators: Operator[] = [];
  operatorsTried: Operator[] = [];
  todaysOperator: Operator;


  constructor(
    private serviceOperators: ServiceOperatorsService,
    public serviceFunctions: ServiceGeneralFunctionsService,
    private serviceDailyOperator: ServiceDailyOperatorService
    ) { }


  async ngOnInit() {
    //this.operatorsTried = await this.serviceOperators.getOperators();
    this.operatorsTried = await this.serviceOperators.getOperatorsTried();
    this.operators = await this.serviceOperators.getOperators();
    this.todaysOperator = this.serviceDailyOperator.getTodaysOperator();
  }


}
