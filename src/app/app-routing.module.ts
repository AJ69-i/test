import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "blog-posts" , pathMatch: "full"
  },
  {
    path: "blog-posts", loadChildren : () => import("./pages/blog-post-listing/blog-post-listing.module").then( (m) => m.BlogPostListingModule )
  },
  {
    path: "**", redirectTo: "blog-posts" , pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
