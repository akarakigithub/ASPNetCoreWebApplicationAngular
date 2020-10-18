import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  getAllGroupedMaxPrice() {
    return this.http.get<Product[]>(this.baseUrl + 'api/groupedproduct');
  }

  getAllByName(productName: string) {
    return this.http.get<Product[]>(this.baseUrl + 'api/product/getallbyname?productName='+productName);
  }

  get(id: string) {
    return this.http.get<Product>(this.baseUrl + 'api/product/get?id='+id);
  }

  add(prod: Product) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prod);
    return this.http.post(this.baseUrl + 'api/product/add', body, { 'headers': headers });
  }

  update(id: string, prod: Product) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prod);
    return this.http.put(this.baseUrl + 'api/product/update?id=' + id, prod, { 'headers': headers });
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + 'api/product/delete?id=' + id);
  }
}
