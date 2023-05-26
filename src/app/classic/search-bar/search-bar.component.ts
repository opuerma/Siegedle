import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Operator } from '../../Operator';
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
  chosenOperator: Operator;

  operators: Operator[];

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('listContainer') listContainer: ElementRef;

  constructor (
    private serviceOperators: ServiceOperatorsService,
    private serviceFunctions: ServiceGeneralFunctionsService
    ) { }

  async ngOnInit() {
    this.operators = await this.serviceOperators.getOperators();
    this.operatorNames = this.getOperatorNames();
    this.chosenOperator = await this.serviceOperators.getChosenOperator();
  }


  private getOperatorNames(): string[] {
    return this.operators.map(operator => operator.name);
  }


  // Gets the first coincidence and puts it into the input search bar.
  getFirstCoincidence(): void {
    const [firstCoincidence] = this.coincidences;
    if (firstCoincidence) {
      this.searchBar = firstCoincidence;
      this.searchInput.nativeElement.focus();
    }
  }


  compareAndAdd() {
    const searchBarLower = this.searchBar.toLowerCase();
    const operatorNamesLower = this.operatorNames.map(name => name.toLowerCase());
    const operatorAlreadyTried = this.serviceOperators.getOperatorsTried().find(operator => operator.name.toLowerCase() === searchBarLower);

    if (this.serviceFunctions.findExactMatch(searchBarLower, operatorNamesLower) && !operatorAlreadyTried) {
      
      this.serviceOperators.addOperatorTried(searchBarLower);
      this.updateSearchValue('');

      if (searchBarLower === this.chosenOperator.name.toLowerCase()) {
        this.serviceOperators.setGameOver(true);
      }
      
    }
  }


  search(): void {
    this.getFirstCoincidence();
    this.compareAndAdd();
  }


  // We get this value from the search-list.component and put it in the input search bar.
  updateSearchValue(value: string): void {
    this.searchBar = value;
    this.searchInput.nativeElement.focus();
    this.coincidences.length = 0; // Clear the array to avoid showing the list
  }
  

  // Fills the array 'coincidences' with all the operators that start with the value 'val'
  findCoincidencesThatStartWith(val: string) {
    if (val.length > 0) {
      const lowerVal = val.toLowerCase();
      this.coincidences = this.operatorNames.filter(name => {
        const lowerName = name.toLowerCase();
        return lowerName.startsWith(lowerVal) && !this.serviceOperators.getOperatorsTried().some(operator => operator.name.toLowerCase() === lowerName);
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
