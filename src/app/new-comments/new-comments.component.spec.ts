import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentsComponent } from './new-comments.component';

describe('NewCommentsComponent', () => {
  let component: NewCommentsComponent;
  let fixture: ComponentFixture<NewCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
