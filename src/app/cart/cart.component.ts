import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product, ProductQuantity } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsQuantity: ProductQuantity[] = [];
  fullname: string = '';
  address: string = '';
  cardnumber: string = '';
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productsQuantity = this.cartService.getCartItems();
    this.total = this.getTotal();
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.productsQuantity = [];
    alert('Cart cleared!');
  }
  placeOrder(): void {
    alert(`${this.fullname} your order has been placed!`);
  }
  getTotal(): number {
    for (let index = 0; index < this.productsQuantity.length; index++) {
      this.total +=
        this.productsQuantity[index].product.price *
        this.productsQuantity[index].quantity;
    }
    return this.total;
  }
  passNameTotal(fullname: string, total: number): void {
    this.cartService.addOrderDetails(fullname, total);
  }
}
