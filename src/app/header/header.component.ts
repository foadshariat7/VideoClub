import { BasketService } from './../basket/basket.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {
  BasketItemsCount:number;
  constructor(private BasketService:BasketService) { }
  
  ngOnInit() {
    this.BasketItemsCount=this.BasketService.getBuyItemsCount();
  }
  
  ngDoCheck(): void {
    this.BasketItemsCount=this.BasketService.getBuyItemsCount();
  }
}
