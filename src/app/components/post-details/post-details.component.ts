import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import Post from "../../models/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  constructor(private activatedRout: ActivatedRoute, private postService: PostService) {
    this.activatedRout.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(post => {
        this.post = post;
      })
    })
  }

  ngOnInit(): void {
  }

}
