import { TestBed, inject } from '@angular/core/testing';

import { ProjectSearchService } from './projectSearch.service';

describe('ProjectSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectSearchService]
    });
  });

  it('should be created', inject([ProjectSearchService], (service: ProjectSearchService) => {
    expect(service).toBeTruthy();
  }));
});
