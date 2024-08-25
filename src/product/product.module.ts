import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}

@Module({
  imports: [ProductModule],
  controllers: [ProductController],
})
export class ProductHttpModule {}
