import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { 
    
  }

  canActivate(route, state:RouterStateSnapshot){
    let user=JSON.parse(sessionStorage.getItem('loggedInUser'));
    if(user!=null && user.isAdmin){
      return true;
    }
    return false;
  }
}
