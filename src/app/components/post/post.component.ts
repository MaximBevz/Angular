import {Component, Input, OnInit} from '@angular/core';
import Post from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  constructor() { }

  ngOnInit(): void {

  }

}
