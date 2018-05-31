import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AutGuard implements CanActivate {

  
  constructor(private LoginService:LoginService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.LoginService.isAuthenticated_User().then(
      (auth:boolean)=>{
        if(auth){
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      }


    );

  }


}
