import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 5000; // Specify the port number here

  await app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });
}

bootstrap();
