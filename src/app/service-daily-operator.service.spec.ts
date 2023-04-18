import { TestBed } from '@angular/core/testing';

import { ServiceDailyOperatorService } from './service-daily-operator.service';

describe('ServiceDailyOperatorService', () => {
  let service: ServiceDailyOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDailyOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
