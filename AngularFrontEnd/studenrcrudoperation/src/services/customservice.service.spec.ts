import { TestBed } from '@angular/core/testing';

import { CustomserviceService } from './customservice.service';

describe('CustomserviceService', () => {
  let service: CustomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
