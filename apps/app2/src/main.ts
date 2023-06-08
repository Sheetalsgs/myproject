import { NestFactory } from '@nestjs/core';
import { App2Module } from './app2.module';

async function bootstrap() {
  const app = await NestFactory.create(App2Module);
  const port = 5002; // Specify the port number here

  await app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });
}

bootstrap();
