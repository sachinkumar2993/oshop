import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { FilterService } from 'shared/services/filter.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart;
  cartCount: number = 0;
  currency;

  constructor(private cartService: ShoppingCartService,
    filterService: FilterService) {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cart.getCartCount();
    this.currency = filterService.getPriceRange().currency;
    this.cartService.invokeEvent.subscribe(value => {
      this.cart = this.cartService.getCart();
      this.cartCount = this.cart.getCartCount();
    });
    console.log(this.cart.totalPrice);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  ngOnInit(): void {
  }

}
