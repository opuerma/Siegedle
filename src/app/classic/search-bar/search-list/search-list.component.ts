import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
  @Input()
  coincidences: string[];

  @Output()
  valueSelected = new EventEmitter<string>();

  // We pass this info to the search-bar.component.
  // It's basically the Operator of the div we click
  // from the list of coincidences
  moveIntoInput(op: string) {
    this.valueSelected.emit(op);
  }

}
