
import { IMovie } from './../../interface/imovie';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movieItem:IMovie;

  constructor() { }

  ngOnInit() {
  }



}
