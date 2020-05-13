import { Product } from '../models/product';
export class Item{
    product:Product;
    quantity:number=0;
    
    constructor(product:Product,quantity:number){
        this.product=product;
        this.quantity=quantity;
    }

    public get totalPrice(){
        let _totalPrice=0;
        _totalPrice= this.quantity*this.product.price;
        return _totalPrice;
    }
}