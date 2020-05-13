import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/ShoppingCart';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { FilterService } from 'shared/services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy {

  products: Product[] = [];
  filterProducts: Product[] = [];
  category: Array<string> = [];
  priceRanges: Array<string> = [];
  priceRange;
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(
    filterService: FilterService,
    cartService: ShoppingCartService,
    private route: ActivatedRoute,
    productService: ProductService, ) {

    this.cart = cartService.getCart();
    this.priceRange = filterService.getPriceRange();
    this.subscription= productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.filterProducts = products;
      });
    route.queryParamMap.subscribe(params => {
      this.category = params.getAll('selectedCategories');
      this.priceRanges = params.getAll('selectedPriceRanges');
      this.filterCategory();
      this.filterPrice();
    })
  }

  filterCategory() {
    this.filterProducts = this.category.length
      ? this.products.filter(p => {
        return this.category.includes(p.category)
      })
      : this.products;
  }

  filterPrice() {
    if (this.priceRanges.length) {
      let tmp = this.filterProducts;
      this.filterProducts = [];
      this.priceRanges.forEach(pr => {
        this.filterProducts.push(...tmp.filter(p => {
          return parseInt(pr, 10) <= p.price && p.price <= parseInt(pr, 10) + this.priceRange.step
        }));
      })
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
