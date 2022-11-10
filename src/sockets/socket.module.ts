import { CacheModule, Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-store';
import { FinnhubsGateway } from './finnhub.gateway';

@Module({
  imports: [
    CacheModule.register({
      memory: redisStore,

      // Store-specific configuration:
      host: 'localhost',
      port: 6379,
    }),
  ],
  providers: [FinnhubsGateway],
})
export class SocketsModule {}
