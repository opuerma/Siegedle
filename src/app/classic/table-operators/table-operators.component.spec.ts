import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOperatorsComponent } from './table-operators.component';

describe('TableOperatorsComponent', () => {
  let component: TableOperatorsComponent;
  let fixture: ComponentFixture<TableOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
