import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullname: string = '';
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    let value: { fullname: string; total: number } =
      this.cartService.getOrderDetails();
    this.fullname = value.fullname;
    this.total = value.total;
  }
}
