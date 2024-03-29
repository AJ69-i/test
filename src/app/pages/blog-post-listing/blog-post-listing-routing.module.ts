import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListingComponent } from './components/blog-post-listing/blog-post-listing.component';

const routes: Routes = [
  {
    path: "" , component: BlogPostListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostListingRoutingModule { }
