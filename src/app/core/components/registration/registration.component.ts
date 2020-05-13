import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/User';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  repeatPassword: string='';
  user = new User('', '', false);

  constructor(private authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
  }

  checkPswrdEqulty() {
    return this.repeatPassword == this.user.password;
  }

  signUp() {
    this.authService.createUser(this.user)
      .then(user => {
        if (user)
          this.route.navigate(['/login'], { queryParams: { 'success': 'true' } })
      })

  }

}
