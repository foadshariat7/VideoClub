import { IMovie } from './../interface/imovie';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  movieDB:IMovie[]=[
    {id:1,name:'Movie 1',subject:'اجتماعی',
    movieTime:'120 دقیقه',productCountry:'ایران',Director:'علی صادقی',date: '2012' 
    ,description:'داستان سریال هنگامی آغاز می‌شود که پدر و مادری متوجه می‌شوند فرزندان آنها داری توانایی‌های فوق‌العاده و ابرقهرمانی می‌باشند. در چنین شرایطی و در حالی که جامعه و سیستم حاکم به دلایل مختلف به این افراد به چشم سوء‌ظن و بی‌اعتمادی می‌نگرد ، افراد این خانواده در تلاش برای فرار از دست افرادی هستند که به دنبال آنها می‌باشند. در این بین آنها با گروهی مرموز مواجه می‌شوند که با توانایی‌های منحصر به فرد فرزندانشان مشکلی ندارند اما ، در عین حال پیوستن افراد خانواده به این گروه آنها را وارد چالش جدیدی برای تلاش جهت زنده ماندن می‌کند و…',
  imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OTySNCTVD-CeOZQ7eSWTvbUZkzcZMsewe3Axs0wUL0lgabcF'
,star:3,numberOfReviews:1},
    {id:2,name:'Movie 2',subject:'ترسناک',
    movieTime:'80 دقیقه',productCountry:'آمریکا',Director:'آرش نبی نیا',date: '2014' ,
    description:'آقای دکتر با نام اصلی دکتر خوب ، نام سریالی ماجرایی و پزشکی می‌باشد که توسط دیوید شور ساخته شده است. داستان سریال درباره‌ی زندگی مرد جوانی به نام شان مورفی است که در شهر کوچکی زندگی می‌کند. او که مبتلا به سندروم ساوانت اوتیسمی می‌باشد ، یک رزیدنت بخش اطفال است که با توجه به ناتوانی پیشرفته‌اش ، علی‌رغم اینکه یک رزیدنت نابغه به شمار می‌رود و با مهارت به درمان اطفال می‌پردازد ، در زندگی دچار مشکلاتی مانند برقراری ارتباط اجتماعی می‌باشد. او برای اینکه بتواند یک جراح کودکان شود با تلاش خود و با کمک دوستانش بر ناتوانی‌های خویش غلبه می‌کند و موانع را کنار می‌زند و…',
  imgUrl:'http://film2movie.co/content/uploads/The-Gifted-Series.jpg'
  ,star:4,numberOfReviews:1},
    {id:3,name:'Movie 3',subject:'عاشقانه',
    movieTime:'90 دقیقه',productCountry:'هلند',Director:'حسین محمودی واحدی',date: '2015' ,
    description:'در خلاصه داستان این فیلم آمده است ، پروفسور کیم ، احتمال وقوع یک سونامی بسیار قوی در یک منطقه‌ی تفریحی محبوب واقع در ساحل جنوبی کره را پیش‌بینی می‌کند. او تمام تلاش خود را می‌کند تا به مقامات و گردشگران هشدار دهد. اما…',
  imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OTySNCTVD-CeOZQ7eSWTvbUZkzcZMsewe3Axs0wUL0lgabcF'
  ,star:1,numberOfReviews:1}


  ];

  constructor() { }

  getAll(){
    return this.movieDB;
  }
  getItem(id:number){

    return this.movieDB.find(x=>x.id==id);
  }

  pushStar(id:number,star:number){
    this.movieDB.find(x=>x.id==id).star+=star;
    this.movieDB.find(x=>x.id==id).numberOfReviews++;
  }

}
