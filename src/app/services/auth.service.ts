import { Injectable } from '@angular/core';
import { Login } from '../page-layout/pages/login-reg/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userInfo: Login){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
