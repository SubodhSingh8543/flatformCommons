import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'assets/products.json'; // Replace with the path to your JSON data file

  constructor(private http: HttpClient) {}
  
  getProducts() {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl);
  }
}
