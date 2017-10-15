import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dashboard', component:DashboardComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[ RouterModule]
})
export class AppRoutingModule{

}