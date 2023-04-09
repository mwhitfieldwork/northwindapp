import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../_models/product';
import {catchError, tap, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = 'https://localhost:7216/Product/';

  nwDataChanged:BehaviorSubject<any>;

  constructor(private _http:HttpClient) {
    this.nwDataChanged = new BehaviorSubject([]);
   }

  getProducts():Observable<Product[]> {
    var response = this._http.get<Product[]>(this.url)
    .pipe(
      tap(items => {
        this.nwDataChanged.next(items);
        console.log(items)
      }),
      catchError(this.handleError),
    )

    return response
  }

  getProduct(productId:string):Observable<Product> {
    let url = `${this.url}${productId}`;
    var response = this._http.get<Product>(url)
    .pipe(
      tap(item => {
        this.nwDataChanged.next(item);
        console.log(item)
      }),
      catchError(this.handleError),
    )

    return response
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}
