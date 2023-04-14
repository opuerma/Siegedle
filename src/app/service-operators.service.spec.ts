import { TestBed } from '@angular/core/testing';

import { ServiceOperatorsService } from './service-operators.service';

describe('ServiceOperatorsService', () => {
  let service: ServiceOperatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOperatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
