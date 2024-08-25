import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [ProductModule],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}

@Module({
  imports: [CartModule],
  controllers: [CartController],
})
export class CartHttpModule {}
