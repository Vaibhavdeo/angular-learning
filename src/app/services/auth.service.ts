import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) {
    return true;

  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }

}
