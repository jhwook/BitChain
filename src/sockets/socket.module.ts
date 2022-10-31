import { Module } from '@nestjs/common';
import { FinnhubsGateway } from './finnhub.gateway';

@Module({
  providers: [FinnhubsGateway],
})
export class SocketsModule {}
