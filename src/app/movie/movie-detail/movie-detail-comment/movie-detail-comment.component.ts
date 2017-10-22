import { LoginService } from './../../../login/login.service';
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


  txtMsg:string='';

  constructor(private MovieService:MovieService,private LoginService:LoginService) { }

  ngOnInit() {
  }

  btnAddComment(){
    if(this.txtComment.nativeElement.value !='')
    {
      this.MovieService.pushComment(this.MovieId,this.LoginService.currentUser.nameFamily,this.txtComment.nativeElement.value);
      this.txtMsg='';
    }
    else this.txtMsg='لطفا فیلد نام و توضیحات را تکمیل نمایید.';
  }
}
