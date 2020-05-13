import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { User } from 'firebase/app';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders$;
  userId;
  user: User;
  constructor(private orderService: OrderService,
    private authService: AuthService,
    private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    let user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!this.userId) {
      this.orders$ = this.orderService.getOrders();
    }
    else
      this.orders$ = this.orderService.getOrdersByUser(user.userId);
  }

  ngOnInit(): void {
  }

}
