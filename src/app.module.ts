import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BaseConfig } from './configs/base.config';
import { HttpModule } from './apps/http/http.module';

@Module({
  imports: [
    // For Config
    ConfigModule.forRoot(BaseConfig),
    // For HTTP
    HttpModule,
  ],
  providers: [Logger],
})
export class AppModule {}
