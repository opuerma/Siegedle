import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Operator } from './Operator';
import { ServiceDailyOperatorService } from './service-daily-operator.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceOperatorsService {
  private _jsonURL = '../assets/operators.json';
  private operators: Operator[] = [];
  private operatorsTried: Operator[] = [];
  //todaysOperator: Operator;


  constructor(private http: HttpClient, private serviceDailyOperator: ServiceDailyOperatorService) { }

  async getOperators(): Promise<Operator[]> {
    if (this.operators && this.operators.length > 0) {
      return this.operators;
    } else {
      const operators = await firstValueFrom(this.http.get<Operator[]>(this._jsonURL));
      this.operators = operators;

      //this.todaysOperator = this.operators[Math.floor(Math.random() * this.operators.length)];
      if (!this.serviceDailyOperator.getTodaysOperator()) {
        this.serviceDailyOperator.todaysOperator = this.operators[Math.floor(Math.random() * this.operators.length)];
      }
      
      return operators;
    }
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


}
