import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';



import { ILogin } from './../interface/ilogin';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userName') userName : ElementRef; 
  @ViewChild('password') password : ElementRef; 

  loginMSG:string="";


  constructor(private LoginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.LoginService.logOut();
  }

btnLoginCheck(){

  if(this.LoginService.LoginCheck(this.userName.nativeElement.value,this.password.nativeElement.value))
    this.router.navigate(['dashboard']);
  else
      this.loginMSG='نام کاربری و یا پسورد اشتباه است'
  

  
/* if(this.LoginService.LoginCheck(this.userName.nativeElement.value,this.password.nativeElement.value))
  this.loginEnd='True';
else
this.loginEnd='False'; */

}




}
