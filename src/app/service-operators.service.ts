import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { Operator } from './Operator';

@Injectable({
  providedIn: 'root'
})
export class ServiceOperatorsService {
  private _jsonURL = '../assets/operators.json';
  private operators: Operator[] = [];
  private operatorsTried: Operator[] = [];
  private chosenOperator: Operator;
  gameOver: boolean = false;
  gameOverSubject = new BehaviorSubject<boolean>(this.gameOver);


  constructor(private http: HttpClient) { }

  async getOperators(): Promise<Operator[]> {
    if (this.operators && this.operators.length > 0) {
      return this.operators;
    } else {
      const operators = await firstValueFrom(this.http.get<Operator[]>(this._jsonURL));
      this.operators = operators;

      if (!this.chosenOperator) {
        this.chosenOperator = this.operators[Math.floor(Math.random() * this.operators.length)];
      }
      
      return operators;
    }
  }


  getChosenOperator(): Operator {
    console.log(this.chosenOperator);
    return this.chosenOperator;
  }


  addOperatorTried(op: string): void {
    const operator = this.operators.find(operator => operator.name.toLowerCase() === op);

    if(operator) {
      if (!this.getOperatorsTried().find(operator => operator.name.toLowerCase() === op)) {
        this.operatorsTried.unshift(operator);
      }
    }
    
  }


  getOperatorsTried(): Operator[] {
    return this.operatorsTried;
  }


  setGameOver(value: boolean): void {
    this.gameOver = value;
    this.gameOverSubject.next(this.gameOver);
  }


  getGameOver(): Observable<boolean> {
    return this.gameOverSubject.asObservable();
  }

  
}
