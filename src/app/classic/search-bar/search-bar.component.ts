import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { ServiceGeneralFunctionsService } from 'src/app/service-general-functions.service';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  operatorsNameTried: string[] = [];
  operatorNames: string[] = [];
  coincidences: string[] = [];
  searchBar: string = '';

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('listContainer') listContainer: ElementRef;

  constructor (private serviceOperators: ServiceOperatorsService, private serviceFunctions: ServiceGeneralFunctionsService) { }
  
  ngOnInit(): void {
    this.serviceOperators.getOperatorNames().pipe(take(1)).subscribe(operatorNames => {
      this.operatorNames = operatorNames;
    });
  }


  search(): void {
    this.getFirstCoincidence();

    const operatorNamesLower = this.operatorNames.map(name => name.toLowerCase());
    const operatorsNameTriedLower = this.operatorsNameTried.map(name => name.toLowerCase());
    const searchBarLower = this.searchBar.toLowerCase();

    if (this.serviceFunctions.findExactMatch(searchBarLower, operatorNamesLower) && !this.serviceFunctions.findExactMatch(searchBarLower, operatorsNameTriedLower)) {
      
      this.operatorsNameTried.push(searchBarLower);
      this.serviceOperators.addOperatorTried(searchBarLower);
      this.updateSearchValue('');
      
    }
  }



  // Gets the first coincidence and puts it into the input search bar.
  getFirstCoincidence(): void {
    const [firstCoincidence] = this.coincidences;
    if (firstCoincidence) {
      this.searchBar = firstCoincidence;
      this.searchInput.nativeElement.focus();
    }
  }


  // We get this value from the search-list.component and put it in the input search bar.
  updateSearchValue(value: string): void {
    this.searchBar = value;
    this.searchInput.nativeElement.focus();
    this.coincidences.length = 0; // Clear the array to avoid showing the list
  }
  

  // Fills the array 'coincidences' with all the values from
  // the array 'arr' that start with the value 'val'
  findCoincidencesThatStartWith(val: string, arr: string[]) {
    if (val.length > 0) {
      const lowerVal = val.toLowerCase();
      this.coincidences = arr.filter(name => {
        const lowerName = name.toLowerCase();
        return lowerName.startsWith(lowerVal) && !this.operatorsNameTried.includes(lowerName);
      });
    } else {
      this.coincidences = [];
    }
  }


  // Return true if the input text value has any coincidences
  showList(): boolean {
    const { searchBar, coincidences } = this;
    return !!searchBar && !!coincidences?.length;
  }


}
