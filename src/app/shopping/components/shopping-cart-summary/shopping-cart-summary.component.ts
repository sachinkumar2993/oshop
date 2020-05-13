import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { FilterService } from 'shared/services/filter.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {

  @Input('shopping-cart') cart: ShoppingCart;
  currency;
  
  constructor(filterService: FilterService) { 
    this.currency = filterService.getPriceRange().currency;
  }

}
