import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  comments = [
    { author: 'Bob', comment: 'you are alright.' },
    { author: 'Joe', comment: 'nice work yo!' },
    { author: 'Jimmy', comment: 'I would also like to congratulate you!' }
  ];

  private subject: Subject<any> = new Subject<any>();

  constructor() { }

  private updateSubject() {
    this.subject.next(this.comments);
  };

  getComments() {};

  addComment() {};

  deleteComment() {};

  onCommentUpdated(callback) {
    this.subject.asObservable().subscribe(callback);
  };

}
