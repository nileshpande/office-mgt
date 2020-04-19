import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor,HttpErrorResponse } from '@angular/common/http';
import { AuthService } from  './auth.service';
import { Observable, throwError } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req:any,next:any)
  {
    let authoriser = this.injector.get(AuthService);
    let tokenizedreq = req.clone({
       setHeaders:{
        Authorization: `Bearer ${authoriser.get_token()}`
       } 
    })
    return next.handle(tokenizedreq)
    .pipe(catchError(this.handleError));  
  }

  handleError(error: HttpErrorResponse)
  {
    
    return throwError(error);
  }

}
