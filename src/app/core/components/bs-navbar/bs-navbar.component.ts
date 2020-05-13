import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'shared/models/User';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  loggedInUser=new User('','',false);
  cartCount:number=0;

  constructor(private auth:AuthService,private cartService:ShoppingCartService,
    private router:Router) {
    this.auth.invokeEvent.subscribe(value => {
      this.loggedInUser=value; 
    });
    this.cartCount=this.cartService.getCart().getCartCount();
    this.cartService.invokeEvent.subscribe(value=>{
      this.cartCount=this.cartService.getCart().getCartCount();
    });
  }

  

  logout(){
    this.auth.logout();
    this.router.navigateByUrl("");
  }

}
