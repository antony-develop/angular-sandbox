import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Post } from '../../models/Post';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post;
  @Input() isEditState: boolean;
  @Output() newPost:EventEmitter<Post> = new EventEmitter();
  @Output() postUpdated: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please enter title and body');
    } else {
      this.postService.addPost(<Post>{title, body}).subscribe(post => {
        this.newPost.emit(post);
      })
    
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.postUpdated.emit(post);
    });
  }

}
