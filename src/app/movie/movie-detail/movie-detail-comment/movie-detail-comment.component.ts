import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movie-detail-comment',
  templateUrl: './movie-detail-comment.component.html',
  styleUrls: ['./movie-detail-comment.component.css']
})
export class MovieDetailCommentComponent implements OnInit {

  @ViewChild('txtComment') txtComment:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  btnAddComment(){
    
  }
}
