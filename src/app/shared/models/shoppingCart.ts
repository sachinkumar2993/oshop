import { Time } from '@angular/common';
import { Item } from '../models/item';
import { Product } from '../models/product';

export class ShoppingCart{
    dateCreated:number;
    items:Item[]=[];
    

    get totalPrice(){
        let _totalPrice=0;
        this.items.forEach(i=>{
            _totalPrice+=i.totalPrice;
        })
        return _totalPrice;
    }

    getQuantity(product:Product){
        let item= this.items.find(i=>{
            return i.product.title==product.title
        });
        return item?item.quantity:0;
    }

    getCartCount(){
        let count:number=0;
        this.items.forEach(i=>{
          count+=i.quantity;
        });;
        return count;
      }
   
}