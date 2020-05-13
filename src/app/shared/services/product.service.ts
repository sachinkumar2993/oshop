import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'shared/models/product';
import { config } from '../../../assets/Config'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[];
  private baseUrl = config[0].baseUrl;
  
  constructor(private http:HttpClient) { }

  create(product){
    return this.http.post<Product>(this.baseUrl+'create', product);
  }

  getAll(){
    return this.http.get<Product[]>(this.baseUrl+'get');
  }

  get(productId:any){
    return this.http.get<Product>(this.baseUrl+'getById'+"/"+ productId);
  }

  update(product,productId){
    return this.http.put<Product>(this.baseUrl+'update'+"/"+productId, product);
  }

  delete(productId){
    return this.http.delete<Product>(this.baseUrl+'delete'+"/"+productId);
  }
}
