import { Injectable } from '@nestjs/common';

@Injectable()
export class App1Service {
  getHello(): string {
    return 'Hello App1 Monoservice.....for next test...';
  }
}
