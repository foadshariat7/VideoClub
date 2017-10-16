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
    
    let index=this.loginDb.findIndex(x=>x.userName==userName && x.password==password);
    if(index>-1)
    {
      this.currentUser=this.loginDb[index];
      return true;
    }else
    return false;

/*     this.loginDb.find(
      (user:ILogin)=>{
        if(userName==user.userName && password==user.password)
        {
          this.currentUser=user;
          console.log(this.currentUser.userName + this.currentUser.password + '--' +this.currentUser.nameFamily);
          
          return true;
        }
        else 
        return null;
      }
    ); */
    /* ------------------------- */
   /*  if(this.loginDb.find(x=>x.userName==userName && x.password==password))
    {
      return true;
    }

    else 
    return false;
 */

    }

}
