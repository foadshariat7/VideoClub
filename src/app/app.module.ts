
import { AutGuard } from './login/aut-guard.service';
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
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AutGuardAdmin } from './login/aut-guard-admin.service';

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
    BasketComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService,MovieService,BasketService,AutGuard,AutGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
