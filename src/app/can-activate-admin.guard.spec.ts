import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateAdminGuard } from './can-activate-admin.guard';

describe('CanActivateAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAdminGuard]
    });
  });

  it('should ...', inject([CanActivateAdminGuard], (guard: CanActivateAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
