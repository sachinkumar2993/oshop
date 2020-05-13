import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { FilterService } from 'shared/services/filter.service';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Order } from 'shared/models/order';


@Component({
  selector: 'myorder-details',
  templateUrl: './myorder-details.component.html',
  styleUrls: ['./myorder-details.component.css']
})
export class MyorderDetailsComponent implements OnInit {

  cart: ShoppingCart;
  currency;
  order:Order;
  orderId;
  
  constructor(private cartService: ShoppingCartService,
    filterService: FilterService,
    private orderService:OrderService,
    private route: ActivatedRoute) { 
    this.cart = this.cartService.getCart();
    this.currency = filterService.getPriceRange().currency;
    this.orderId = this.route.snapshot.paramMap.get('id');
    if(this.orderId)      
      this.order=this.orderService.getOrderByOrderId(this.orderId);
  }

  ngOnInit(): void {
  }

}
