import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { User } from 'shared/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User('', '', false);
  loginStatus: boolean = false;
  rememberMe: boolean;
  success: string;

  constructor(private auth: AuthService, private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParamMap.subscribe(params => {
      this.success = params.get('success');
    })
    if ("undefined"!=localStorage.getItem('RememberMe'))
      if (JSON.parse(localStorage.getItem('RememberMe'))) {
        this.user.username = localStorage.getItem('Name');
        this.user.password = localStorage.getItem('Password');
        this.rememberMe = JSON.parse(localStorage.getItem('RememberMe'));
      }
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.login(this.user)
      .then((user: User) => {
        if (!user)
          this.loginStatus = true;
        else {
          this.user = user;
          if (this.rememberMe) {
            localStorage.setItem('Name', user.username);
            localStorage.setItem('Password', user.password);
          }
          localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
        };
      });
  }

}
