import { TestBed } from '@angular/core/testing';

import { BlogPostListingService } from './blog-post-listing.service';

describe('BlogPostListingService', () => {
  let service: BlogPostListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
