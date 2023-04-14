import { TestBed } from '@angular/core/testing';

import { ServiceGeneralFunctionsService } from './service-general-functions.service';

describe('ServiceGeneralFunctionsService', () => {
  let service: ServiceGeneralFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGeneralFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
