import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DiscordModule } from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';

import { CommandModule } from './command.module';

//import { PlayCommand } from './commands/play.command';
//import { PlaylistCommand } from './commands/playlist.command';

@Module({
  imports: [
    // DiscordModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     token: configService.get('TOKEN'),
    //     discordClientOptions: {
    //       intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    //     },
    //     registerCommandOptions: [
    //       {
    //         forGuild: configService.get('GUILD_ID_WITH_COMMANDS'),
    //         removeCommandsBefore: true,
    //       },
    //     ],
    //     failOnLogin: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    // CommandModule,
  ],
})
export class DiscordBotModule {}
