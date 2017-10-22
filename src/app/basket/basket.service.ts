import { LoginService } from './../login/login.service';
import { MovieComponent } from './../movie/movie.component';
import { IMovie } from './../interface/imovie';
import { MovieService } from './../movie/movie.service';
import { IBuyBasket } from './../interface/ibuy-basket';
import { Injectable } from '@angular/core';


@Injectable()
export class BasketService {

  basketDB:IBuyBasket[]=[{ nameFamily:'Arash Nabiniya',userName:'arash',idMovie:2,numberMovie:1,nameMovie:'Black Dog',datePersian:'1396/6/28',price:1200}];
  selectBuyBasket:IBuyBasket;

  constructor(private MovieService:MovieService,private LoginService:LoginService) { }

  getAll(){
    return this.basketDB;
  }
  getAllForUser(){
    return this.basketDB.filter(x=>x.userName==this.LoginService.currentUser.userName);
  }
  getBuyItemsCount(){
    return this.basketDB.filter(x=>x.userName==this.LoginService.currentUser.userName).length;
  }


  putItemToBasket(ItemForBasket:IBuyBasket){
      this.basketDB.push(ItemForBasket);
      this.MovieService.buyMovie(ItemForBasket.idMovie);
  }

  DeleteItem(index:number){
    this.selectBuyBasket=this.basketDB[index];
    this.MovieService.ComeBackMovie(this.selectBuyBasket.idMovie);
    this.basketDB.splice(index,1);    
  }

  DeliveryItem(index:number){
    this.basketDB.splice(index,1);    
  }


}
