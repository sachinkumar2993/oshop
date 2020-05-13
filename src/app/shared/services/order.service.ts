import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Item } from 'shared/models/item';
import { Order } from 'shared/models/order';
import { Shipping } from 'shared/models/shipping';
import { ShoppingCartService } from './shopping-cart.service';
import { config } from '../../../assets/Config'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [];
  order: Order;
  userOrderCount: string;
  private baseUrl = config[0].baseUrl;

  constructor(private cartService: ShoppingCartService,
    private http: HttpClient) { }

  async placeOrder(order: Order) {
    return await this.http.post<Order>(this.baseUrl + 'createOrder', order).toPromise()
      .then(orders => {
        this.cartService.clearCart();
      });
  }

  async getOrdersByUser(userId) {
    await this.http.get<Order[]>(this.baseUrl + 'getOrdersByUser/' + userId).toPromise()
      .then(orders => {
        this.createOrder(orders);
      })
      .catch(error => {

      })
    return this.orders;
  }

  private createOrder(orders) {
    if (orders) {
      let shipping;
      let item: Item;
      
      let tmpOrder:Order;
      this.orders=[];
      for (let i = 0; i < orders.length; i++) {
        let itemList=[];
        shipping = new Shipping();        
        shipping.name = orders[i].shipping.name;
        shipping.addLine1 = orders[i].shipping.addLine1;
        shipping.addLine2 = orders[i].shipping.addLine2;
        shipping.city = orders[i].shipping.city;
        shipping.state = orders[i].shipping.state;

        orders[i].items.forEach(itemIterate => {
          item = new Item(itemIterate.product, itemIterate.quantity);
          itemList.push(item);
        });
        tmpOrder= new Order(shipping,itemList,orders[i].user.username,orders[i].user.userId)
        tmpOrder.orderId=orders[i].orderId;
        tmpOrder.dateCreated=orders[i].dateCreated;
        this.orders.push(tmpOrder);
      }
    }
  }

  getOrderByOrderId(orderId): Order {
    return this.orders.filter(o => o.orderId == orderId)[0];
  }

  async getOrders(){
    await this.http.get<Order[]>(this.baseUrl + 'getOrders').toPromise()
      .then(orders => {
        this.createOrder(orders);
      })
      .catch(error => {

      })
    return this.orders;
  }
}
