import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FilmeModule } from './filme/filme.module';

async function bootstrap() {
  const app = await NestFactory.create(FilmeModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
