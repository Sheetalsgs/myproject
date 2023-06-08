import { Injectable } from '@nestjs/common';

@Injectable()
export class App2Service {
  getHello(): string {
    return 'Hello App2 Monoservice !';
  }
}
