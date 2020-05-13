import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { 
    
  }

  canActivate(route, state:RouterStateSnapshot){
    if(JSON.parse(sessionStorage.getItem('loggedInUser')).username!=''){
      return true;
    }
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
