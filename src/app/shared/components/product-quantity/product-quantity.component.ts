import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/ShoppingCart';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private cartService:ShoppingCartService) { }

  addToCart(){
    this.shoppingCart=this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.shoppingCart=this.cartService.removeFromCart(this.product);
  }

}
