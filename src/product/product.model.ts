import { randomUUID } from 'crypto';

type ProductProps = {
  name: string;
  value: number;
  id: string;
};
export class Product {
  private id: string;
  private name: string;
  private value: number;

  private constructor(props: ProductProps) {
    this.id = props.id;
    this.name = props.name;
    this.value = props.value;
  }

  static create(props: Omit<ProductProps, 'id'>): Product {
    return new Product({ ...props, id: randomUUID() });
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getValue(): number {
    return this.value;
  }
}
