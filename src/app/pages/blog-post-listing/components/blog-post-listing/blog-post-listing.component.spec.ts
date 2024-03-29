import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostListingComponent } from './blog-post-listing.component';

describe('BlogPostListingComponent', () => {
  let component: BlogPostListingComponent;
  let fixture: ComponentFixture<BlogPostListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
