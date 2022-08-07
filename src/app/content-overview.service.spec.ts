import { TestBed } from '@angular/core/testing';

import { ContentOverviewService } from './content-overview.service';

describe('ContentOverviewService', () => {
  let service: ContentOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
