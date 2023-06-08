import { NestFactory } from '@nestjs/core';
import { App1Module } from './app1.module';

async function bootstrap() {
  const app = await NestFactory.create(App1Module);
const port = 5001; // Specify the port number here
await app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
  
  
}
bootstrap();
