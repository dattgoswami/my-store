import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productList: Product[] = [];
  constructor() {}
  getCartItems() {
    return this.productList;
  }
  addToCart(product: Product, quantity: number): Product[] {
    product.quantity = quantity;
    this.productList.push(product);
    return this.productList;
  }
  clearCart(): void {
    this.productList = [];
  }
}
