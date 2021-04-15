import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  static getHello(): string {
    return 'Hello World!';
  }
}
