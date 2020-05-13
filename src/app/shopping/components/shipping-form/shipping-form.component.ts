import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { Shipping } from 'shared/models/shipping';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { User } from 'shared/models/User';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent {

  shipping = new Shipping();
  order: Order;
  user: User;
  @Input("shopping-cart") cart: ShoppingCart;

  constructor(private orderService: OrderService,
    private route: Router,
    private cartService: ShoppingCartService) {

  }

  async placeOrder() {
    this.user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    this.order = new Order(this.shipping, this.cart.items, this.user.username,this.user.userId);
    let result = await this.orderService.placeOrder(this.order)
      .then(orders => {
        this.route.navigateByUrl('/order-success');
      })

  }
}
