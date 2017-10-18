import { VideoClubPage } from './../../../../../e2e/app.po';
import { MovieService } from './../../movie.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail-comment',
  templateUrl: './movie-detail-comment.component.html',
  styleUrls: ['./movie-detail-comment.component.css']
})
export class MovieDetailCommentComponent implements OnInit {

  @Input() MovieId:number;
  @ViewChild('txtComment') txtComment:ElementRef;
  @ViewChild('txtname') txtname:ElementRef;

  txtMsg:string='';

  constructor(private MovieService:MovieService) { }

  ngOnInit() {
  }

  btnAddComment(){
    if(this.txtname.nativeElement.value!='' && this.txtComment.nativeElement.value !='')
    {
      this.MovieService.pushComment(this.MovieId,this.txtname.nativeElement.value,this.txtComment.nativeElement.value);
      this.txtMsg='';
    }
    else this.txtMsg='لطفا فیلد نام و توضیحات را تکمیل نمایید.';
  }
}
