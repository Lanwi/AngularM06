import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService } from '../@shared/service/PostService';


import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[]=[];

  postService : PostService

  addItem(newItem: Post) {
  this.postService.add(newItem).subscribe(post=>this.posts.push(post))
  }
  deleteItem(deleteItem: string){
    this.postService.deletepost(deleteItem).subscribe(res=>this.posts = this.posts.filter(item => item._id !==deleteItem));
  }
  
  constructor(private PostService:PostService) {
  this.postService=PostService;
}

  ngOnInit(): void {
    this.postService.getAll().subscribe(list=>this.posts=list);
    console.log("posts > ", this.posts);
  }

}
