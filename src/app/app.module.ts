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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MovieComponent,
    MovieItemComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
