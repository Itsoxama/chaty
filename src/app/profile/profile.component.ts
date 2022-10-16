import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

posts:any;
  
constructor(private service:PostService) {}
submit(){
  console.log("hy")
}
ngOnInit() {
  this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      console.log(this.posts)
    })
}
}
