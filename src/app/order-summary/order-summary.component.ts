import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  orders: any[] = [];

  constructor(private http: HttpClient) {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      this.orders = JSON.parse(cartData);
    }
  }

  placeOrder(){
    alert("order has been placed successfully");
    window.open("/catalogue","_self")
  }
}
