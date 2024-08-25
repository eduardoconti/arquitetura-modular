import { NestFactory } from '@nestjs/core';
import { ProductHttpModule } from './product.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductHttpModule);
  await app.listen(3000);
}
bootstrap();
