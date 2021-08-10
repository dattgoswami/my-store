import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  fullname: string = '';
  address: string = '';
  cardnumber: string = '';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartItems();
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.products = [];
    alert('Cart cleared!');
  }
  placeOrder(): void {
    alert(`${this.fullname} your order has been placed!`);
  }
}
