import { Inject, Injectable } from '@nestjs/common';
import { Client, ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  testLog() {
    this.userServiceClient.emit('user-testlog', {});
  }
}
