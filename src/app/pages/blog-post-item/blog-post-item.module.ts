import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostItemRoutingModule } from './blog-post-item-routing.module';
import { BlogPostItemComponent } from './components/blog-post-item/blog-post-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogPostItemComponent
  ],
  imports: [
    CommonModule,
    BlogPostItemRoutingModule,
    SharedModule
  ],
  exports: [
    BlogPostItemComponent
  ]
})
export class BlogPostItemModule { }
