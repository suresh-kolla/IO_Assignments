import { TestBed } from '@angular/core/testing';

import { UpdteService } from './updte.service';

describe('UpdteService', () => {
  let service: UpdteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
