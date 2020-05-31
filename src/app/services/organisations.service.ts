import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { map,tap,catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  API_URL = 'http://localhost/office_mgt_api/';
  constructor(public http: HttpClient) { }

  public formsubmitt(formsubmit: object):Observable<any>
  {
    return this.http.post<any>(`${this.API_URL}organisation_api/add-new-employee.php`,JSON.stringify(formsubmit));
  }
  public get():Observable<any>
  {
    return this.http.get<any>(`${this.API_URL}organisation_api/get-emp-list.php`);
  }

}
