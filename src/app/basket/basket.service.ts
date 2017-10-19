import { IBuyBasket } from './../interface/ibuy-basket';
import { Injectable } from '@angular/core';


@Injectable()
export class BasketService {

  basketDB:IBuyBasket[]=[{idUser:1,idMovie:2,numberMovie:1,nameMovie:'Black Dog',datePersian:'1396/6/28',price:1200}];

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

  DeleteItem(index:number){
    this.basketDB.splice(index,1);
  }


}
