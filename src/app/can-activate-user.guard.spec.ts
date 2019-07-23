import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateUserGuard } from './can-activate-user.guard';

describe('CanActivateUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateUserGuard]
    });
  });

  it('should ...', inject([CanActivateUserGuard], (guard: CanActivateUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
