import { Injectable } from '@angular/core';
import { ProductQuantity } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductItemDetailService {
  productQuantity: ProductQuantity = {} as ProductQuantity;
  constructor() {}
  addProductDetail(productQuantity: ProductQuantity): ProductQuantity {
    // product.quantity = quantity;
    this.productQuantity = productQuantity;
    return this.productQuantity;
  }
  getProductDetail() {
    return this.productQuantity;
  }
}
