import { NestFactory } from '@nestjs/core';
import { App3Module } from './app3.module';

async function bootstrap() {
  const app = await NestFactory.create(App3Module);
   // Set global prefix to "/api
 app.setGlobalPrefix('login');
const port = 5003; // Specify the port number here
await app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
  
  
}
bootstrap();
