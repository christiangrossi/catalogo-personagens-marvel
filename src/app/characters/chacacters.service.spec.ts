import { TestBed } from '@angular/core/testing';

import { ChacactersService } from './chacacters.service';

describe('ChacactersService', () => {
  let service: ChacactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChacactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
