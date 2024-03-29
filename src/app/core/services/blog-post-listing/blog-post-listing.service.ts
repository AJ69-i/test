import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostListingService {

  constructor(private HttpClient:HttpClient) { }

  getPosts():Observable<any> {
    return this.HttpClient.get<any>("articles");
  }
}
