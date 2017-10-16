import { IMovie } from './../interface/imovie';
import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
itemMovies:IMovie[]=[];
  constructor(private MovieService:MovieService) { }

  ngOnInit() {
    this.itemMovies=this.MovieService.getAll();
  }

}
