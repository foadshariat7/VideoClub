import { IBuyBasket } from './../interface/ibuy-basket';
import { Injectable } from '@angular/core';


@Injectable()
export class BasketService {

  basketDB:IBuyBasket[]=[{idUser:1,idMovie:2,numberMovie:1,datePersian:'1396/6/28'}];

  constructor() { }

  getAll(){
    return this.basketDB;
  }
  getBuyItemsCount(){
    return this.basketDB.length;
  }


  putItemToBasket(ItemForBasket:IBuyBasket){
      this.basketDB.push(ItemForBasket);
  }



}
