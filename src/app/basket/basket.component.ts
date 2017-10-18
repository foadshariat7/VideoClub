import { IBuyBasket } from './../interface/ibuy-basket';
import { BasketService } from './basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
totalPrice:number=0;
  IBuyBasket:IBuyBasket[];
  constructor(private BasketService:BasketService) { }

  ngOnInit() {
  this.IBuyBasket=this.BasketService.getAll();
  this.IBuyBasket.forEach(element => {
    this.totalPrice+= element.price;
  });
  }
 
}
