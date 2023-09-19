import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'assets/products.json'; 

  constructor(private http: HttpClient) {}
  
  getProducts() {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl);
  }
}
