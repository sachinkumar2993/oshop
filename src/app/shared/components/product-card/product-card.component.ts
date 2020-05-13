import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { FilterService } from 'shared/services/filter.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product:Product;
  @Input('show-actions') showActions:true;
  @Input('shopping-cart') shoppingCart:ShoppingCart;
  currency;

  constructor(private cartService:ShoppingCartService,
    filterService: FilterService) { 
      this.currency = filterService.getPriceRange().currency;
    }

  addToCart(){
    this.shoppingCart=this.cartService.addToCart(this.product);
  }

}
