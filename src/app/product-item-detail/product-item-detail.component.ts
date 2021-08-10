import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: 'some item',
      price: 0.0,
      url: 'some url',
      description: 'some description',
      quantity: 1,
    };
  }

  ngOnInit(): void {}
  addToCart(product: Product) {
    this.cartService.addToCart(product, 1);
    alert('Product added to the cart!');
  }
}
