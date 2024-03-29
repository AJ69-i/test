import { LoadingIndicatorModule } from './../loading-indicator/loading-indicator.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BlogPostListingRoutingModule } from './blog-post-listing-routing.module';
import { BlogPostListingComponent } from './components/blog-post-listing/blog-post-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPostItemModule } from 'src/app/pages/blog-post-item/blog-post-item.module';
import { PaginationControlsModule } from '../pagination-controls/pagination-controls.module';
import { ErrorMessageModule } from '../error-message/error-message.module';


@NgModule({
  declarations: [
    BlogPostListingComponent
  ],
  imports: [
    CommonModule,
    BlogPostListingRoutingModule,
    SharedModule,
    LoadingIndicatorModule,
    BlogPostItemModule,
    PaginationControlsModule,
    ErrorMessageModule
  ],
  providers: [DatePipe],
})
export class BlogPostListingModule { }
