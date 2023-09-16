import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products: any[] = [];
  private cartPrroducts: any[] = [];
  productsInCart: any[] = [];

  incrementQuantity(product: any): void {
    const cartItem = this.productsInCart.find((item) => item.product === product.id);
    if (cartItem) {
      // console.log(cartItem,);
      cartItem.quantity++
      product.quantity = cartItem.quantity;
      localStorage.setItem("cartItems", JSON.stringify(this.productsInCart));
    } else {
      this.productsInCart.push({ ...product, product: product.id, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(this.productsInCart));
    }

  }

  decrementQuantity(product: any): void {
    const cartItem = this.productsInCart.find((item) => item.product === product.id);
    if (cartItem && cartItem.quantity > 0) {
      if (cartItem.quantity === 1) {
        cartItem.quantity--;
        product.quantity = cartItem.quantity;
        const filteredItem = this.productsInCart.filter((el, i) => el.product !== product.id);
        this.productsInCart = filteredItem;
        localStorage.setItem("cartItems", JSON.stringify(filteredItem))
      } else {
        cartItem.quantity--;
        product.quantity = cartItem.quantity;
        localStorage.setItem("cartItems", JSON.stringify(this.productsInCart))
      }
    }
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService, // Inject CartService
    private http: HttpClient
  ) {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      this.productsInCart = JSON.parse(cartData);
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
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
      alert("Product Added Successfully")
      localStorage.setItem("cartItems",JSON.stringify(this.productsInCart))
    }
  }

  checkVisibility(product: any): any {
    const cartItem = this.productsInCart.find((item) => item.product === product.id);
    if(cartItem){
      return true;
    }else{
      return false;
    }
  }
}


