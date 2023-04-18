import { Injectable } from '@angular/core';
import { Operator } from './Operator';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDailyOperatorService {
  todaysOperator: Operator;
  gameOver: boolean = false;
  gameOverSubject = new BehaviorSubject<boolean>(this.gameOver);

  constructor() {
    //this.todaysOperator = null;
  }

  getTodaysOperator(): Operator {
    return this.todaysOperator;
  }

  
  setGameOver(value: boolean) {
    this.gameOver = value;
    this.gameOverSubject.next(this.gameOver);
  }

  getGameOver() {
    return this.gameOverSubject.asObservable();
  }

}
