import { TestBed } from '@angular/core/testing';

import { FakeauthService } from './fakeauth.service';

describe('FakeauthService', () => {
  let service: FakeauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
