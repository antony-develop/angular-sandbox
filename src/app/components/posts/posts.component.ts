import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = this.getEmptyPost();
  isEditState: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onPostUpdated(post: Post) {
    this.posts.forEach((curPost, index) => {
      if (curPost.id === post.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEditState = false;
        this.currentPost = this.postService.getEmptyPost();
      }
    })
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEditState = true;
  }

  deletePost(post: Post) {
    if (confirm('Are you sure you want to delete post?')) {
      this.postService.deltePost(post).subscribe(() => {
        this.posts.forEach((curPost, index) => {
          if (curPost.id === post.id) {
            this.posts.splice(index, 1);
          }
        })
      });
    }
    
  }

  getEmptyPost(): Post {
    return this.postService.getEmptyPost();
  }

}
