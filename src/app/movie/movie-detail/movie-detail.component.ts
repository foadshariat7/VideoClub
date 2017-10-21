import { IBuyBasket } from './../../interface/ibuy-basket';
import { BasketService } from './../../basket/basket.service';
import { MovieService } from './../movie.service';
import { IMovie } from './../../interface/imovie';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef ,Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit ,OnDestroy {
  
  itemData:IMovie;
  itemDataSubscription:Subscription;
  detailCheck=false;
  IBuyBasket:IBuyBasket;
  errorMSG:string='';
  trueMSG:string='';

  UserId:number=1;

  @ViewChild('txtStar') txtStar:ElementRef;
  
  constructor(private ActivatedRoute:ActivatedRoute,private MovieService:MovieService,private BasketService:BasketService) { }
  
  ngOnInit() {
    
    
    this.itemDataSubscription=this.ActivatedRoute.params.subscribe(
      (param)=>{
        let Id:number = this.ActivatedRoute.snapshot.params['id'];
        if(Id>0){
          this.itemData=this.MovieService.getItem(Id);
          this.detailCheck=true;
          this.errorMSG='';
          this.trueMSG='';
        } 
      }
    );
    
  }
  ngOnDestroy(): void {
    this.itemDataSubscription.unsubscribe();
  }
  

  AddStar(){
    this.MovieService.pushStar(this.itemData.id,+this.txtStar.nativeElement.value);
    this.errorMSG='';
    this.trueMSG='تعداد'+this.txtStar.nativeElement.value+'امتیاز توسط شما ثبت گردید. با تشکر';
  }
  
  btnAddToBasket(){
    if(this.itemData.numberExist>0)
    {
      if(this.BasketService.getBuyItemsCount()<5)
      {
        this.IBuyBasket={idUser:this.UserId,idMovie:this.itemData.id,numberMovie:1,nameMovie:this.itemData.name,datePersian: moment().format('jYYYY/jM/jD'),price:this.itemData.price};
         this.BasketService.putItemToBasket(this.IBuyBasket);
         this.trueMSG='با موفقیت خریداری شد.';
         this.errorMSG='';
      }else
      {
        this.errorMSG='شما مجاز به سفارش بیشتر از 5 فیلم نمی باشید.';
        this.trueMSG='';
      }
    }else
    {
      this.errorMSG='این فیلم تمام شده است.';
      this.trueMSG='';
    }


  }
  
}
