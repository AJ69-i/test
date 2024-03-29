import { TestBed } from '@angular/core/testing';

import { BlogPostsInterceptor } from './blog-posts.interceptor';

describe('BlogPostsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BlogPostsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BlogPostsInterceptor = TestBed.inject(BlogPostsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
