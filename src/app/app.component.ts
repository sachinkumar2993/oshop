import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private auth:AuthService, router:Router){
  this.auth.invokeEvent.subscribe(value => {
    if(value==null) return;
      let returnUrl=localStorage.getItem('returnUrl');
    if(!returnUrl) return;
    localStorage.removeItem('returnUrl');
    router.navigateByUrl(returnUrl);
  })
 }
}
