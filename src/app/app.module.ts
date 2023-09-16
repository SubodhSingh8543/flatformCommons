import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [AppComponent, CatalogueComponent, CartComponent, ToastMessageComponent,ToastMessageComponent, OrderSummaryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule], // Add AppRoutingModule to imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
