import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarErrorService {

  public snackbarSubject = new Subject<any>();
  public snackbarstate = this.snackbarSubject.asObservable();

  constructor() { }

  public show(message:string, type?: string)
  {
    this.snackbarSubject.next(
      {
        show:true,
        message,
        type
      }
    )
  }

}
