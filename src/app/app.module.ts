import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { PipeModule } from '../pipes/pipes.module';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './core/components/registration/registration.component';

//import {AngularFireDatabaseModule} from 'angularfire2/database';
//import {AngularFireAuthModule} from 'angularfire2/auth';
//import { DataTableModule } from 'angular7-data-table';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    //DataTableModule.forRoot(),
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
    PipeModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: ProductsComponent},
      {path:'login', component: LoginComponent},
      {path:'login/:success', component: LoginComponent},
      {path:'createAccount', component: RegistrationComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
