import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from 'src/app/Operator';
import { ServiceGeneralFunctionsService } from 'src/app/service-general-functions.service';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

@Component({
  selector: 'app-table-operators',
  templateUrl: './table-operators.component.html',
  styleUrls: ['./table-operators.component.scss']
})
export class TableOperatorsComponent implements OnInit {
  
  operators: Operator[] = [];
  operatorsTried: Operator[] = [];
  chosenOperator: Operator;

  @ViewChildren('containerTable') operatorTableRow!: QueryList<ElementRef>;


  constructor(
    private serviceOperators: ServiceOperatorsService,
    public serviceFunctions: ServiceGeneralFunctionsService
    ) { }


  async ngOnInit() {
    this.operatorsTried = await this.serviceOperators.getOperatorsTried();
    this.operators = await this.serviceOperators.getOperators();
    this.chosenOperator = await this.serviceOperators.getChosenOperator();
  }


  ngAfterViewInit() {
    this.operatorTableRow.changes.subscribe(() => {
      const ultimoContenedor = this.operatorTableRow.last;
      if (ultimoContenedor) {
        ultimoContenedor.nativeElement.classList.add('animar');
        const elementos = ultimoContenedor.nativeElement.querySelectorAll('.table-content');
        let delay = 0;
        elementos.forEach((elemento: HTMLElement, index: number) => {
          elemento.style.animationDelay = `${delay + index * 0.1}s`;
        });
      }
    });
  }
  


}
