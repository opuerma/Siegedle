import { Injectable } from '@angular/core';
import { ServiceOperatorsService } from './service-operators.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralFunctionsService {

  constructor() { }

  
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }


  // Return true if the 'val' exists in the array 'arr'
  findExactMatch(val: string, arr: string[]): boolean {
    const lowerCaseVal = val.toLowerCase();
    const match = arr.find(name => name.toLowerCase() === lowerCaseVal);

    //console.log('Does \'' + lowerCaseVal + '\' exist? ' + !!match);

    return !!match;
  }


  getArrayFromNumber(num: number): any[] {
    return Array(num).fill(0);
  }


  // Returns TRUE if both values are the same, if not it returns FALSE
  compareValues(val1: any, val2: any): boolean {
    if (typeof val1 === 'string' && typeof val2 === 'string') {
      return val1.toLowerCase() === val2.toLowerCase();
    }
    return val1 === val2;
  }



  // Return 0 if there is NO MATCH, return 1 if there is PARTIAL MATCH, return 2 if its perfect MATCH
  compareArrays(arr1: Array<string | number>, arr2: Array<string | number>): number {
    const set1 = new Set(arr1);
    const commonCount = arr2.reduce((count: number, value: string | number) => (set1.has(value) ? count + 1 : count), 0);
  
    if (commonCount === arr1.length && commonCount === arr2.length) {
      return 2;
    }
  
    return commonCount > 0 ? 1 : 0;
  }
  

  // Returns 0 if the operator season guessed is lower than the today's operator's
  // Returns 1 if they were both launched the same season
  // Returns 2 if the operator season guessed is bigger than the today's operator's
  compareSeasons(op1: [number, number], op2: [number, number]): number {
    if (op1[0] > op2[0]) {
      return 0;
    } else if (op1[0] < op2[0]) {
      return 2;
    } else {
      if (op1[1] > op2[1]) {
        return 0;
      } else if (op1[1] < op2[1]) {
        return 2;
      } else {
        return 1;
      }
    }
  }
  
  


}
