import { Component, EventEmitter, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../@shared/models/post';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})



export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  @Input() post:Post;
  @Output() deleteItempost= new EventEmitter<string>();
  

  constructor() { }
  deleteItem(post:Post){
    this.deleteItempost.emit(post._id);
  }


  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}


