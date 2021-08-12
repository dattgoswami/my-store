import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductQuantity } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductItemDetailService } from '../services/product-item-detail.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  constructor(
    private cartService: CartService,
    private produdctItemDetail: ProductItemDetailService
  ) {
    this.product = {
      id: 0,
      name: 'some item',
      price: 0.0,
      url: 'some url',
      description: 'some description',
    };
    this.quantity = 1;
  }

  ngOnInit(): void {}
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product, this.quantity);
  //   alert('Product added to the cart!');
  // }

  // @Output() addToCart = new EventEmitter<ProductQuantity>();

  handleAddToCart() {
    // this.addToCart.emit({
    //   product: this.product,
    //   quantity: Number(this.quantity),
    // });
    let flag: boolean = this.cartService.addToCart({
      product: this.product,
      quantity: Number(this.quantity),
    });
    if (flag) {
      alert('Product added to the cart!');
    } else if (!flag) {
      alert('Product already exists in the cart!');
    }
  }

  passDataDetail(productValue: Product, quantityValue: number) {
    this.produdctItemDetail.addProductDetail({
      product: productValue,
      quantity: quantityValue,
    });
  }
}
