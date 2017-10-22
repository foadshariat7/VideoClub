import { BasketService } from './../basket/basket.service';
import { IBuyBasket } from './../interface/ibuy-basket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  IBuyBasket:IBuyBasket[];
  constructor(private BasketService:BasketService) { }

  ngOnInit() {
    this.IBuyBasket=this.BasketService.getAll();
  }

  btnDelivery(i:number){
    this.BasketService.DeliveryItem(i);
  }

}
