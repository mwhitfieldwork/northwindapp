import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap, map } from 'rxjs/operators';
import {User} from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:54133/Login';

  nwDataChanged:BehaviorSubject<any>;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private _http:HttpClient) {
    this.nwDataChanged = new BehaviorSubject([]);
   }

   LoginFromAPI(user: User): Observable<any> {

    return this._http.post<User>(this.url, JSON.stringify(user), this.httpOptions)
  
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}
