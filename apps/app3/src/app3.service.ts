import { Injectable } from '@nestjs/common';

@Injectable()
export class App3Service {
  getHello(): string {
    return 'Hello App3 Monoservice with new chnages 111111111 !!';
  }
}
