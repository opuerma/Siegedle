import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Operator } from 'src/app/Operator';
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
  chosenOperator: Operator;

  @ViewChildren('containerTable') operatorTableRow!: QueryList<ElementRef>;


  constructor(
    private serviceOperators: ServiceOperatorsService,
    public serviceFunctions: ServiceGeneralFunctionsService
    ) { }


  async ngOnInit() {
    this.operatorsTried = await this.serviceOperators.getOperatorsTried();
    this.operators = await this.serviceOperators.getOperators();
    this.chosenOperator = await this.serviceOperators.getChosenOperator();
  }
  


}
