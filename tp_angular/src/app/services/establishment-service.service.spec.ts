import { TestBed } from '@angular/core/testing';

import { EstablishmentService } from './establishment-service.service';

describe('EstablishmentServiceService', () => {
  let service: EstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
