import { AppComponent } from './../app.component';
import { ILogin } from './../interface/ilogin';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loginDb:ILogin[]=[
    {nameFamily:'Admin', userName:'admin',password:'1',level:'Admin'},
    {nameFamily:'Arash Nabiniya', userName:'arash',password:'1',level:'User'},
    {nameFamily:'Jafar Jafari', userName:'jafar',password:'1',level:'User'}
  ];

  currentUser:ILogin;

  constructor( ) { }

  LoginCheck(userName:string,password:string){
    this.currentUser=this.loginDb.find(x=>x.userName.toLowerCase()==userName.toLowerCase() && x.password==password)
    if(this.currentUser=== undefined)
      return false;
      else
      return true;
    }

  isAuthenticated_User(){
    const promise_user=new Promise(
      (resolve,reject)=>{
        if(this.currentUser === undefined)
        resolve(false);
        else  resolve(true);
      }
    );
    return promise_user;
  }


  isAuthenticated_Admin(){

    const promise_admin=new Promise(
      (resolve,reject)=>{
        if(this.currentUser=== undefined)
        resolve(false);
        if(this.currentUser.level==='Admin')
          resolve(true);
        else  resolve(false);
        
      }
    );
    return promise_admin;
  }

logOut(){
  this.currentUser=null;
}

}
