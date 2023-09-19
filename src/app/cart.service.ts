import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartDataUrl = './assets/cart-data.json'; 
  private productsInCart: any[] = [];

  constructor(private http: HttpClient) {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      this.productsInCart = JSON.parse(cartData);
    }
  }

  getCartItems(): { product: number; quantity: number }[] {
    return this.productsInCart;
  }

  addToCart(product: any): void {
    const cartItem = this.productsInCart.find((item) => item.product === product.id);
    if (cartItem) {
      console.log(cartItem,);
      cartItem.quantity++;
      localStorage.setItem("cartItems",JSON.stringify(this.productsInCart))
    } else {
      console.log(product);
      this.productsInCart.push({...product, product: product.id, quantity: 1 });
      localStorage.setItem("cartItems",JSON.stringify(this.productsInCart))
    }
    this.updateCartData();
  }

  private loadCartData(): Observable<{ product: number; quantity: number }[]> {
    return this.http.get<{ product: number; quantity: number }[]>(this.cartDataUrl);
  }

  updateCartData(): void {
    console.log(this.productsInCart);
  }
}