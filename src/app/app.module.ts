import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserComponent} from "./components/user/user.component";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import {ResolveService} from "./services/resolve.service";
import { CommentComponent } from './components/comment/comment.component';

let routs: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children:[
      {path: ':id', component: UserDetailsComponent}
    ]},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}},

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    HomeComponent,
    UserDetailsComponent,
    UserComponent,
    PostDetailsComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
