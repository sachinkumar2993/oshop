import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product' 
import { Subscription } from 'rxjs';
//import { DataTableResource } from 'angular-4-data-table'; 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {

  products:Product[];
  filteredProducts:Product[];
  subscription: Subscription;
  //tableResource:DataTableResource<Product>;
  items:Product[]=[];
  itemCount:number;

  constructor(private productService: ProductService) { 
    this.subscription=this.productService.getAll()
      .subscribe(products=>{
        this.products=products;
        this.filteredProducts=products;
      });   
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filter(query:string){
    this.filteredProducts=(query)?
        this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
        this.products;
  }

}
