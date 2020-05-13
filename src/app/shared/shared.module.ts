import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FilterService } from './services/filter.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
  ],
  providers:[
    AuthService, 
    AuthGuard, 
    FilterService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
