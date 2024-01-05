import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // quita de los payloads los atributos que no esten definidos,
    forbidNonWhitelisted: true,
  }))
  await app.listen(3000);
}
bootstrap();
