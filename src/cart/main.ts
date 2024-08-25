import { NestFactory } from '@nestjs/core';
import { CartHttpModule } from './cart.module';

async function bootstrap() {
  const app = await NestFactory.create(CartHttpModule);
  await app.listen(4000);
}
bootstrap();
