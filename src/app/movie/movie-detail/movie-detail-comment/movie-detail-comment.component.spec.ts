import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailCommentComponent } from './movie-detail-comment.component';

describe('MovieDetailCommentComponent', () => {
  let component: MovieDetailCommentComponent;
  let fixture: ComponentFixture<MovieDetailCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
