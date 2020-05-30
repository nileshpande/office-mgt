import { Injectable } from '@angular/core';
import { Login } from '../page-layout/pages/login-reg/login';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { map,tap,catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost/office_mgt_api/';
  constructor(private http: HttpClient) { }

  public login(userInfo: Login):Observable<any>
  {
    return this.http.post<any>(`${this.API_URL}login.php`,userInfo);
    //.pipe( catchError(this.handleError) );   
    //.pipe( retry(3),catchError(this.handleError) );  for rettry api 
  }
  


  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public get_token()
  {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  // Error Handling. Catches error and passes to requesting function.
  // handleError(error: HttpErrorResponse)
  // {
  //   return throwError(error);
  // }
}
