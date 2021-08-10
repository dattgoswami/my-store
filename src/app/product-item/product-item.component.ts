import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;
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
    this.cartService.addToCart(product, this.quantity);
    alert('Product added to the cart!');
  }
}
