import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'shared/models/User';
import { Subject } from 'rxjs/Subject';
import { config } from '../../../assets/Config'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  invokeEvent: Subject<any> = new Subject();
  user: User;
  private baseUrl = config[0].baseUrl;

  constructor(private http: HttpClient) { }

  async login(user: User) {

    return await this.http.post(this.baseUrl + 'authentictae', user).toPromise()
      .then((data: any) => {
        if (data.staus == 'Success') {
          this.user = <User>data.dataObj;
          sessionStorage.setItem('loggedInUser', JSON.stringify(this.user));
          this.invokeEvent.next(this.user);
        }
        return this.user;
      });

  }

  async createUser(user: User) {
    return await this.http.post(this.baseUrl + 'createUser', user).toPromise()
      .then((user: any) => {
        this.user = user;
        return this.user;
      });
  }

  logout() {
    this.user = new User('', '', false);
    sessionStorage.setItem('loggedInUser', JSON.stringify(this.user));
    this.invokeEvent.next(this.user);
  }

  async getUserById(userId) {
    return await this.http.get(this.baseUrl + 'getUserById/' + userId).toPromise()
      .then((user: User) => {
        this.user = user;
        return this.user
      });
  }
}
