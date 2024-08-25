import { randomUUID } from 'crypto';
import { Product } from 'src/product/product.model';

type CartItem = {
  quantity: number;
  product: Product;
};
type CartProps = {
  id: string;
  itens?: CartItem[];
};
export class Cart {
  private id: string;
  private itens?: CartItem[];

  private constructor(cartProps: CartProps) {
    this.id = cartProps.id;
    this.itens = cartProps.itens ?? [];
  }

  static create(props: Omit<CartProps, 'id'>): Cart {
    return new Cart({ ...props, id: randomUUID() });
  }

  getId(): string {
    return this.id;
  }

  getItens(): CartItem[] {
    return this.itens;
  }

  getValue() {
    return this.itens.reduce(
      (acc, item) => (acc += item.product.getValue() * item.quantity),
      0,
    );
  }
}
