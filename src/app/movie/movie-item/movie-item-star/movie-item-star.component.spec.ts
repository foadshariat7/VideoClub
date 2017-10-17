import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemStarComponent } from './movie-item-star.component';

describe('MovieItemStarComponent', () => {
  let component: MovieItemStarComponent;
  let fixture: ComponentFixture<MovieItemStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
