import { TestBed, inject } from '@angular/core/testing';

import { AutGuardService } from './aut-guard.service';

describe('AutGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutGuardService]
    });
  });

  it('should be created', inject([AutGuardService], (service: AutGuardService) => {
    expect(service).toBeTruthy();
  }));
});
