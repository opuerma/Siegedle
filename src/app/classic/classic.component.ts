import { Component } from '@angular/core';
import { Operator } from '../Operator';
import { ServiceDailyOperatorService } from '../service-daily-operator.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {

  operators: Operator[] = [];
  todaysOperator: Operator;
  gameOver: boolean = false;


  constructor(private serviceDailyOperator: ServiceDailyOperatorService) { }


  ngOnInit() {
    this.serviceDailyOperator.getGameOver().subscribe(value => {
      this.gameOver = value;
    });
  }


}
