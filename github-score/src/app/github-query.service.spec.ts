import { TestBed, inject } from '@angular/core/testing';

import { GithubQueryService } from './github-query.service';

describe('GithubQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubQueryService]
    });
  });

  it('should be created', inject([GithubQueryService], (service: GithubQueryService) => {
    expect(service).toBeTruthy();
  }));
});
