import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartDataUrl = './assets/cart-data.json'; // Update the path to your JSON file
  private productsInCart: any[] = [];

  constructor(private http: HttpClient) {
    // Retrieve cart data from localStorage when the service is initialized
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      this.productsInCart = JSON.parse(cartData);
    }
    // this.loadCartData().subscribe((data) => {
    //   this.productsInCart = data;
    // });
  }

  // constructor(private http: HttpClient) {
  //   // Load cart data from the JSON file when the service is initialized
  //   this.loadCartData().subscribe((data) => {
  //     this.productsInCart = data;
  //   });
  // }

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
    // Update the JSON file with the new cart data
    this.updateCartData();
  }

  private loadCartData(): Observable<{ product: number; quantity: number }[]> {
    return this.http.get<{ product: number; quantity: number }[]>(this.cartDataUrl);
  }

  updateCartData(): void {
    console.log(this.productsInCart);
    // Update the JSON file with the current cart data
    // this.http.put(this.cartDataUrl, this.productsInCart).subscribe(() => {
    //   console.log('Cart data updated.');
    // });
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartDataUrl = './assets/cart-data.json'; // Update the path to your JSON file
//   private productsInCart: { product: number; quantity: number }[] = [];

//   constructor() {
//     // Retrieve cart data from localStorage when the service is initialized
//     const cartData = localStorage.getItem("cartItems");
//     if (cartData) {
//       this.productsInCart = JSON.parse(cartData);

      
      
//     }
//   }
  
// }

