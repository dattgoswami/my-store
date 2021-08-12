import { Component, OnInit } from '@angular/core';
import { Product, ProductQuantity } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService //, private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data) => {
      // for (let index = 0; index < data.length; index++) {
      //   const product: Product = data[index];
      //   product['quantity'] = 1;
      // }
      this.products = data;
    });
  }
  // handleAdd(productQuantity: ProductQuantity) {
  //   this.cartService.addToCart(productQuantity);
  // }
}
