import { TestBed } from '@angular/core/testing';

import { UserRegisrationService } from './user-regisration.service';

describe('UserRegisrationService', () => {
  let service: UserRegisrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
