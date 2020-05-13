import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'shared/shared.module';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports:[
    BsNavbarComponent
  ]
})
export class CoreModule { }
