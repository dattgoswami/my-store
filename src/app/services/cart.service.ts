import { Injectable } from '@angular/core';

import { Product, ProductQuantity } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productQuantityList: ProductQuantity[] = [];
  fullname: string = '';
  total: number = 0;
  constructor() {}
  getCartItems() {
    return this.productQuantityList;
  }
  checkIfProductExists(checkId: number): boolean {
    for (let index = 0; index < this.productQuantityList.length; index++) {
      if (this.productQuantityList[index].product.id === checkId) {
        return true;
      }
    }
    return false;
  }
  addToCart(productQuantity: ProductQuantity): boolean {
    // product.quantity = quantity;
    if (!this.checkIfProductExists(productQuantity.product.id)) {
      this.productQuantityList.push(productQuantity);
      return true;
    }
    return false;
  }
  clearCart(): void {
    this.productQuantityList = [];
  }
  addOrderDetails(fullnameValue: string, totalValue: number): void {
    this.fullname = fullnameValue;
    this.total = totalValue;
  }
  getOrderDetails(): { fullname: string; total: number } {
    return { fullname: this.fullname, total: this.total };
  }
}
