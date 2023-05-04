import { TestBed } from '@angular/core/testing';

import { LlamadaApiRestService } from './llamada-api-rest.service';

describe('LlamadaApiRestService', () => {
  let service: LlamadaApiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
