import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
    //all headers that clients are allowed to use
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type', 
      'X-Requested-With',
      'apollo-require-preflight',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  })
  await app.listen(3000);
}
bootstrap();
