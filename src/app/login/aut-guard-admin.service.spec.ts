import { TestBed, inject } from '@angular/core/testing';

import { AutGuardAdminService } from './aut-guard-admin.service';

describe('AutGuardAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutGuardAdminService]
    });
  });

  it('should be created', inject([AutGuardAdminService], (service: AutGuardAdminService) => {
    expect(service).toBeTruthy();
  }));
});
