import { Shipping } from './shipping';
import { Item } from './item';

export class Order{
    orderId:number;
    username:string;
    userId:any
    shipping:Shipping;
    items:Item[];
    dateCreated:any;

    constructor(shipping:Shipping,items:Item[],username:string,userId:any){
        this.shipping=shipping;
        this.items=items;
        this.username=username;
        this.userId=userId;
    }

    get totalPrice(){
        let _totalPrice=0;
        this.items.forEach(i=>{
            _totalPrice+=i.totalPrice;
        })
        return _totalPrice;
    }
}