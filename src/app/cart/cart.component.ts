import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productsInCart: any[] = [];
  toastMessage: string = "";
  orders: any[] = [];

  constructor(private http: HttpClient) {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      this.productsInCart = JSON.parse(cartData);
    }
  }

  removeItem(product: any): void {
    const filteredItem = this.productsInCart.filter((el, i) => el.product !== product.id);
    this.productsInCart = filteredItem;
    localStorage.setItem("cartItems", JSON.stringify(filteredItem))
    this.toastMessage = 'Item removed from the cart';
  }

  placeOrder(){
    if(this.productsInCart.length > 0 ){
      window.open("/orders","_self")
    }else{
      alert("Your Cart is empty")
    }
  }

  checkLength(){
    if(this.productsInCart.length > 0){
      return true;
    }else{
      return false;
    }
  }
}
