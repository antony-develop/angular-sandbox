import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions);
  }

  updatePost(post: Post) {
    let putUrl = this.postsUrl + '/' + post.id;
    return this.http.put<Post>(putUrl, post, this.httpOptions);
  }

  deltePost(post: Post) {
    let deleteUrl = this.postsUrl + '/' + post.id;
    return this.http.delete<Post>(deleteUrl, this.httpOptions);
  }

  getEmptyPost(): Post {
    return {
      id: 0,
      title: '',
      body: ''
    }
  }
}
