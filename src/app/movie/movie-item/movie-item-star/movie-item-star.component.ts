import { IMovie } from './../../../interface/imovie';
import { MovieService } from './../../movie.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-item-star',
  templateUrl: './movie-item-star.component.html',
  styleUrls: ['./movie-item-star.component.css']
})
export class MovieItemStarComponent implements OnChanges{

  starWidth;

  @Input() rating:number=0; 
  
  constructor() { }
  

  ngOnChanges(): void {
    
    this.starWidth= this.rating * 86 / 5 ;
    
  }



}
