import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from './../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      console.log(response);
      this.followers = response.json();
    }, error => {
      alert('An Unexpected error has occurs');
      console.log(error);
    });
  }
}
