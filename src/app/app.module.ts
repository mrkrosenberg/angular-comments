import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
