import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';

import { CommentService } from './comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    NewCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
