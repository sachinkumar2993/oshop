import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyorderDetailsComponent } from './components/myorder-details/myorder-details.component';




@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductFilterComponent,
    MyOrdersComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyorderDetailsComponent
  ],
  imports: [
    SharedModule,
    MatListModule,
    MatSliderModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule.forChild([
      {path:'products', component: ProductsComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'check-out', component: CheckOutComponent,canActivate:[AuthGuard]},
      {path:'order-success', component: OrderSuccessComponent,canActivate:[AuthGuard]},
      {path:'my-orders/:userId', component: MyOrdersComponent,canActivate:[AuthGuard]},
      {path:'my/orders', component: MyOrdersComponent,canActivate:[AuthGuard]},
      {path:'my-order-details/:id', component: MyorderDetailsComponent,canActivate:[AuthGuard]}
    ])
  ]
})
export class ShoppingModule { }
