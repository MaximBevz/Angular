import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Comment from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  constructor(private activatedRout: ActivatedRoute) {
    this.activatedRout.data.subscribe(value => {
      this.comments = value.data;
    });
  }

  ngOnInit(): void {

  }

}
