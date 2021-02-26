import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';
import { PostService } from '../@shared/service/PostService';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

 
  @Output() addPostEvent = new EventEmitter<Post>();


  profileForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
    description: new FormControl('')
  });

  addNewItem() {

    const post:Post = {
    _id: IdGeneratorUtils.uuidv4(),
    title : this.profileForm.get("title").value,
    link: this.profileForm.get("link").value,
    description: this.profileForm.get("description").value

    }
    this.addPostEvent.emit(this.profileForm.value);
    this.profileForm.reset();

  }

  constructor(private PostService:PostService) {
   this.PostService.getAll().subscribe(val => console.log(val));
   this.PostService.getAll().subscribe((data: Post[])=>{
    console.log(data);

  })  
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

  }
 


}

