import { Component } from '@angular/core';
import { Operator } from 'src/app/Operator';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

@Component({
  selector: 'app-game-complete',
  templateUrl: './game-complete.component.html',
  styleUrls: ['./game-complete.component.scss']
})
export class GameCompleteComponent {
  operator: Operator;
  numberOfTries: number = 0;

  constructor(public serviceOperators: ServiceOperatorsService) {
    this.operator = this.serviceOperators.getChosenOperator();
    this.numberOfTries = this.serviceOperators.getOperatorsTried().length;
  }


}
