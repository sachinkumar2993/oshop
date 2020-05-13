import { Component } from '@angular/core';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {

  cart:ShoppingCart;
  
  constructor(private cartService:ShoppingCartService){
       this.cart=this.cartService.getCart();
  }


}
