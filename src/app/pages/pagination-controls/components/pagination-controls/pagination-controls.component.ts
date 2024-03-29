import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPostListingService } from 'src/app/core/services/blog-post-listing/blog-post-listing.service';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit, OnDestroy {

  posts: any[] = [];
  postsCopy: any[] = [];

  // Pagination properties
  pageSize:   number = 10;
  pageIndex:  number = 0;
  totalPosts: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100]; //you have to initialize the array so you can dynamically change it and append it one-way binding


  @Output() paginatedPosts = new EventEmitter;

  private subscription!: Subscription;

  constructor(private BlogPostListing: BlogPostListingService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.subscription = this.BlogPostListing.getPosts().subscribe({
      next: (response)=> {
        this.posts = response;
        this.postsCopy = response;
        this.totalPosts = this.posts.length;
        this.pageSizeOptions = [];
        for(let i=5; i<=this.posts.length; i+=5) {
          this.pageSizeOptions.push(i);
        }
      }
    });
  }

  handlePageChange(event: any): void {
    // Handle page index change logic here
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateVisibleItems();
  }

  handlePageSizeChange(event: any): void {
    // Handle page size change logic here
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updateVisibleItems();
  }

  updateVisibleItems(): void {
    this.posts = this.postsCopy;
    // Update the visible items based on the current page index and page size
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // Slice the items array to get the current page of items
    // You can then use these items in your template
    const visibleItems = this.posts.slice(startIndex, endIndex);
    this.posts = visibleItems;
    this.paginatedPosts.emit(this.posts);
  }


  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
