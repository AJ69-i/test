import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class BlogPostsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.endsWith('.svg') || request.url.endsWith('.png') || request.url.endsWith('.jpeg') || request.url.endsWith('.jpg') || request.url.endsWith('.json')) {
      return next.handle(request);
    } else {
      const NewRequest = request.clone({
        url: environment.baseUrl + request.url
      });
      return next.handle(NewRequest);
    }
  }
}
