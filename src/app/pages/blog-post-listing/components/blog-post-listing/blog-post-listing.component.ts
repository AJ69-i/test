import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPostListingService } from 'src/app/core/services/blog-post-listing/blog-post-listing.service';
import { DatePipe } from '@angular/common';
import * as iziToast from "iziToast";


@Component({
  selector: 'app-blog-post-listing',
  templateUrl: './blog-post-listing.component.html',
  styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit, OnDestroy {

  posts: any[] = [];
  postsCopy: any[] = [];
  postsSearched: any[] = [];
  visiblePosts: any[] = [];
  sliceSize = 10; // Adjust as needed
  allPostsLoaded: boolean = false;

  // Pagination properties
  pageSize:    number = 10;
  pageIndex:   number = 0;
  showErrorMessage: boolean = false;


  private subscription!: Subscription;

  constructor(private BlogPostListing: BlogPostListingService,private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.showErrorMessage = false;
    this.subscription = this.BlogPostListing.getPosts().subscribe({
      next: (response)=> {
        if(response) {
          this.showErrorMessage = false;
          iziToast.default.success({
            title: "SUCCESS",
            message: "OK",
            timeout: 3000,
            position: 'topRight',
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOutRight',
            drag: true,
            transitionInMobile: 'fadeInDown',
            transitionOutMobile: 'fadeOutDown',
          });
          this.posts = response;
          this.postsCopy = response;
          this.visiblePosts = this.posts.slice(0, this.sliceSize); // Initial slice
          this.posts = this.visiblePosts;
        }
      },
      error:(err)=> {
        this.showErrorMessage = true;
      }
    });
  }

  search(searchedItem: string) {
    //Checking whether the input is empty and the user clicked backspace so the input is empty, so we should show all the products
    if(!searchedItem) {
      this.posts = this.postsCopy;
    }
    else if(searchedItem) {
      //remove white spaces from the searched item and make it lower case for filtering
      searchedItem = searchedItem.trim().toLowerCase();
      //I take a copy of the posts, because i need the whole data again for multiple searching
      this.posts = this.postsCopy;
      this.postsSearched = this.posts.filter((post)=> {
        return post.type_of.toLowerCase().includes(searchedItem) ||
        post.title.toLowerCase().includes(searchedItem) ||
        post.description.toLowerCase().includes(searchedItem) ||
        post.user.name.toLowerCase().includes(searchedItem) ||
        searchedItem == this.datePipe.transform(post.published_at, "dd MMM yyyy")?.split(" ")[0] ||
        this.datePipe.transform(post.published_at, "dd MMM yyyy")?.split(" ")[1]?.toLowerCase()?.includes(searchedItem) ||
        searchedItem == this.datePipe.transform(post.published_at, "dd MMM yyyy")?.split(" ")[2]
      });
      this.posts = this.postsSearched;
    }
  }

  navigateFullPost(url: string) {
    window.open(url , "_blank");
  }

  loadMore(): void {
    if (this.visiblePosts.length <= this.posts.length) {
      // Update visibleItems based on remaining items
      this.posts = this.postsCopy;
      const remainingItems = this.posts.length - this.visiblePosts.length;
      this.visiblePosts = this.posts.slice(0, this.visiblePosts.length + remainingItems);
      this.allPostsLoaded = true; // All items loaded after this click
      this.posts = this.visiblePosts;
    }
  }

  pagination(posts: any[]) {
    //Updating the posts array with the paginated array
    this.posts = posts;
    //Updating the visible posts if the user click on load more button after pagination
    this.visiblePosts = this.posts;
  }

  fetchAgain(event: boolean) {
    if(event) {
      this.getPosts();
    }
  }

  trackByFn(index: number, post: any) {
    return post.id;
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



