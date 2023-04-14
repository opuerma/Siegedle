import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Operator } from './Operator';

@Injectable({
  providedIn: 'root'
})
export class ServiceOperatorsService {
  private _jsonURL = '../assets/operators.json';
  private operatorNames$ = new Subject<string[]>();
  private operatorsNameTried: string[] = [];
  private operators: Operator[] = [];
  private operatorsTried: Operator[] = [];

  private todaysOperator: Operator = {
    name: "Sledge",
    gender: "Male",
    affiliation: ["S.A.S."],
    squad: "Redhammer",
    side: "Attack",
    health: 3,
    speed: 1,
    release_year_irl: 2015,
    release_year: 0,
    release_season: 0,
    season_name: "Launch",
    role: ["Breach", "Anti-gadget"]
  }


  constructor(private http: HttpClient) {
    this.loadOperatorNames();
  }

  public getOperatorNames(): Observable<string[]> {
    return this.operatorNames$.asObservable();
  }

  private loadOperatorNames(): void {
    this.http.get<any[]>(this._jsonURL).pipe(
      tap(data => {
        //console.log('JSON data:', data)
        for(let op of data) {
          const operator: Operator = {
            name: op.name,
            gender: op.gender,
            affiliation: op.affiliation,
            squad: op.squad,
            side: op.side,
            health: op.health,
            speed: op.speed,
            release_year_irl: op.release_year_irl,
            release_year: op.release_year,
            release_season: op.release_season,
            season_name: op.season_name,
            role: op.role
          }
          this.operators.push(operator);
        }
      }),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    ).subscribe(data => {
      const operatorNames = data.map((operator: { name: string }) => operator.name);
      operatorNames.sort((a, b) => a.localeCompare(b));
      this.operatorNames$.next(operatorNames);
    });
  }


  addOperatorTried(op: string): void {
    this.operatorsNameTried.unshift(op.toLowerCase());
  
    for (const opName of this.operatorsNameTried) {
      const operator = this.operators.find(op => op.name.toLowerCase() === opName);
      if (operator && !this.operatorsTried.includes(operator)) {
        this.operatorsTried.unshift(operator);
      }
    }
  }
  

  getOperatorsNameTried(): string[] {
    return this.operatorsNameTried;
  }

  getOperatorsTried(): Operator[] {
    return this.operatorsTried;
  }

  getOperators(): Operator[] {
    return this.operators;
  }

  getTodaysOperator(): Operator {
    return this.todaysOperator;
  }

}
