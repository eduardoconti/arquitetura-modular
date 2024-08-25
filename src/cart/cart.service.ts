import { Injectable } from '@nestjs/common';
import { Cart } from './cart.model';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CartService {
  constructor(private readonly productService: ProductService) {}
  getCart(): Cart {
    const product = this.productService.getProduct();
    return Cart.create({ itens: [{ quantity: 1, product }] });
  }
}
