import { BasketService } from './basket/basket.service';
import { MovieService } from './movie/movie.service';
import { LoginService } from './login/login.service';


import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MouseEnterDirective } from './directives/mouse-enter.directive';
import { MovieItemStarComponent } from './movie/movie-item/movie-item-star/movie-item-star.component';
import { MovieDetailCommentComponent } from './movie/movie-detail/movie-detail-comment/movie-detail-comment.component';
import { MovieDetailCommentItemComponent } from './movie/movie-detail/movie-detail-comment-item/movie-detail-comment-item.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MovieComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MouseEnterDirective,
    MovieItemStarComponent,
    MovieDetailCommentComponent,
    MovieDetailCommentItemComponent,
    BasketComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService,MovieService,BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
