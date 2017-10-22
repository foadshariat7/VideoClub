import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AutGuardAdmin implements CanActivate {
  
  constructor(private LoginService:LoginService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    return this.LoginService.isAuthenticated_Admin().then(
      (auth:boolean)=>{
        if(auth)
        {
          return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
      }

    );

      

    }
  }


