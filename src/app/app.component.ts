import { Component } from '@angular/core';
// import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newComment = {
    author: '',
    comment: ''
  };

  authorName;
  commentText;
  commentToEdit;

  constructor() {};

  addComment() {
    console.log(this.newComment);
    this.comments.push(this.newComment);
  };

  deleteComment(i) {
    console.log('comment deleted');
    console.log(i);
    this.comments.splice(i, 1);
  };

  makeCommentEditable(comment) {
    // console.log('this comment is editable');
    this.commentToEdit = comment;
    // console.log(this.commentToEdit);
  };

  submitEdit(comment) {
    console.log(comment);
    console.log('comment edited');
    comment.author = this.commentToEdit.author;
    comment.comment = this.commentToEdit.comment;
    this.commentToEdit = null;
    // console.log(this.commentToEdit.author);
  };

}
