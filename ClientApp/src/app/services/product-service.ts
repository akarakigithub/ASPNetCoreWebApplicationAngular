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

  getAll() {
    return this.http.get<Product[]>(this.baseUrl + 'api/product');
  }

  get(id: string) {
    return this.http.get<Product>(this.baseUrl + 'api/product?id='+id);
  }

  add(prod: Product) {
    return this.http.post(this.baseUrl + 'api/product', prod);
  }

  update(id: string, prod: Product) {
    return this.http.put(this.baseUrl + 'api/product?id=' + id, prod);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + 'api/product?id=' + id);
  }
}
