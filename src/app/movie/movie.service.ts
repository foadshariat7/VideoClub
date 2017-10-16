import { IMovie } from './../interface/imovie';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  movieDB:IMovie[]=[
    {name:'Movie 1',subject:'ubject 1',datePersian:'1395/6/12',date: new Date("February 10, 2016 10:13:00") ,description:'as ndkasjdlkajskld lkajs dkljaklsj dlkajsk dlaksj dkljas ldkjalsk jdlkajsdlkjasldjlasjdlkasjdjk as',
  imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OTySNCTVD-CeOZQ7eSWTvbUZkzcZMsewe3Axs0wUL0lgabcF'},
    {name:'Movie 1',subject:'ubject 1',datePersian:'1395/6/12',date: new Date("February 4, 2016 10:13:00") ,description:'as vbbbbb bbbbbbbbbb bbbbbbbbbbbbbbbbb bbbbbbjasldjlasjdlkasjdjk as',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtGbqZ0Za-j3AkfYKQEwQBNlWi0noQ-_xFbWgURJglMDYmE3zcA'},
    {name:'Movie 1',subject:'ubject 1',datePersian:'1395/6/12',date: new Date("February 18, 2016 10:13:00") ,description:'as rrrrrr rrrrr rrrrrrr rrrrrrr lkajs dkljaklsj dlkajsk dlaksj dkljas ldkjalsk jdlkajsdlkjasldjlasjdlkasasd asd',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OTySNCTVD-CeOZQ7eSWTvbUZkzcZMsewe3Axs0wUL0lgabcF'}
  ];

  constructor() { }

  getAll(){
    return this.movieDB;
  }

}
