import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  getHello = (): string => 'Hello World!';
}
