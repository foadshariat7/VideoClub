import { MovieService } from './../movie.service';
import { IMovie } from './../../interface/imovie';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit ,OnDestroy {
  
  itemData:IMovie;
  itemDataSubscription:Subscription;
  detailCheck=false;

  @ViewChild('txtStar') txtStar:ElementRef;
  
  constructor(private ActivatedRoute:ActivatedRoute,private MovieService:MovieService) { }
  
  ngOnInit() {
    
    this.itemDataSubscription=this.ActivatedRoute.params.subscribe(
      (param)=>{
        let Id:number = this.ActivatedRoute.snapshot.params['id'];
        if(Id>0){
          this.itemData=this.MovieService.getItem(Id);
          this.detailCheck=true;
        } 
      }
    );
    
  }
  ngOnDestroy(): void {
    this.itemDataSubscription.unsubscribe();
  }
  

  AddStar(){
    this.MovieService.pushStar(this.itemData.id,+this.txtStar.nativeElement.value)
    
    
  }
  
}
