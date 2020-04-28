import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  productListApi = 'https://5e79ba8717314d001613356f.mockapi.io/product';
  brandApi = "https://5e79ba8717314d001613356f.mockapi.io/brand";
  constructor(
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productListApi);
  }

  getBrandList(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.brandApi);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.productListApi}/${id}`);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.productListApi}/${product.id}`, product);
  }

  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.productListApi,product);
  }

  removeProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.productListApi}/${id}`);
  }
}
