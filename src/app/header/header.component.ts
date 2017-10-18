import { BasketService } from './../basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  BasketItemsCount:number;
  constructor(private BasketService:BasketService) { }

  ngOnInit() {
    this.BasketItemsCount=this.BasketService.getBuyItemsCount();
  }

}
