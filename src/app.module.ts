import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HttpModule } from './http/http.module';
import { DiscordBotModule } from './bot/discord.module';

@Module({
  imports: [
    // For Config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      ignoreEnvFile: 'prod' === process.env.NODE_ENV,
    }),
    // For HTTP
    HttpModule,
    // For Discord
    DiscordBotModule,
  ],
})
export class AppModule {}
