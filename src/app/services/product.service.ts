import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  // // https://www.techiediaries.com/angular-local-json-files/
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }
}
