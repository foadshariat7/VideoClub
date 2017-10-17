import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailCommentItemComponent } from './movie-detail-comment-item.component';

describe('MovieDetailCommentItemComponent', () => {
  let component: MovieDetailCommentItemComponent;
  let fixture: ComponentFixture<MovieDetailCommentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailCommentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
