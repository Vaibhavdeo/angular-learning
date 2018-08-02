import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {HttpModule} from '@angular/http';
import {PostService} from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent
      },
      {
        path: 'details',
        component: PostsComponent
}
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
