import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  getProduct(): Product {
    return Product.create({ name: 'fake', value: 100 });
  }
}
