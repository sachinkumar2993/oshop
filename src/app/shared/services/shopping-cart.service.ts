import { Injectable } from '@angular/core';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { Product } from 'shared/models/product';
import { Item } from 'shared/models/item';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  shoppingCart= new ShoppingCart();
  invokeEvent: Subject<any> = new Subject(); 

  constructor() { 
    this.createCart();
  }

  emitChanges(){
    this.invokeEvent.next(this.shoppingCart);
  }

  addToCart(product:Product){    
    this.shoppingCart.dateCreated= new Date().getTime();
    if(Object.entries(this.shoppingCart.items).length!=0){
      let itemIndex = this.shoppingCart.items.findIndex(i=>{
        return i.product.title==product.title;
      });
      if(itemIndex>=0)
        this.shoppingCart.items[itemIndex].quantity += 1;
      else
      this.shoppingCart.items.push(new Item(product,1));
    }    
    else{
      this.shoppingCart.items.push(new Item(product,1));
    }
    
    localStorage.setItem('cartId',JSON.stringify(this.shoppingCart));
    this.emitChanges();
    return this.shoppingCart;
  }

  removeFromCart(product:Product){
    if(Object.entries(this.shoppingCart.items).length!=0){
      let itemIndex = this.shoppingCart.items.findIndex(i=>{
        return i.product.title==product.title;
      });
      if(itemIndex>=0)
      this.shoppingCart.items[itemIndex].quantity -= 1
    }
    this.emitChanges();
    return this.shoppingCart;
  }

  private createCart(){
    //localStorage.removeItem('cartId');
    let cart=JSON.parse(localStorage.getItem('cartId'));
    this.shoppingCart = new ShoppingCart();
    if(cart) {
      this.shoppingCart.dateCreated=cart.dateCreated;
      let item:Item;
      for(let i of cart.items){
        item=new Item(i.product,i.quantity)
        this.shoppingCart.items.push(item);
      }
    }    
  }

  getCart(){
    return this.shoppingCart;
  }

  clearCart(){
    localStorage.removeItem('cartId');
    this.createCart();
    this.emitChanges();
  }
}
