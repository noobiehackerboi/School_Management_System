import { TestBed } from '@angular/core/testing';

import { AuthStaffService } from './auth-staff.service';

describe('AuthStaffService', () => {
  let service: AuthStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
