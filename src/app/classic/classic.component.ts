import { Component } from '@angular/core';
import { ServiceOperatorsService } from '../service-operators.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {
  
  gameOver: boolean = false;


  constructor(private serviceOperator: ServiceOperatorsService) { }


  ngOnInit() {
    this.serviceOperator.getGameOver().subscribe(value => {
      this.gameOver = value;
    });
  }


}
