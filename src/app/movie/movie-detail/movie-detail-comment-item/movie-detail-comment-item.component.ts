import { ICommentMovie } from './../../../interface/icomment-movie';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movie-detail-comment-item',
  templateUrl: './movie-detail-comment-item.component.html',
  styleUrls: ['./movie-detail-comment-item.component.css']
})
export class MovieDetailCommentItemComponent implements OnInit {

  @Input() commentItem:ICommentMovie;
  constructor() { }

  ngOnInit() {

  }

}
