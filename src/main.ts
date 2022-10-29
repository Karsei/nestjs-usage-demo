import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const http = await NestFactory.create(AppModule);
  await http.listen(process.env.SERVER_PORT);
  console.info(`Current Server Profile: '${process.env.NODE_ENV}'`);
  console.info(`Listening HTTP Requests on ${process.env.SERVER_PORT}...`);
}
bootstrap();
