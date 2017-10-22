import { AutGuardAdmin } from './login/aut-guard-admin.service';
import { AutGuard } from './login/aut-guard.service';

import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BasketComponent } from './basket/basket.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dashboard',canActivate:[AutGuard], component:DashboardComponent},
    {path:'basket' , canActivate:[AutGuard],component:BasketComponent},
    {path:'admin' ,canActivate:[AutGuardAdmin],component:AdminComponent},

    {path:'movie/:id' ,canActivate:[AutGuard], component:DashboardComponent},
    {path:'Not-Found', component:NotFoundComponent},
    {path:'**', redirectTo:'/Not-Found'}
    

];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[ RouterModule]
})
export class AppRoutingModule{

}