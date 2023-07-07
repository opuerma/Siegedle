import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOperatorsComponent } from './view-operators.component';

describe('ViewOperatorsComponent', () => {
  let component: ViewOperatorsComponent;
  let fixture: ComponentFixture<ViewOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
