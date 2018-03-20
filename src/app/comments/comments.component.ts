import { Component, OnInit } from '@angular/core';

import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments;

  constructor(
    private commentService:  CommentService
  ) { }

  ngOnInit() {
    this.commentService.onCommentUpdated((commentList) => {
      this.comments = commentList;
    });
  }

}
