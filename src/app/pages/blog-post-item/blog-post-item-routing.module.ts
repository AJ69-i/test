import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostItemComponent } from './components/blog-post-item/blog-post-item.component';

const routes: Routes = [
  {
    path: "", component: BlogPostItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostItemRoutingModule { }
