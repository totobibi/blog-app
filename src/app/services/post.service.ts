import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      title: 'Premier post',
      content: 'Voici le contenu du premier post',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Second post',
      content: 'Voici le contenu du second post',
      loveIts: 2,
      created_at: new Date()
    }
  ];

  postSubject  = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  getPosts() {
    this.emitPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }
}
