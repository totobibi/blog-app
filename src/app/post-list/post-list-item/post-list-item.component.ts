import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() item: Post;

  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.item.loveIts += 1;
  }

  onDontLoveIt() {
    this.item.loveIts -= 1;
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
