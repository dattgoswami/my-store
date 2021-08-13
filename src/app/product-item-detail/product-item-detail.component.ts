import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductQuantity } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductItemDetailService } from '../services/product-item-detail.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productQuantity: ProductQuantity = {} as ProductQuantity;
  constructor(
    private cartService: CartService,
    private productItemDetailService: ProductItemDetailService
  ) {}

  ngOnInit(): void {
    this.productQuantity = this.productItemDetailService.getProductDetail();
  }

  handleAddToCart() {
    let flag: boolean = this.cartService.addToCart({
      product: this.productQuantity.product,
      quantity: Number(this.productQuantity.quantity),
    });
    if (flag) {
      alert('Product added to the cart!');
    } else if (!flag) {
      alert('Product already exists in the cart!');
    }
  }
}
