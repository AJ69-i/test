import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogPostsInterceptor } from './interceptors/blog-posts/blog-posts.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: BlogPostsInterceptor ,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: LoaderInterceptor ,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: ErrorInterceptor ,
      multi: true
    }
  ]
})
export class CoreModule { }
