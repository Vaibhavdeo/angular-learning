import {Component, OnInit , Input} from '@angular/core';
import {PostService} from '../services/post.service';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../common/app-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{

  posts: any[];

  constructor(private service: PostService) {}

    ngOnInit(){
      this.service.getAll().subscribe(response => {
        console.log(response);
        this.posts=response.json();
      }, error => {
        alert('An Unexpected error has occurs');
        console.log(error);
      });
    }
  createPosts(post){
  this.service.create(post).subscribe(response => {
    post['id']= response.json().id;
    this.posts.splice(0,0,post)
    console.log(response.json());
  }, error => {
    alert('An Unexpected error has occurs');
    console.log(error);
  });
  }

  updatePost(post){
    //if ( post.gId == "" ) {
      this.service.create(post).subscribe(response => {
        post['id']= response.json().id;
        this.posts.splice(0,0,post)
        console.log(response.json());
      }, error => {
        alert('An Unexpected error has occurs');
        console.log(error);
      });

    //else {
      this.service.update(post).subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An Unexpected error has occurs');
        console.log(error);
      });

    //this.http.post(this.url,JSON.stringify(post));
  }

  editMe (editValue) {
    console.log(editValue);
  };

  addRow () {
    this.posts.push({
      gId: '',
      mailId: '',
      name: '',
      subject: '',
      date: ''
    });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.gId).subscribe(response =>{
      console.log('Responce' , response);
      },
      error => {
      if ( error.status === 404){
        this.posts.splice(index,0,post);
        alert('The resource already has been deleted');
        console.log(error);
      }
      else {
        alert('An Unexpected error has occurs');
        console.log(error);
      }
    });
  }
}
