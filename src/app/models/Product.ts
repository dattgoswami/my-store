export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 1;
    this.url = '';
    this.description = '';
  }
}

export class ProductQuantity {
  product: Product;
  quantity: number;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
    this.quantity = 1;
  }
}
