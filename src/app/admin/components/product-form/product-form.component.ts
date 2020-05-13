import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterService } from 'shared/services/filter.service';
import { ProductService } from 'shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnDestroy {
  categories;
  product = new Product();
  productId;
  mode: string;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    filterService: FilterService,
    private productService: ProductService) {
    this.categories = filterService.getCategories();
    this.productId = this.route.snapshot.paramMap.get('id')
    this.mode = this.route.snapshot.paramMap.get('mode')
    if (this.productId)
      this.subscription = this.productService.get(this.productId)
        .subscribe((product) => {
          this.product = product;
        });
  }

  async save(product) {
    if (this.productId)
      await this.productService.update(product, this.productId)
        .subscribe(data => {
          this.router.navigate(['/admin/products']);
        });
    else {
      await this.productService.create(product)
        .subscribe(data => {
          this.router.navigate(['/admin/products']);
        });
    }
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product')) return;
    if (this.productId)
      this.productService.delete(this.productId)
      .subscribe(data => {
        this.router.navigate(['/admin/products']);
      });
  }

  ngOnDestroy() {
    if (this.productId)
      this.subscription.unsubscribe();
  }

}
